(function() {
  angular.module('myApp')
    .controller('ProfileCtrl', ['$scope', '$rootScope', 'ProfileService', function($scope, $rootScope, ProfileService) {
      $scope.message = "Testing";
      var id = JSON.parse($rootScope.currentUser).id;
      ProfileService.getDecks().then(function(decks) {
        $scope.decks = decks.data.filter(function(deck) {
          return deck.user_id === id;
        });
      });
    }]);
})();
