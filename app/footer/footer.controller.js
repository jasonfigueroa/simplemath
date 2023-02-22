(function () {
  'use strict';
  
  angular
    .module('simpleMath')
    .controller("FooterController", FooterController);

  FooterController.$inject = ['$location'];

  function FooterController($location) {
    const vm = this;
    
    vm.isLocationLogin = isLocationLogin;

    function isLocationLogin() {
      return $location.url() === '/login';
    };
  }
})();