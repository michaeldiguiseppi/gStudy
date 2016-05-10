(function() {
  angular.module('myApp')
    .service('ProfileService', ['$rootScope', 'crudService', function($rootScope, crudService) {
      var currentUser = JSON.parse($rootScope.currentUser).id;
      return {
        getDecks: function() {
          return crudService.getAll('decks').then(function(data) {
            return data;
          });
        },
        deleteDeck: function(id) {
          return crudService.deleteOne('decks', id).then(function(data) {
            return data;
          });
        },
      };
    }]);
})();
