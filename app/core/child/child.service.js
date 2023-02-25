(function () {
  'use strict';

  angular
    .module('core.child')
    .factory('childService', childService);

    function childService() {
      
      let children;

      activate();

      return {
        getChildren: getChildren
      };

      function activate() {
        children = [
          {
            parentId: 1,
            userName: 'Sammy',
            avatarUrl: 'https://robohash.org/1',
            isActive: false
          },
          {
            parentId: 1,
            userName: 'Sarah',
            avatarUrl: 'https://robohash.org/3',
            isActive: true
          },
          {
            parentId: 2,
            userName: 'Billy',
            avatarUrl: 'https://robohash.org/2',
            isActive: true
          },
        ];
      }

      function getChildren(parentId) {
        const parentsChildren = [];
        
        for (const child of children) {
          if (child.parentId === parentId) {
            parentsChildren.push(child);
          }
        }

        return parentsChildren;
      }
    }
})();