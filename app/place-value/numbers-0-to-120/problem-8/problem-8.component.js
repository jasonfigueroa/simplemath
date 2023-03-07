(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem8', {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        nextQuestion: '&'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-8/problem-8.template.html',
      controller: Problem8Controller
    });

  Problem8Controller.$inject = [];

  function Problem8Controller() {
    const self = this;
    self.correctAnswer = '111';
    self.userAnswer = '';

    self.$onInit = function () {
      document.getElementById('numbers-0-to-120-input-8').focus();
    }
  }
})();