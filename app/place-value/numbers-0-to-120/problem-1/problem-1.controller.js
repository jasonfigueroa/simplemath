(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .controller('Problem1Controller', Problem1Controller);

  Problem1Controller.$inject = ['$scope', 'sharedService'];

  function Problem1Controller($scope, sharedService) {
    // The following is an example of how to access a member variable of a parent scope
    // const parentMessage = $scope.$parent.parentMessage;
    
    const vm = this;

    vm.userAnswer = '';
    const correctAnswer = '105';

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