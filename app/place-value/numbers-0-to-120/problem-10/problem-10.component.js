(function () {
  angular
    .module('placeValue.numbers0To120')
    .component("problem10", {
      templateUrl: 'place-value/numbers-0-to-120/problem-10/problem-10.template.html',
      controller: Problem10Controller
    });

  Problem10Controller.$inject = ['$rootScope', '$location', 'childService', 'toastService'];

  function Problem10Controller($rootScope, $location, childService, toastService) {
    const self = this;
    const correctAnswer = '103';
    const inputEl = document.querySelector('input');
    const showModalBtn = document.getElementById('showModalBtn');
    const completeSectionBtn = document.getElementById('completeSectionBtn');

    // The following was left here as a reference to how to select an element the 
    // angularjs way
    const congratsModal = angular.element(document.querySelector('#congratsModal'));

    self.userAnswer = '';
    self.isUserCorrect = false;
    self.isCompleteBtnClicked = false;
    self.checkAnswer = checkAnswer;
    self.showModal = showModal;
    self.completeSection = completeSection;

    activate();

    function activate() {
      inputEl.focus();
    }

    function checkAnswer() {
      self.isUserCorrect = self.userAnswer === correctAnswer;

      if (self.isUserCorrect) {
        toastService.success();

        inputEl.blur();

        showModalBtn.classList.remove('ng-hide');
        showModalBtn.focus();
      } else {
        toastService.error();
      }
    }

    function showModal() {
      congratsModal.removeClass('hidden');
      self.isCompleteBtnClicked = true;
      completeSectionBtn.focus();
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