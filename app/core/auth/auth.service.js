(function () {
  'use strict';

  angular
    .module('core.auth')
    .factory('authService', authService);

  authService.$inject = ['$location'];

  function authService($location) {
    let user;

    return {
      setUser: setUser,
      unsetUser: unsetUser,
      isLoggedIn: isLoggedIn,
      validateUserIsLoggedIn: validateUserIsLoggedIn
    };

    function setUser(aUser) {
      user = aUser;
    }

    function unsetUser() {
      user = null;
    }

    function isLoggedIn() {
      return user ? user : false;
    }

    function validateUserIsLoggedIn(value, oldValue) {
      // If user is not logged in
      if (!value && oldValue) {
        $location.path('/login');
      }

      // If user is logged in
      if (value) {
        $location.path('/todo');
      }
    }
  }
})();