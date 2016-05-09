var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
function Decks () {
  return knex('decks');
}

router.get('/decks', getDecks);
router.get('/decks/:id', getOneDeck);

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

module.exports = router;
