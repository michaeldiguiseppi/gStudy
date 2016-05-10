(function() {
  angular.module('myApp')
    .service('SocketService', ['socketFactory', function(socketFactory) {
      return socketFactory();
    }]);
})();
