(function () {
  'use strict';

  angular
    .module('core.child')
    .factory('childService', childService);

  function childService() {

    let children;

    activate();

    return {
      getChildren: getChildren,
      removeChild: removeChild
    };

    function activate() {
      children = [
        {
          id: 1,
          parentId: 1,
          userName: 'Sammy',
          avatarUrl: 'https://robohash.org/1',
          isActive: false
        },
        {
          id: 2,
          parentId: 1,
          userName: 'Sarah',
          avatarUrl: 'https://robohash.org/3',
          isActive: true,
          completedConcepts: {
            placeValue: [
              {
                conceptTitle: 'Groups of 10'
              },
              {
                conceptTitle: 'Tens and Ones'
              }
            ],
            additionAndSubtraction: [
              {
                conceptTitle: 'Adding Within 20'
              }
            ]
          }
        },
        {
          id: 3,
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

    function removeChild(childId) {
      let index;

      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.id === childId) {
          index = i;
          break;
        }
      }

      children.splice(index, 1);
    }
  }
})();