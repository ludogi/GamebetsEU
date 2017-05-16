(function() {
  'use strict';

  angular
    .module('app.events')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'events',
        config: {
          url: '/events',
          templateUrl: 'app/events/events.html',
          controller: 'eventsController',
          controllerAs: 'vm',
          title: 'events',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Events'
          }
        }
      }
    ];
  }
})();
