(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .controller('Problem5Controller', Problem5Controller);

  Problem5Controller.$inject = ['sharedService', 'toastService'];

  function Problem5Controller(sharedService, toastService) {
    const vm = this;
    const correctAnswer = '76';
    const inputEl = document.querySelector('input');
    const nextBtn = document.getElementById('nextBtn');

    vm.userAnswer = '';
    vm.isUserCorrect = false;
    vm.checkAnswer = checkAnswer;
    vm.sharedService = sharedService;

    activate();

    function activate() {
      inputEl.focus();
    }

    function checkAnswer() {
      vm.isUserCorrect = vm.userAnswer === correctAnswer;
      
      if (vm.isUserCorrect) {
        toastService.success();
        
        inputEl.blur();
        
        nextBtn.classList.remove('ng-hide');
        nextBtn.focus();
      } else {
        toastService.error();
      }
    }
  }
})();