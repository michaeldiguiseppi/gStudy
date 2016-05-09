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
              console.log('card', card);
              return crudService.addOne('cards', deck.data[0], card).then(function(data) {
                return data.data;
              });
            });
          });
        }
      };
    }]);

})();
