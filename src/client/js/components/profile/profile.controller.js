(function() {
  angular.module('myApp')
    .controller('ProfileCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'ProfileService', 'DeckService', 'HomeService',
    function($scope, $rootScope, $state, $stateParams, ProfileService, DeckService, HomeService) {
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
      if ($rootScope.currentUser) {
        $scope.getDeck = function() {
          HomeService.getOne($stateParams.id).then(function(data) {
            $scope.newDeck = data;
            DeckService.getCards(data.id).then(function(cards) {
              $scope.newDeck.cards = cards;
              $scope.newDeck.user_id = JSON.parse($rootScope.currentUser).id;
            });
          });
        };

        $scope.addQuestion = function() {
          $scope.newDeck.cards.push({});
        };

        $scope.edit = function(id) {
          DeckService.editDeck(id, $scope.newDeck).then(function() {
            $state.go('home');
          });
        };
      }
    }]);
})();
