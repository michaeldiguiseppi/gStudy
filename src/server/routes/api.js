var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
function Decks () {
  return knex('decks');
}
function Users () {
  return knex('users');
}
function Cards () {
  return knex('cards');
}

router.get('/decks', getDecks);
router.get('/decks/:id', getOneDeck);
router.get('/cards/:id', getCards);
router.get('/user/:id', getUser);
router.post('/decks/:id', postDecks);
router.post('/cards/:id', postCards);
router.put('/decks/:id', putDecks);
router.put('/cards/:id', putCards);
router.delete('/decks/:id', deleteDecks);
router.delete('/cards/:id', deleteCards);

////////////////////////////////

function getDecks(req, res) {
  Decks().then(function(data) {
    res.json(data);
  });
}

function getOneDeck(req, res) {
  Decks().where('id', req.params.id).then(function(data) {
    res.json(data);
  });
}

function getCards(req, res) {
  Cards().where('deck_id', req.params.id).then(function(data) {
    res.json(data);
  });
}

function getUser(req, res) {
  Users().where('id', req.params.id).then(function(data) {
    res.json(data);
  });
}

function postDecks(req, res) {
  req.body.user_id = req.params.id;
  delete req.body.cards;
  Decks().insert(req.body).returning('id').then(function(data) {
    global.io.emit('deck.created', { message: ' created ', deck_id: data[0], user_id: req.body.user_id });
    res.json(data);
  });
}

function postCards(req, res) {
  req.body.deck_id = req.params.id;
  Cards().insert(req.body).returning('*').then(function(data) {
    res.json(data);
  });
}

function putDecks(req, res) {

}

function putCards(req, res) {
  var card_id = req.params.id;
  Cards().where('id', card_id).update(req.body, 1).then(function(card) {
    res.json(card);
  });
}

function deleteDecks(req, res) {
  var deck_id = req.params.id;
  Decks().where('id', deck_id).del().then(function() {
    res.json({
      message: 'Deleted successfully.'
    });
  });
}

function deleteCards(req, res) {

}

module.exports = router;
