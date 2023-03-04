(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .controller('Problem1Controller', Problem1Controller);

  Problem1Controller.$inject = ['$scope', 'sharedService', 'toastService'];

  function Problem1Controller($scope, sharedService, toastService) {
    // The following is an example of how to access a member variable of a parent scope
    // const parentMessage = $scope.$parent.parentMessage;
    
    const vm = this;
    const correctAnswer = '105';
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
        
        // Had to explicitly remove this class here in order to make the next 
        // button available for focus
        nextBtn.classList.remove('ng-hide');
        nextBtn.focus();
      } else {
        toastService.error();
      }
    }
  }
})();