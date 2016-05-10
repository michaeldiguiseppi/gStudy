(function() {
  angular.module('myApp')
    .controller('SocketCtrl', ['SocketService', '$scope', function(SocketService, $scope) {
      $scope.notifications = [];
      console.log('Controller!');
      SocketService.forward('deck.studying', $scope);
          $scope.$on('socket:deck.studying', function (ev, data) {
            console.log('from angular!', data);
            $scope.notifications.push(data);
          });
    }]);
})();
