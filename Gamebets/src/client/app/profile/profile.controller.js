(function() {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['logger', '$scope', '$translate', 'cookiesService'];
  /* @ngInject */
  function ProfileController(logger, $scope, $translate, cookiesService) {
    var vm = this;
    vm.title = 'Profile';
    vm.inputPw = 'password';
    vm.datos = {
      username: '',
      email: '',
      password: '',
    };
    vm.limpiarCampos = limpiarCampos;

    activate();
    changeLanguage();

    function limpiarCampos() {
      vm.datos.username = '';
      vm.datos.email = '';
      vm.datos.password = '';

    }

    function changeLanguage() {
      $scope.changeLanguage = function(key) {
        $translate.use(key);
      };
    }


    function activate() {
      logger.info('Activated Profile View');
    }
  }
})();
