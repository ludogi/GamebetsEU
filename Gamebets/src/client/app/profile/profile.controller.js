(function() {
  'use strict';

  angular
    .module('app.profile')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['logger', '$scope', '$translate'];
  /* @ngInject */
  function ProfileController(logger, $scope, $translate) {
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

    function updateProfile(){
      var dataUserJSON = JSON.stringify(vm.datos);
      if ($scope.profileform.$valid) {
        dataservice.signup(dataUserJSON).then(function(response) {
          if (response === 'Usuario ya existe') {
            logger.error(response);
          } else if (response.email === vm.datos.email) {
            cookiesService.SetCredentials(response);
            logger.success('Usuario modificado con exito');
            $state.go('profile');
          } else {
            logger.error(response);
          }
        });
      } else {
        logger.success('Datos incorrectos');
      }
    }

    function activate() {
      logger.info('Activated Profile View');
    }
  }
})();
