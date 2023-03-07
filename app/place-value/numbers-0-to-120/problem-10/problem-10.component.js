(function () {
  angular
    .module('placeValue.numbers0To120')
    .component("problem10", {
      bindings: {
        checkAnswer: '&',
        isUserCorrect: '<',
        showModal: '&',
        isCompleteBtnClicked: '<'
      },
      templateUrl: 'place-value/numbers-0-to-120/problem-10/problem-10.template.html',
      controller: Problem10Controller
    });

  Problem10Controller.$inject = [];

  function Problem10Controller() {
    const self = this;
    self.correctAnswer = '103';
    self.userAnswer = '';

    self.$onInit = function () {
      document.querySelector('input').focus();
    }
  }
})();