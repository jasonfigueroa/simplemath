(function () {
  'use strict';

  angular
    .module('modal')
    .component('modal', {
      bindings: {
        close: '&'
      },
      templateUrl: 'modal/modal.template.html',
      controller: ModalController
    });

  ModalController.$inject = ['$rootScope'];

  function ModalController($rootScope) {
    const self = this;

    self.activeChild = $rootScope.activeChild;

    self.ok = ok;

    function ok() {
      self.close();
    };
  }
})();