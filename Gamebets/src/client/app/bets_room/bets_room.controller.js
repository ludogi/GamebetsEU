(function() {
  'use strict';

  angular
    .module('app.bets_room')
    .controller('betsRoomController', betsRoomController);

  betsRoomController.$inject = ['dataservice', '$rootScope', '$state', '$scope', '$translate', '$timeout', '$uibModal', 'logger', 'cookiesService', 'headerService'];

  function betsRoomController(dataservice, $state, $rootScope, $scope, $translate, $timeout, $uibModal, logger, cookiesService, headerService) {
    var vm = this;
    vm.showBetModal = showBetModal;
    vm.betcoins = betcoins;
    vm.bet_user = "";

    var user = cookiesService.GetCredentials();
    if (user) {
      $rootScope.ProfilePersonal = true;
      $rootScope.loginG = false;
      $rootScope.profileG = true;
      $rootScope.logoutG = true;
      $rootScope.signUpG = false;
      $rootScope.profile = user.email;
      $rootScope.user = user.user;
      $rootScope.displayName = user.displayName;
      $rootScope.generalG = true;
      $rootScope.socialNetwork = true;
      $rootScope.picture = user.picture;
      $rootScope.coins = user.coins;
      $rootScope.bets = true;
      $rootScope.dni = user.dni;
      $rootScope.id = user.id;
    }

    function showBetModal() {
      var modalInstance = $uibModal.open({
        animation: 'true',
        templateUrl: 'app/bets_room/bets_popup.html',
        controller: 'betsRoomController',
        controllerAs: 'vm',
        size: 'lg'
      });
    }

    function betcoins(bet) {
      console.log($rootScope);
        dataservice.bets({
        coins: vm.bet_user,
        id: $rootScope.id
      }).then(function(response) {
        console.log($rootScope);
        $rootScope.coins = $rootScope.coins - vm.bet_user;
      });
      // Primero restar coins - fijar fecha de inicio - pending == true - refresh coins
    }

    activate();


    function activate() {
      logger.info('Activated Bet_Room View');
    }
  }
})();
