(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .controller('Problem4Controller', Problem4Controller);

  Problem4Controller.$inject = ['sharedService', 'toastService'];

  function Problem4Controller(sharedService, toastService) {
    const vm = this;
    const correctAnswer = '37';
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