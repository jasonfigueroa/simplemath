(function () {
  angular
    .module('placeValue.numbers0To120')
    .controller("Problem10Controller", Problem10Controller);

    Problem10Controller.$inject = ['$rootScope', '$location', 'childService'];

    function Problem10Controller($rootScope, $location, childService) {
      const vm = this;
      
      vm.userAnswer = '';
      const correctAnswer = '103';
    
      vm.isUserCorrect = false;
      vm.isUserSubmittedAnswer = false;
      vm.isCompleteBtnClicked = false;

      vm.checkAnswer = checkAnswer;
      vm.showModal = showModal;
      vm.completeSection = completeSection;
    
      const congratsModal = angular.element(document.querySelector('#congratsModal'));

      activate();

      function activate() {
        document.querySelector('input').focus();
      }
      
      function checkAnswer() {
        vm.isUserSubmittedAnswer = true;
        vm.isUserCorrect = vm.userAnswer === correctAnswer;
        document.getElementById('showModalBtn').focus();
      }
    
      function showModal() {
        congratsModal.removeClass('hidden');
        vm.isCompleteBtnClicked = true;
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