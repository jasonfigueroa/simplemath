(function () {
  'use strict';

  angular
    .module('simpleMath')
    .run(runBlock);

  runBlock.$inject = ['$rootScope', '$location', 'authService'];

  function runBlock($rootScope, $location, authService) {
    $rootScope.$on('$routeChangeStart', function (event) {
      if ($location.path() === "/login") {
        return;
      }

      if (!authService.isLoggedIn()) {
        event.preventDefault();
        $location.path('/login');
      }
    });
  }
})();