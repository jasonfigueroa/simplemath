(function () {
  'use strict';

  angular
    .module('login')
    .component('login', {
      templateUrl: 'login/login.template.html',
      controller: LoginController
    });

  LoginController.$inject = ['$scope', 'authService'];

  function LoginController($scope, authService) {
    var self = this;

    self.email = 'jdoe@email.com';
    self.password = 'password123';
    self.login = login;

    function login() {
      if (self.email === 'jdoe@email.com' && self.password === 'password123') {
        var user = {
          id: 1,
          email: self.email
        };

        authService.setUser(user);
      }
    }

    $scope.$watch(authService.isLoggedIn, authService.validateUserIsLoggedIn, true);
  }
})();