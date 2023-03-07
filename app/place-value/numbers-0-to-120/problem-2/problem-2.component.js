(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem2', {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        nextQuestion: '&'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-2/problem-2.template.html',
      controller: Problem2Controller
    });

  Problem2Controller.$inject = [];

  function Problem2Controller() {
    const self = this;
    self.correctAnswer = '54';
    self.userAnswer = '';

    self.$onInit = function () {
      document.getElementById('numbers-0-to-120-input-2').focus();
    }
  }
})();