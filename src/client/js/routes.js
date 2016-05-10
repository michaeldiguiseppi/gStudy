(function() {
    angular.module('myApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "js/components/home/home.template.html",
          controller: 'HomeCtrl',
          data: {
              requireLogin: true,
            }
        })
        .state('login', {
          url: "/login",
          templateUrl: "js/components/auth/login.template.html",
          controller: 'AuthCtrl',
          data: {
              blockLogin: true,
            }
        })
        .state('signup', {
          url: "/signup",
          templateUrl: "js/components/auth/signup.template.html",
          controller: 'RegisterCtrl',
          data: {
              blockLogin: true,
            }
        })
        .state('deck', {
          url: "/deck/:id",
          templateUrl: "js/components/decks/deck.template.html",
          controller: 'DeckCtrl',
          data: {
              requireLogin: true,
            }
        })
        .state('create', {
          url: "/new",
          templateUrl: "js/components/decks/new.template.html",
          controller: 'DeckCtrl',
          data: {
              requireLogin: true,
            }
        })
        .state('study', {
          url: "/study/:id",
          templateUrl: "js/components/study/study.template.html",
          controller: 'StudyCtrl',
          data: {
              requireLogin: true,
            }
        })
        .state('profile', {
          url: '/profile',
          templateUrl: "js/components/profile/profile.template.html",
          controller: 'ProfileCtrl',
          data: {
              requireLogin: true,
            }
        })
        .state('logout', {
          controller: function($scope, $rootScope, AuthService) {
            function logout () {
              AuthService.logout($rootScope.currentUser);
            }
            logout();
          },
          data: {
              requireLogin: true,
            }
        });
    });

    angular.module('myApp')
      .run(function($rootScope, $state, $window) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
          var requireLogin = toState.data.requireLogin;
          var blockLogin = toState.data.blockLogin;
          $rootScope.currentUser = $window.localStorage.getItem('user');
          if (requireLogin && !$rootScope.currentUser) {
            event.preventDefault();
            $state.go('register');
          }
          if (blockLogin && $rootScope.currentUser) {
            event.preventDefault();
            $state.go('home');
          }
        });
      });

})();
