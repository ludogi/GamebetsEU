(function() {
  'use strict';

  angular
    .module('headerService')
    .factory('headerService', header);

  header.$inject = ['cookiesService', '$rootScope', '$state', '$uibModal'];

  /* @ngInject */
  function header(cookiesService, $rootScope, $state, $uibModal) {
    return {
      login: login,
      logout: logout,
    };

    function login() {

      var user = cookiesService.GetCredentials();
      if (user) {
        $rootScope.ProfilePersonal = true;
        $rootScope.loginG = false;
        $rootScope.profileG = true;
        $rootScope.logoutG = true;
        $rootScope.signUpG = false;
        $rootScope.profile = user.email;
        $rootScope.user = user.user;
        $rootScope.displayName = user.displayName;
        $rootScope.generalG = true;
        $rootScope.socialNetwork = true;
        $rootScope.picture = user.picture;
        $rootScope.coins = user.coins;
        $rootScope.bets = true;
        $rootScope.dni = user.dni;

        // redirect
        $state.go('home');

      } else {
        $rootScope.socialNetwork = false;
        $rootScope.loginG = true;
        $rootScope.profileG = false;
        $rootScope.ProfilePersonal = false;
        $rootScope.signUpG = true;
        $rootScope.bets = false;
        // cleaning...
        $rootScope.profile = '';
        $rootScope.dni = '';
        $rootScope.user = '';
        $rootScope.displayName = '';
        $rootScope.logoutG = false;
        $rootScope.generalG = false;
        $rootScope.picture = '';
        $rootScope.coins = '';
      }
    }

    function logout() {

      cookiesService.ClearCredentials();

      $rootScope.socialNetwork = false;
      $rootScope.loginG = true;
      $rootScope.profileG = false;
      $rootScope.signUpG = true;
      // cleaning...
      $rootScope.profile = '';
      $rootScope.dni = '';
      $rootScope.displayName = '';
      $rootScope.user = '';
      $rootScope.picture = '';
      $rootScope.coins = '';
      $rootScope.ProfilePersonal = false;
      $rootScope.logoutG = false;
      $rootScope.generalG = false;
      $rootScope.bets = false;
      // redirect
      $state.go('home');
    }

  }

}());
