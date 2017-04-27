(function() {
  'use strict';

  angular
    .module('app.bets')
    .controller('betsController', betsController);

  betsController.$inject = ['logger'];
  /* @ngInject */
  function betsController(logger) {
    var vm = this;
    vm.title = 'Bets';

    activate();

    function activate() {
      logger.info('Activated Bets View');
    }
  }
})();
