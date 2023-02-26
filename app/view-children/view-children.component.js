(function () {
  'use strict';

  angular
    .module('viewChildren')
    .component('viewChildren', {
      templateUrl: 'view-children/view-children.template.html',
      controller: ViewChildrenController
    });

  ViewChildrenController.$inject = ['authService', 'childService'];

  function ViewChildrenController(authService, childService) {
    const self = this;

    self.childrenList = null;

    self.removeChild = removeChild;
    
    activate();

    function removeChild(child) {
      childService.removeChild(child.id);
      setChildren();
    }

    function activate() {
      setChildren();
    }

    function setChildren() {
      const parentId = authService.getLoggedInUserId();
      self.childrenList = childService.getChildren(parentId);
    }
  }    
})();