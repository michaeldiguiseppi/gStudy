(function() {
  angular.module('myApp')
    .controller('SocketCtrl', ['SocketService', '$scope', function(SocketService, $scope) {
      SocketService.forward('status', $scope);
          $scope.$on('socket:status', function (ev, data) {
            console.log('from angular!', ev, data);
          });
    }]);
})();
