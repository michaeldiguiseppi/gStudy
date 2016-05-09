var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
function Decks () {
  return knex('decks');
}

router.get('/decks', getDecks);

function getDecks(req, res) {
  Decks().then(function(data) {
    console.log('API data', data);
    res.json(data);
  });
}

module.exports = router;
