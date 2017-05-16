(function() {
  'use strict';

  angular
    .module('app.bets_room')
    .controller('betsRoomController', betsRoomController);

    betsRoomController.$inject = ['dataservice', '$state', '$scope', '$translate','$timeout', '$uibModal', 'logger', 'cookiesService', 'headerService'
    ];

    function betsRoomController(dataservice, $state, $scope, $translate, $timeout, $uibModal, logger, cookiesService, headerService) {
      var vm = this;
      vm.showBetModal = showBetModal;
      vm.bets = bets;
      vm.datos_bet = {
        coins: '',
      };

      function showBetModal() {
        var modalInstance = $uibModal.open({
          animation: 'true',
          templateUrl: 'app/bets_room/bets_popup.html',
          controller: 'betsRoomController',
          controllerAs: 'vm',
          size: 'lg'
        });
      }

      function bets() {

      }

    activate();


    function activate() {
      logger.info('Activated Bet_Room View');
    }
  }
})();
