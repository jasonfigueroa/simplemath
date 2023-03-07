(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem5', {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        nextQuestion: '&'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-5/problem-5.template.html',
      controller: Problem5Controller
    });

  Problem5Controller.$inject = [];

  function Problem5Controller() {
    const self = this;
    self.correctAnswer = '76';
    self.userAnswer = '';

    self.$onInit = function () {
      document.querySelector('input').focus();
    }
  }
})();