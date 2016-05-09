var express = require('express');
var router = express.Router();

var handlers = require('./helpers/handlers');
var authHelpers = require('./helpers/auth');
var knex = require('../db/knex.js');
var bcrypt = require('bcryptjs');

function Users () {
  return knex('users');
}

router.post('/register', hashPassword, function(req, res, next) {
  // ensure user does not already exist
  Users().insert(req.body)
    .returning('*')
    .then(function (member) {
      delete member[0].password;
      var token = authHelpers.generateToken(member[0]);
      return Promise.resolve({
        token: token,
        data: member[0]
      });
    })
    .then(handlers.success(res, 201))
    .catch(handlers.error(res, 422));
});

router.post('/login', comparePassword, function (req, res, next) {
  // ensure that user exists
  console.log('Got here!!!!!!');
  Users().select().where('email', req.body.email)
  .then(function (user) {
    if (!user[0]) {
      return res.status(401).json({
        status: 'fail',
        message: 'Email does not exist',
        requestBody: req.body
      });
    } else
      if ( !req.body.password ) {
        return res.status(401),json({
          status: 'fail',
          message: 'Missing password.',
          requestBody: req.body
        });
      }
      delete user[0].password;
      var token = authHelpers.generateToken(user[0]);
      res.status(200).json({
        status: 'success',
        data: {
          token: token,
          user: user[0]
        }
      });
  })
  .catch(function (err) {
    console.log(err);
    return next(err);
  });
});

function hashPassword (req, res, next) {
  var user = req.body;
  // only hash if password is new or being modified
  // generate salt
  bcrypt.genSalt(10, function(err, salt) {
    if(err) {
      return next(err);
    }
    // hash password
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) {
        return next(err);
      }
      // override the plain-text password with new hashed/salted password
      user.password = hash;
      // go to the next middleware function
      next();
    });
  });
}

// compare password to verify plain text against the hashed password
function comparePassword (req, res, next)  {
  console.log('getting here?');
  Users().select().where('email', req.body.email).then(function(user) {
    console.log(user);
    bcrypt.compare(req.body.password, user[0].password, function(err, match) {
      if(err) {
        return next(err);
      }
      next();
    });
  })
  .catch(function(err) {
    console.log(err);
  });
}


module.exports = router;
