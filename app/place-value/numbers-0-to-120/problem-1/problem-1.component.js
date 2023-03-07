(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem1', {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        nextQuestion: '&'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-1/problem-1.template.html',
      controller: Problem1Controller
    });

  Problem1Controller.$inject = [];

  function Problem1Controller() {
    const self = this;
    self.correctAnswer = '105';
    self.userAnswer = '';

    self.$onInit = function () {
      document.getElementById('numbers-0-to-120-input-1').focus();
    }
  }
})();