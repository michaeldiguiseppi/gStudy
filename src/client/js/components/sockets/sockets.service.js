(function() {
  angular.module('myApp')
    .service('SocketService', ['SocketFactory', function(socketFactory) {
      return socketFactory();
    }]);
})();
