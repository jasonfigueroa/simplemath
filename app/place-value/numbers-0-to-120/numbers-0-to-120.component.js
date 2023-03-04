(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('numbers0To120', {
      templateUrl: 'place-value/numbers-0-to-120/numbers-0-to-120.template.html',
      controller: Numbers0To120
    });

  Numbers0To120.$inject = ['$routeParams', '$location'];

  function Numbers0To120($routeParams, $location) {
    const validIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    
    if (!$routeParams.id || !isValidId($routeParams.id)) {
      $location.path('/child-dash');
    }
    
    const self = this;

    // The following was only left here as a clue to how to access member 
    // variables of a parent scope. See place-value-problem-1.controller.js 
    // to get a better idea.
    // self.parentMessage = 'Luke I am your father.';

    self.isProblem1 = isProblem1;
    self.isProblem2 = isProblem2;
    self.isProblem3 = isProblem3;
    self.isProblem4 = isProblem4;
    self.isProblem5 = isProblem5;
    self.isProblem6 = isProblem6;
    self.isProblem7 = isProblem7;
    self.isProblem8 = isProblem8;
    self.isProblem9 = isProblem9;
    self.isProblem10 = isProblem10;

    function isValidId(id) {
      for (const validId of validIds) {
        if (id.toLowerCase() === validId) {
          return true;
        }
      }

      return false;
    }

    function isProblem1() {
      return $routeParams.id === '1';
    }

    function isProblem2() {
      return $routeParams.id === '2';
    }

    function isProblem3() {
      return $routeParams.id === '3';
    }

    function isProblem4() {
      return $routeParams.id === '4';
    }

    function isProblem5() {
      return $routeParams.id === '5';
    }

    function isProblem6() {
      return $routeParams.id === '6';
    }

    function isProblem7() {
      return $routeParams.id === '7';
    }

    function isProblem8() {
      return $routeParams.id === '8';
    }

    function isProblem9() {
      return $routeParams.id === '9';
    }

    function isProblem10() {
      return $routeParams.id === '10';
    }
  }
})();