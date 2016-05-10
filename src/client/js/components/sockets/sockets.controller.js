(function() {
  angular.module('myApp')
    .controller('SocketCtrl', ['SocketService', '$scope', '$rootScope', 'crudService', function(SocketService, $scope, $rootScope, crudService) {
      $rootScope.notifications = $rootScope.notifications || [];
      console.log('Controller!');
      SocketService.forward('deck.studying', $scope);
      $scope.$on('socket:deck.studying', function (ev, data) {
        console.log('from angular!', data);
        crudService.getOne('user', data.user_id).then(function(user) {
          crudService.getOne('decks', data.deck_id).then(function(deck) {
            data.user = user.data[0];
            data.deck = deck.data[0].deck_name;
            $rootScope.notifications.push(data);
          });
        });
      });
      SocketService.forward('deck.created', $scope);
      $scope.$on('socket:deck.created', function (ev, data) {
        console.log('from angular!', data);
        crudService.getOne('user', data.user_id).then(function(user) {
          crudService.getOne('decks', data.deck_id).then(function(deck) {
            data.user = user.data[0];
            data.deck = deck.data[0].deck_name;
            $rootScope.notifications.push(data);
          });
        });
      });
    }]);
})();
