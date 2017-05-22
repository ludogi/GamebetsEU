(function() {
  'use strict';

  angular
    .module('app.shop')
    .controller('shopController', shopController);

  shopController.$inject = ['logger'];
  /* @ngInject */
  function shopController(logger) {
    var vm = this;
    vm.title = 'shop';

    activate();

    function activate() {
      logger.info('Activated Shop View');
    }
  }
})();
