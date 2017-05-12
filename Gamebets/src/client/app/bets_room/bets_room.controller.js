(function() {
  'use strict';

  angular
    .module('app.bets_room')
    .controller('betsRoomController', betsRoomController);

    betsRoomController.$inject = ['dataservice', '$state', '$scope', '$translate','$timeout', '$uibModal', 'logger', 'cookiesService', 'headerService'
    ];

    function betsRoomController(dataservice, $state, $scope, $translate, $timeout, $uibModal, logger, cookiesService, headerService) {
      var vm = this;
      
      vm.datos_bet = {
        coins: '',
      };

      // vm.SubmitBet = Submitbet;

    activate();


    // function SubmitBet() {
    //
    // }

    function activate() {
      logger.info('Activated Bet_Room View');
    }
  }
})();
