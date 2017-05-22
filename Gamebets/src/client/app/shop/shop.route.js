(function() {
  'use strict';

  angular
    .module('app.shop')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'shop',
        config: {
          url: '/shop',
          templateUrl: 'app/shop/shop.html',
          controller: 'shopController',
          controllerAs: 'vm',
          title: 'shop',
          settings: {
            nav: 8,
            content: '<i class="fa fa-lock"></i> shop'
          }
        }
      }
    ];
  }
})();
