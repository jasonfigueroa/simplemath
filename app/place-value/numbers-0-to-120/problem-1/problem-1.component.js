(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem1', {
      templateUrl: 'place-value/numbers-0-to-120/problem-1/problem-1.template.html',
      controller: Problem1Controller
    });

  Problem1Controller.$inject = ['$scope', 'sharedService', 'toastService'];

  function Problem1Controller($scope, sharedService, toastService) {
    // The following is an example of how to access a member variable of a parent scope
    // const parentMessage = $scope.$parent.parentMessage;
    
    const self = this;
    const correctAnswer = '105';
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