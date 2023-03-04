(function () {
  angular
    .module('placeValue.numbers0To120')
    .controller("Problem10Controller", Problem10Controller);

  Problem10Controller.$inject = ['$rootScope', '$location', 'childService', 'toastService'];

  function Problem10Controller($rootScope, $location, childService, toastService) {
    const vm = this;
    const correctAnswer = '103';
    const inputEl = document.querySelector('input');
    const showModalBtn = document.getElementById('showModalBtn');
    const completeSectionBtn = document.getElementById('completeSectionBtn');

    // The following was left here as a reference to how to select an element the 
    // angularjs way
    const congratsModal = angular.element(document.querySelector('#congratsModal'));

    vm.userAnswer = '';
    vm.isUserCorrect = false;
    vm.isCompleteBtnClicked = false;
    vm.checkAnswer = checkAnswer;
    vm.showModal = showModal;
    vm.completeSection = completeSection;

    activate();

    function activate() {
      inputEl.focus();
    }

    function checkAnswer() {
      vm.isUserCorrect = vm.userAnswer === correctAnswer;

      if (vm.isUserCorrect) {
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
      vm.isCompleteBtnClicked = true;
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