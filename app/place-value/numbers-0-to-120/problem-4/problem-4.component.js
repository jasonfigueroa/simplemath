(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem4', {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        nextQuestion: '&'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-4/problem-4.template.html',
      controller: Problem4Controller
    });

  Problem4Controller.$inject = [];

  function Problem4Controller() {
    const self = this;
    self.correctAnswer = '37';
    self.userAnswer = '';

    self.$onInit = function () {
      document.querySelector('input').focus();
    }
  }
})();