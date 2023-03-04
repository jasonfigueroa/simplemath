(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .controller('Problem9Controller', Problem9Controller);

  Problem9Controller.$inject = ['sharedService'];

  function Problem9Controller(sharedService) {
    const vm = this;

    vm.userAnswer = '';
    const correctAnswer = '116';

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