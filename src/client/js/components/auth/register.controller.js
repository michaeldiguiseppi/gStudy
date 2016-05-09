(function() {
  angular.module('myApp')
    .controller('RegisterCtrl', RegisterCtrl);

  RegisterCtrl.$inject = ['$scope', '$rootScope', 'RegisterService', '$state'];

  function RegisterCtrl ($scope, $rootScope, RegisterService, $state) {
    $scope.user = {
     first_name: '',
     last_name: '',
     email: '',
     password: '',
   };
    $scope.register = function() {
      RegisterService.register($scope.user).then(function(data) {
          RegisterService.setUserInfo(data.data.data);
          $state.go('home');
      });
    };
  }
})();
