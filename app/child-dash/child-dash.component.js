(function () {
  'use strict';

  angular
    .module('simpleMath')
    .component('childDash', {
      templateUrl: 'child-dash/child-dash.template.html',
      controller: ChildDashController
    });

  ChildDashController.$inject = ['$rootScope', '$location'];

  function ChildDashController($rootScope, $location) {
    $rootScope.currentPath = $location.path();
    
    const self = this;

    self.trackConcept = trackConcept;
  
    function trackConcept(e) {      
      const categoryNameArray = e.target.parentNode.id.split('-');
      let category = '';

      for (let i = 0; i < categoryNameArray.length; i++) {
        const nameSegment = categoryNameArray[i];
        if (i === 0) {
          category += nameSegment;
        } else {
          // Uppercase first character of nameSegment before concatenation
          const properCasedNameSegment = nameSegment.charAt(0).toUpperCase() + nameSegment.slice(1);
          category += properCasedNameSegment;
        }
      }
      
      $rootScope.activeChild.activeConcept = {
        name: e.target.text.trim(),
        category: category
      };
    }
  }
})();