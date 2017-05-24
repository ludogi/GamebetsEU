(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  /*** SignIn ***/

  LoginController.$inject = ['dataservice', '$state', '$scope', '$translate','$timeout', '$uibModal', 'logger',
    '$uibModalInstance', 'cookiesService', 'headerService'
  ];

  function LoginController(dataservice, $state, $scope, $translate, $timeout, $uibModal, logger,
    $uibModalInstance, cookiesService, headerService) {
    var vm = this;

    vm.datos = {
      email: '',
      passwd: ''
    };

    vm.SubmitLogin = SubmitLogin;
    vm.CloseModal = CloseModal;

    changeLanguage();

    function changeLanguage() {
      $scope.changeLanguage = function(key) {
        $translate.use(key);
      };
    }

    function CloseModal() {
      //    $uibModal.dismiss('cancel');
    }

    function SubmitLogin() {
      var dataUserJSON = JSON.stringify(vm.datos);
      dataservice.localSignIn(dataUserJSON).then(function(response) {
        if (response === 'Email incorrecto') {
          logger.error(response);
        } else if (response === 'Password incorrecto') {
          logger.error(response);
        } else if (response.email === vm.datos.email) {
          $uibModalInstance.dismiss('cancel');
          cookiesService.SetCredentials(response);
          console.log(response);
          logger.success('Usuario autentificado');
          headerService.login();
          $state.go('home');

        } else {
          logger.error(response);
        }
      });
    }

  }

})();
