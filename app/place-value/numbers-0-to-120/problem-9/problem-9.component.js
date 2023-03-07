(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem9', {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        nextQuestion: '&'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-9/problem-9.template.html',
      controller: Problem9Controller
    });

  Problem9Controller.$inject = [];

  function Problem9Controller() {
    const self = this;
    self.correctAnswer = '116';
    self.userAnswer = '';

    self.$onInit = function () {
      document.getElementById('numbers-0-to-120-input-9').focus();
    }
  }
})();