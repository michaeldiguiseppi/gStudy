(function() {

  angular.module('myApp')
    .service('HomeService', ['crudService', function(crudService) {
      return {
        getAll: function() {
          console.log('here?');
          return crudService.getAll('decks').then(function(data) {
            console.log('Home Service Data', data);
            return data;
          });
        }
      };
    }]);

})();
