(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('numbers0To120', {
      templateUrl: 'place-value/numbers-0-to-120/numbers-0-to-120.template.html',
      controller: Numbers0To120
    });

  Numbers0To120.$inject = ['$rootScope', '$routeParams', '$location', 'childService', 'toastService'];

  function Numbers0To120($rootScope, $routeParams, $location, childService, toastService) {
    const validIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    
    if (!$routeParams.id || !isValidId($routeParams.id)) {
      $location.path('/child-dash');
    }
    
    const self = this;

    // Shared with child components
    self.isCompleteBtnClicked = false;
    self.isUserCorrect = false;
    self.checkAnswer = checkAnswer;
    self.nextQuestion = nextQuestion;
    
    self.showModal = showModal;
    self.completeSection = completeSection;

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

    function checkAnswer(userAnswer, correctAnswer) {
      self.isUserCorrect = userAnswer === correctAnswer;

      if (self.isUserCorrect) {
        toastService.success();

        document.querySelector('input').blur();

        if (!isProblem10()) {
          // Had to explicitly remove this class here in order to make the next 
          // button available for focus
          document.getElementById('nextBtn').classList.remove('ng-hide');
          document.getElementById('nextBtn').focus();
        } else {
          document.getElementById('showModalBtn').classList.remove('ng-hide');
          document.getElementById('showModalBtn').focus();
        }
        
      } else {
        toastService.error();
      }
    }

    function nextQuestion() {
      const urlSegments = $location.path().split('/');
      const currentId = urlSegments[urlSegments.length - 1];
      const nextId = Number(currentId) + 1;

      $location.url(`practice/place-value/numbers-0-to-120/${nextId}`);
    };

    function showModal() {
      // The following was left here as a reference to how to select an element the 
      // angularjs way
      angular.element(document.querySelector('#congratsModal')).removeClass('hidden');
      
      self.isCompleteBtnClicked = true;
      document.getElementById('completeSectionBtn').focus();
    };

    function completeSection() {
      const childId = $rootScope.activeChild.id;
      const sectionCategory = $rootScope.activeChild.activeConcept.category;
      const sectionName = $rootScope.activeChild.activeConcept.name;

      childService.addConceptToChildCompletedConcepts(childId, sectionCategory, sectionName);

      $location.url('child-dash');
    };
  }
})();