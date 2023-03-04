(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .controller('Problem8Controller', Problem8Controller);

  Problem8Controller.$inject = ['sharedService'];

  function Problem8Controller(sharedService) {
    const vm = this;

    vm.userAnswer = '';
    const correctAnswer = '111';

    vm.isUserCorrect = false;
    vm.isUserSubmittedAnswer = false;

    vm.checkAnswer = checkAnswer;
    vm.sharedService = sharedService;

    activate();

    function activate() {
      document.querySelector('input').focus();
    }

    function checkAnswer() {
      vm.isUserSubmittedAnswer = true;
      vm.isUserCorrect = vm.userAnswer === correctAnswer;
      document.getElementById('nextBtn').focus();
    }
  }
})();