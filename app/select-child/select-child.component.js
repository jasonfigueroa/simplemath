(function () {
  'use strict';

  angular
    .module('simpleMath')
    .component('selectChild', {
      templateUrl: 'select-child/select-child.template.html',
      controller: SelectChildController
    });

  SelectChildController.$inject = ['$rootScope', '$location', 'authService', 'childService'];

  function SelectChildController($rootScope, $location, authService, childService) {
    $rootScope.currentPath = $location.path();

    const self = this;

    self.children = null;
    self.activeChild = null;

    self.setChildActive = setChildActive;

    activate();

    function activate() {
      const parentId = authService.getLoggedInUserId();
      self.children = childService.getChildren(parentId);

      if ($rootScope.activeChild) {
        self.activeChild = $rootScope.activeChild;
      } else {
        for (const child of self.children) {
          if (child.isActive) {
            self.activateChild = child;
            $rootScope.activateChild = child;
            break;
          }
        }
      }
    }

    function setChildActive() {
      $rootScope.activeChild = self.activeChild;
      
      const parentId = authService.getLoggedInUserId();
      childService.activateChild(parentId, self.activeChild.id);
      
      $location.path('/child-dash');
    }
  }
})();