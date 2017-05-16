(function() {
    'use strict';

    angular
      .module('app.events')
      .controller('eventsController', eventsController);

    eventsController.$inject = ['$injector', '$scope', '$rootScope',
      '$window', '$q', 'dataservice', 'logger'
    ];
    /* @ngInject */
    function eventsController($injector, $scope, $rootScope, $window,
      $q, dataservice, logger) {
      var vm = this;

      }
    })();
