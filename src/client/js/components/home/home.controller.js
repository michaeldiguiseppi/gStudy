angular.module('myApp')
  .controller('HomeCtrl', ['$scope', 'HomeService', function($scope, HomeService) {
    $scope.message = 'Hello World! How ya doing?';
    HomeService.getAll().then(function(data) {
      $scope.decks = data;
    });
  }]);
