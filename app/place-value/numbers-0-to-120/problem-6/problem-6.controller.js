(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .controller('Problem6Controller', Problem6Controller);

  Problem6Controller.$inject = ['sharedService'];

  function Problem6Controller(sharedService) {
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