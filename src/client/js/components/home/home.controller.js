angular.module('myApp')
  .controller('HomeCtrl', ['$scope', 'HomeService', function($scope, HomeService) {
    $scope.message = 'Hello World! How ya doing?';
    HomeService.getAll().then(function(data) {
      console.log('Here?????', data);
      $scope.decks = data;
    });
  }]);
