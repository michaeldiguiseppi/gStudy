(function() {
  angular.module('myApp')
    .controller('DeckCtrl', ['$scope', '$stateParams', 'HomeService', function($scope, $stateParams, HomeService) {
      HomeService.getOne($stateParams.id).then(function(data) {
        console.log('data', data);
        $scope.deck = data;
      });
    }]);
})();
