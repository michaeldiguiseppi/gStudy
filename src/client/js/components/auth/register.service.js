(function() {
  angular.module('myApp')
    .service('RegisterService', ['$http', '$window', function($http, $window) {
      var baseUrl;
      if (process.env.NODE_ENV === 'production') {
        baseUrl = 'http://gstudy.herokuapp.com';
      } else {
        baseUrl = 'http://localhost:3000';
      }
      return {
        register: function(data) {
          return $http({
            method: 'POST',
            url: baseUrl + 'auth/register',
            data: data,
          }).then(function(data) {
            return data;
          }).catch(function(err) {
            return err;
          });
        },
        setUserInfo: function(user) {
          console.log(user);
          $window.localStorage.setItem('user', JSON.stringify(user.data));
          $window.localStorage.setItem('token', JSON.stringify(user.token));
        }
      };
    }]);
})();
