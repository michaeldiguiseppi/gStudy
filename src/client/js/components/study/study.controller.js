(function() {

  angular.module('myApp')
    .controller('StudyCtrl', ['$scope', '$stateParams', 'StudyService',
      function($scope, $stateParams, StudyService) {
        $scope.showAnswer = false;
        StudyService.getDeck($stateParams.id).then(function(deck) {
          $scope.deck = deck;
          StudyService.getCards(deck.id).then(function(cards) {
            $scope.cards = cards;
            $scope.remaining = cards.length;
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

        $scope.nextCard = function() {
          $scope.showAnswer = false;
          if ($scope.cardNum + 1 < $scope.cards.length) {
            $scope.cardNum = $scope.cardNum + 1;
          } else {

          }
        };
      }]);

})();
