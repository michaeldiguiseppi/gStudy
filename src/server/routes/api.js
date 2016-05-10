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
router.put('/decks/:id', putDecks);
router.put('/cards/:id', putCards);

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
  global.io.emit('status', 'deck created');
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

function putDecks(req, res) {

}

function putCards(req, res) {
  var card_id = req.params.id;
  console.log(card_id);
  console.log(req.body);
  Cards().where('id', card_id).update(req.body, 1).then(function(card) {
    res.json(card);
  });
}

module.exports = router;
