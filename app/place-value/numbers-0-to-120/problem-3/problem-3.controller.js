(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .controller('Problem3Controller', Problem3Controller);

  Problem3Controller.$inject = ['sharedService'];

  function Problem3Controller(sharedService) {
    const vm = this;

    vm.userAnswer = '';
    const correctAnswer = '0';

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