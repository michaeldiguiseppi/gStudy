(function() {
  angular.module('myApp')
    .service('StudyService', ['crudService', function(crudService) {
      return {
        getDeck: function(id) {
          return crudService.getOne('decks', id).then(function(deck) {
            return deck.data[0];
          });
        },
        getCards: function(id) {
          return crudService.getOne('cards', id).then(function(cards) {
            return cards.data;
          });
        },
        updateCard: function(id, direction) {
          return crudService.updateOne('cards', id, direction).then(function(card) {
            return card.data;
          });
        },
      };
    }]);
})();
