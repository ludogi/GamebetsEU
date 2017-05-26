(function() {
  'use strict';

  angular
    .module('app.bets_room')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
      state: 'bets_room',
      config: {
        url: '/bets_room',
        templateUrl: 'app/bets_room/bets_room.html',
        controller: 'betsRoomController',
        controllerAs: 'vm',
        title: 'bets_room',

      }
    }];
  }
})();
