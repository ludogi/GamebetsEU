(function() {
  'use strict';

  angular
    .module('app.events')
    .controller('eventsController', eventsController);

  eventsController.$inject = ['$injector', '$scope', '$rootScope',
    '$window', '$q', 'dataservice', 'logger','$uibModal',
  ];
  /* @ngInject */
  function eventsController($injector, $scope, $rootScope, $window,
    $q, dataservice, logger, $uibModal) {
    var vm = this;
    vm.events = [];
    vm.filteredEvents = [];
    vm.numPerPage = 20;
    vm.maxSize = 5;
    vm.currentPage = 1;
    vm.markers = [];
    vm.infoMarker = infoMarker;

    $scope.$watch(update);

    vm.map = {
      center: {
        latitude: 39.1389498,
        longitude: -0.6615438
      },
      zoom: 2
    };

    activate();

    function activate() {
      var promises = [getEvents()];
      return $q.all(promises).then(function() {
        logger.info('Activated Events View');
      });
    }

    function getEvents() {
      return dataservice.getEvents().then(function(data) {
        vm.events = data;
        getMarkers(vm.events);
        return vm.events;
      });
    }

    function update() {
      var begin = ((vm.currentPage - 1) * vm.numPerPage),
        end = begin + vm.numPerPage;
      vm.filteredEvents = vm.events.slice(begin, end);
    }

    function getMarkers(events) {
      for (var i = 0; i < events.length; i++) {
        var latitude = events[i].latitude;
        var longitude = events[i].longitude;

        vm.Marker = {
          latitude: latitude,
          longitude: longitude,
          id: i
        }
        vm.markers.push(vm.Marker);
      }
      $scope.testMarkers = vm.markers;
    }

    function infoMarker(index) {
      $scope.selectedEvents = vm.events[index];
    };
  }
})();
