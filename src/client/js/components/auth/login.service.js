(function() {
  angular.module('myApp')
    .service('AuthService', ['$http', '$window', function($http, $window) {
      var baseUrl = 'http://localhost:3000';
      return {
        login: function(data) {
          console.log('Data', data);
          return $http({
            method: 'POST',
            url: baseUrl + '/auth/login',
            data: data,
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            console.log(err);
            return err;
          });
        },
        setUserInfo: function(user) {
          $window.localStorage.setItem('user', JSON.stringify(user.data.data.user));
          $window.localStorage.setItem('token', JSON.stringify(user.data.data.token));
        },
        getUserInfo: function() {
          return $window.localStorage.getItem('user');
        },
        logout: function(user) {
          user = null;
          $window.localStorage.clear();
          $window.location.href = '/';
        }
      };
    }]);
})();
