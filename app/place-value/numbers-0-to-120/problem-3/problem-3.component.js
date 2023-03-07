(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem3', {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        nextQuestion: '&'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-3/problem-3.template.html',
      controller: Problem3Controller
    });

  Problem3Controller.$inject = [];

  function Problem3Controller() {
    const self = this;
    self.correctAnswer = '0';
    self.userAnswer = '';
    
    self.$onInit = function () {
      document.querySelector('input').focus();
    }
  }
})();