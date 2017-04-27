(function() {
  'use strict';

  angular
    .module('app.bets')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'bets',
        config: {
          url: '/bets',
          templateUrl: 'app/bets/bets.html',
          controller: 'betsController',
          controllerAs: 'vm',
          title: 'bets',
          settings: {
            nav: 5,
            content: '<i class="fa fa-lock"></i> bets'
          }
        }
      }
    ];
  }
})();
