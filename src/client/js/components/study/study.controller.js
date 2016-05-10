(function() {

  angular.module('myApp')
    .controller('StudyCtrl', ['$scope', '$stateParams', '$rootScope', 'StudyService', 'SocketService',
      function($scope, $stateParams, $rootScope, StudyService, SocketService) {
        $scope.showAnswer = false;
        StudyService.getDeck($stateParams.id).then(function(deck) {
          $scope.deck = deck;
          StudyService.getCards(deck.id).then(function(cards) {
            var user_id = JSON.parse($rootScope.currentUser).id;
            $scope.cards = cards;
            $scope.remaining = cards.length;
            SocketService.emit('deck.studying', { message: 'Studying Deck', deck_id: deck.id, user_id: user_id });
          });
        });
        $scope.cardNum = 0;
        $scope.correct = 0;
        $scope.incorrect = 0;
        $scope.game = true;

        $scope.confident = function(id) {
          StudyService.updateCard(id, {positive_score: true}).then(function() {
            $scope.correct = $scope.correct + 1;
            if ($scope.remaining - 1 >= -1) {
              $scope.remaining = $scope.remaining - 1;
            }
            if ($scope.remaining === 0) {
              $scope.game = false;
            }
            if ($scope.cardNum + 1 < $scope.cards.length ) {
              $scope.cardNum = $scope.cardNum + 1;
            }
            $scope.showAnswer = false;
          });
        };
        $scope.nonConfident = function(id) {
          StudyService.updateCard(id, {negative_score: true}).then(function() {
            $scope.incorrect = $scope.incorrect + 1;
            if ($scope.remaining - 1 >= -1) {
              $scope.remaining = $scope.remaining - 1;
            }
            if ($scope.remaining === 0) {
              $scope.game = false;
            }
            if ($scope.cardNum + 1 < $scope.cards.length) {
              $scope.cardNum = $scope.cardNum + 1;
            }
            $scope.showAnswer = false;
          });
        };
      }]);

})();
