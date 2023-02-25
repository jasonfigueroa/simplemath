(function () {
  'use strict';

  angular
    .module('simpleMath')
    .controller('NavigationController', NavigationController);

  NavigationController.$inject = ['$rootScope', '$scope', '$location', 'authService', 'childService'];

  function NavigationController($rootScope, $scope, $location, authService, childService) {
    $rootScope.currentPath = $location.path();
    
    const vm = this;

    vm.hideUsersAndDashLinks = hideUsersAndDashLinks;
    vm.isLocationLogin = isLocationLogin;
    vm.logout = logout;

    function hideUsersAndDashLinks() {
      return $rootScope.currentPath === '/dash' ||
        $rootScope.currentPath === '/dash/select-child' ||
        $rootScope.currentPath === '/dash/add-child' ||
        $rootScope.currentPath === '/dash/view-children';
    }

    function isLocationLogin() {
      return $location.url() === '/login';
    };

    function logout() {
      $rootScope.activeChild = null;
      authService.unsetUser();
    };

    function setActiveChild() {      
      const parentId = authService.getLoggedInUserId();
      const children = childService.getChildren(parentId);

      for (const child of children) {
        if (child.isActive) {
          $rootScope.activeChild = child;
        }
      }
    }

    $scope.$watch(authService.isLoggedIn, function (value, oldValue) {
      // If user is not logged in
      if (!value && oldValue) {
        
      }

      // If user is logged in
      if (value) {
        setActiveChild();
      }
    }, true);
  }
})();