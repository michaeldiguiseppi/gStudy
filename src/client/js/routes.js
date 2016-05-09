(function() {
    angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "js/components/home/home.template.html",
          controller: 'HomeCtrl',
        })
        .state('login', {
          url: "/login",
          templateUrl: "js/components/auth/login.template.html",
          controller: 'AuthCtrl',
        })
        .state('signup', {
          url: "/signup",
          templateUrl: "js/components/auth/signup.template.html",
          controller: 'AuthCtrl',
        });
        // .state('members', {
        //   url: "/members",
        //   templateUrl: "components/home/home.template.html",
        //   authenticate: true,
        //   data: {
        //     requireLogin: true,
        //   }
        // })
        // .state('members.view', {
        //   url: "/view?slug",
        //   templateUrl: "components/members/onemember.template.html",
        //   authenticate: true,
        //   controller: 'OneMemberCtrl',
        //   data: {
        //     requireLogin: true,
        //   }
        // })
        // .state('members.search', {
        //   url: "/search",
        //   templateUrl: "components/search/search.template.html",
        //   authenticate: false,
        //   controller: 'SearchCtrl',
        //   data: {
        //     requireLogin: true,
        //   }
        // })
        // .state('profile', {
        //   url: "/profile",
        //   templateUrl: "components/profile/profile.template.html",
        //   authenticate: false,
        //   controller: 'ProfileCtrl',
        //   data: {
        //     requireLogin: true,
        //   }
        // })
        // .state('login', {
        //   url: "/login",
        //   templateUrl: "components/log-in/log-in.template.html",
        //   controller: 'LoginCtrl',
        //   authenticate: false,
        //   data: {
        //     requireLogin: false,
        //     blockLogin: true,
        //   }
        // })
        // .state('register', {
        //   url: "/register",
        //   templateUrl: "components/register/register.template.html",
        //   controller: 'RegisterCtrl',
        //   authenticate: false,
        //   data: {
        //     requireLogin: false,
        //     blockLogin: true,
        //   }
        // })
        // .state('logout', {
        //   authenticate: false,
        //   controller: function($scope, $rootScope, LoginService) {
        //     function logout () {
        //       LoginService.logout($rootScope.currentUser);
        //     }
        //     logout();
        //   },
        //   data: {
        //     requireLogin: true,
        //   }
        // });
    });
})();
