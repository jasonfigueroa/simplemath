(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem2', {
      templateUrl: 'place-value/numbers-0-to-120/problem-2/problem-2.template.html',
      controller: Problem2Controller
    });

  Problem2Controller.$inject = ['sharedService', 'toastService'];

  function Problem2Controller(sharedService, toastService) {
    const self = this;
    const correctAnswer = '54';
    const inputEl = document.querySelector('input');
    const nextBtn = document.getElementById('nextBtn');

    self.userAnswer = '';
    self.isUserCorrect = false;
    self.checkAnswer = checkAnswer;
    self.sharedService = sharedService;

    activate();

    function activate() {
      inputEl.focus();
    }

    function checkAnswer() {
      self.isUserCorrect = self.userAnswer === correctAnswer;
      
      if (self.isUserCorrect) {
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