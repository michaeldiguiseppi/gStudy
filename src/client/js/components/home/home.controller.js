angular.module('myApp')
  .controller('HomeCtrl', ['$scope', '$rootScope', 'HomeService', function($scope, $rootScope, HomeService) {
    $scope.message = 'Hello World! How ya doing?';
    HomeService.getAll().then(function(data) {
      $scope.decks = data.filter(function(deck) {
        if ($rootScope.currentUser) {
          return deck.user_id === JSON.parse($rootScope.currentUser).id;
        } else {
          return deck;
        }
      });
    });
  }]);
