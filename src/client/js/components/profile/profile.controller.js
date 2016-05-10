(function() {
  angular.module('myApp')
    .controller('ProfileCtrl', ['$scope', 'ProfileService', function($scope, ProfileService) {
      $scope.message = "Testing";
      ProfileService.getDecks().then(function(decks) {
        $scope.decks = decks.data;
      });
    }]);
})();
