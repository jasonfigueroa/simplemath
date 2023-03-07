(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120')
    .component('problem7', {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        nextQuestion: '&'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-7/problem-7.template.html',
      controller: Problem7Controller
    });

  Problem7Controller.$inject = [];

  function Problem7Controller() {
    const self = this;
    self.correctAnswer = '22';
    self.userAnswer = '';

    self.$onInit = function () {
      document.querySelector('input').focus();
    }
  }
})();