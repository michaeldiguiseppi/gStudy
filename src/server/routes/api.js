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
router.post('/decks/:id', postDecks);
router.post('/cards/:id', postCards);

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

function postDecks(req, res) {
  console.log('req.body', req.body);
  req.body.user_id = req.params.id;
  delete req.body.cards;
  Decks().insert(req.body).returning('id').then(function(data) {
    res.json(data);
  });
}

function postCards(req, res) {
  req.body.deck_id = req.params.id;
  Cards().insert(req.body).returning('*').then(function(data) {
    res.json(data);
  });
}

module.exports = router;
