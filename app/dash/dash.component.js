(function () {
  'use strict';
  
  angular
    .module('dash')
    .component('dash', {
      templateUrl: 'dash/dash.template.html',
      controller: DashController
    });

  DashController.$inject = ['$rootScope', '$location'];

  function DashController($rootScope, $location) {
    $rootScope.currentPath = $location.path();
  }
})();