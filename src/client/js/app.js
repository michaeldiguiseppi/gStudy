angular.module('myApp', ['ui.router']);

angular.module('myApp')
  .controller('mainController', ['$scope', function($scope) {
    $scope.message = "Hello World!";
  }]);
