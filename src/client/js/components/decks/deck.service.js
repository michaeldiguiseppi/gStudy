(function() {

  angular.module('myApp')
    .service('DeckService', ['crudService', function(crudService) {
      return {
        getCards: function(id) {
          return crudService.getOne('cards', id).then(function(data) {
            return data.data;
          });
        },
      };
    }]);

})();
