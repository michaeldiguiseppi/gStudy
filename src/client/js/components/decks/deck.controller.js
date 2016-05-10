(function() {
  angular.module('myApp')
    .controller('DeckCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'HomeService', 'DeckService',
    function($scope, $stateParams, $rootScope, $state, HomeService, DeckService) {
      $scope.getDeck = function() {
        HomeService.getOne($stateParams.id).then(function(data) {
          console.log('data', data);
          $scope.deck = data;
          DeckService.getCards(data.id).then(function(cards) {
            $scope.cards = cards;
          });
        });
      };

      if ($rootScope.currentUser) {
        $scope.newDeck = {
          cards: [{}],
          deck_name: '',
          description: '',
          user_id: JSON.parse($rootScope.currentUser).id,
        };

        $scope.addQuestion = function() {
          $scope.newDeck.cards.push({});
        };

        $scope.addDeck = function() {
          console.log($scope.newDeck);
          var user_id = JSON.parse($rootScope.currentUser).id;
          DeckService.addDeck(user_id, $scope.newDeck).then(function() {
            $state.go('home');
          });
        };
      }
    }]);
})();
