angular.module('simpleMath').controller("TwoDigitPlaceValue1Ctrl", function ($scope, $location) {
  const answer = 'true';
  $scope.userAnswer = null;
  
  $scope.incorrectMessage = "Sorry that is incorrect, please try agin.";
  $scope.correctMessage = "That's correct, awesome job!"

  // target elements
  const correctMessageSpan = angular.element(document.querySelector('#correct_message'));
  const incorrectMessageSpan = angular.element(document.querySelector('#incorrect_message'));
  const nextBtn = angular.element(document.querySelector('#nextBtn'));
  
  $scope.checkAnswer = () => {
    correctMessageSpan.attr('class', 'green bold hidden');
    incorrectMessageSpan.attr('class', 'red bold hidden');
    if($scope.userAnswer === answer) {
      // show hidden message
      correctMessageSpan.removeClass('hidden');
      // display next button
      nextBtn.removeClass('hidden');
    } else {
      // show hidden message
      incorrectMessageSpan.removeClass('hidden');
    }
  }

  $scope.nextQuestion = () => {
    $location.url('practice/place-values/two-digit-place-value/two-digit-place-value-2');
  };
});