(function() {
  'use strict';

  angular
    .module('app.bets_room')
    .controller('betsRoomController', betsRoomController);

  betsRoomController.$inject = ['dataservice', '$rootScope', '$state', '$scope', '$translate', '$timeout', '$uibModal', 'logger', 'cookiesService', 'headerService'];

  function betsRoomController(dataservice, $state, $rootScope, $scope, $translate, $timeout, $uibModal, logger, cookiesService, headerService) {
    var vm = this;
    vm.showBetModal = showBetModal;
    vm.game = [];

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

    function showBetModal(idmatch) {
      var modalInstance = $uibModal.open({
        animation: 'true',
        templateUrl: 'app/bets_room/bets_popup.html',
        controller: function($rootScope) {

          var vm = this;
          vm.bet_user = ""
          vm.betmatch = idmatch;
          vm.betcoins = betcoins;

          function betcoins(bet) {

            dataservice.bets({
              coins: vm.bet_user,
              id: $rootScope.id,
              betmatch: vm.betmatch,
            }).then(function(response) {
              $rootScope.coins = $rootScope.coins - vm.bet_user;
            });
          }
        },
        controllerAs: 'vm',
        size: 'lg',
        resolve: {
          roomCtrl: function() {
            return vm
          }
        }
      });
    }

    activate();
    getGame();

    function getGame() {
      return dataservice.getGame().then(function(data) {
        vm.game = data;
        return vm.game;
      });
    }

    function cronTask() {
      var DateUpdate = "2017-08-15";
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      today = yyyy + '-' + mm + '-' + dd;
      currentdate = today;
      if (currentdate == DateUpdate) {
        $rootScope.coins = $rootScope.coins * vm.cashteam;
      } else {
        setimeout(cronTask(), 60000 * 24);
      }
    }

    function activate() {
      logger.info('Activated Events View');
    }

  }
})();
