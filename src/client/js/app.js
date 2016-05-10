angular.module('myApp', ['ui.router', 'btford.socket-io']);

angular.module('myApp')
  .controller('mainController', ['$scope', function($scope) {
    $scope.message = "Hello World!";
  }]);
