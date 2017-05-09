(function() {
  'use strict';

  angular
    .module('app.news')
    .controller('newsController', newsController);

  newsController.$inject = ['logger'];
  /* @ngInject */
  function newsController(logger) {
    var vm = this;
    vm.title = 'news';

    activate();

    function activate() {
      logger.info('Activated News View');
    }
  }
})();
