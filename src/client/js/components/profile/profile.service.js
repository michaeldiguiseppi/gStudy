(function() {
  angular.module('myApp')
    .service('ProfileService', ['$rootScope', 'crudService', function($rootScope, crudService) {
      var currentUser = JSON.parse($rootScope.currentUser).id;
      return {
        getDecks: function() {
          return crudService.getDecks(currentUser).then(function(data) {
            return data.data;
          });
        }
      };
    }]);
})();
