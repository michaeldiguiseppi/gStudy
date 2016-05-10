(function() {
  angular.module('myApp')
    .controller('ProfileCtrl', ['$scope', '$rootScope', '$state', 'ProfileService',
    function($scope, $rootScope, $state, ProfileService) {
      $scope.message = "Testing";
      var id = JSON.parse($rootScope.currentUser).id;
      $scope.getInfo = function() {
        ProfileService.getDecks().then(function(decks) {
          $scope.decks = decks.data.filter(function(deck) {
            return deck.user_id === id;
          });
        });
      };

      $scope.editDeck = function(id) {
        $state.go('edit({ id: id })');
      };

      $scope.deleteDeck = function(id) {
        ProfileService.deleteDeck(id).then(function() {
          $scope.getInfo();
        });
      };
    }]);
})();
