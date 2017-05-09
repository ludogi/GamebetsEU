(function() {
  'use strict';

  angular
    .module('app.news')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'news',
        config: {
          url: '/news',
          templateUrl: 'app/news/news.html',
          controller: 'newsController',
          controllerAs: 'vm',
          title: 'news',
          settings: {
            nav: 7,
            content: '<i class="fa fa-lock"></i> news'
          }
        }
      }
    ];
  }
})();
