(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem9', {
      templateUrl: 'place-value/numbers-0-to-120/problem-9/problem-9.template.html',
      controller: Problem9Controller
    });

  Problem9Controller.$inject = ['sharedService', 'toastService'];

  function Problem9Controller(sharedService, toastService) {
    const self = this;
    const correctAnswer = '116';
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