(function() {

  angular.module('myApp')
    .service('HomeService', ['crudService', function(crudService) {
      return {
        getAll: function() {
          return crudService.getAll('decks').then(function(data) {
            return data.data;
          });
        },
        getOne: function(id) {
          return crudService.getOne('decks', id).then(function(data) {
            return data.data[0];
          });
        },
      };
    }]);

})();
