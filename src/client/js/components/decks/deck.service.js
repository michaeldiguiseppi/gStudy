(function() {

  angular.module('myApp')
    .service('DeckService', ['crudService', function(crudService) {
      return {
        getCards: function(id) {
          return crudService.getOne('cards', id).then(function(data) {
            return data.data;
          });
        },
        addCards: function(deck_id, data) {
          return crudService.addOne('cards', deck_id, data).then(function(data) {
            return data.data;
          });
        },
        addDeck: function(user_id, data) {
          var insertCards = data.cards;
          return crudService.addOne('decks', user_id, data).then(function(deck) {
            return insertCards.forEach(function(card) {
              return crudService.addOne('cards', deck.data[0], card).then(function(data) {
                return data.data;
              });
            });
          });
        },
        editDeck: function(deck_id, data) {
          var insertCards = data.cards;
          return crudService.updateOne('decks', deck_id, data).then(function(deck) {
            return insertCards.forEach(function(card) {
              if (card.id) {
                return crudService.updateOne('cards', card.id, card).then(function(data) {
                  return data.data;
                });
              } else {
                return crudService.addOne('cards', deck.data, card).then(function(data) {
                  return data.data;
                });
              }

            });
          });
        },
      };
    }]);

})();
