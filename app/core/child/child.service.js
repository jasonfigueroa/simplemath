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
      removeChild: removeChild,
      addChild: addChild,
      activateChild: activateChild,
      addConceptToChildCompletedConcepts: addConceptToChildCompletedConcepts
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
          isActive: false,
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

    function activateChild(parentId, childId) {
      deactivateChildren(parentId);
      for (const child of children) {
        if (parentId === child.parentId && child.id === childId) {
          child.isActive = true;
          break;
        }
      }
    }

    function deactivateChildren(parentId) {
      for (const child of children) {
        if (child.parentId === parentId) {
          child.isActive = false;
        }
      }
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

    function addConceptToChildCompletedConcepts(childId, conceptCategory, conceptTitle) {
      for (const child of children) {
        if (child.id === childId) {
          if (!child.completedConcepts) {
            child.completedConcepts = {};
          }

          if (!child.completedConcepts[conceptCategory]) {
            child.completedConcepts[conceptCategory] = [];
          } 

          for (const concept of child.completedConcepts[conceptCategory]) {
            // If user has already completed the concept it will not get readded
            if (concept.conceptTitle === conceptTitle) {
              return;
            }
          }

          child.completedConcepts[conceptCategory].push({ conceptTitle });
          break;
        }
      }
    }

    function addChild(newChild) {
      newChild.id = getId();
      newChild.isActive = false;
      children.push(newChild);
    }

    function getId() {
      var max = 0;

      for (var child of children) {
        if (child.id > max) {
          max = child.id;
        }
      }

      return ++max;
    }
  }
})();