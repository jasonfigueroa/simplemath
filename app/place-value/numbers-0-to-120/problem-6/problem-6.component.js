(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem6', {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        nextQuestion: '&'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-6/problem-6.template.html',
      controller: Problem6Controller
    });

  Problem6Controller.$inject = [];

  function Problem6Controller() {
    const self = this;
    self.correctAnswer = '116';
    self.userAnswer = '';

    self.$onInit = function () {
      document.querySelector('input').focus();
    }
  }
})();