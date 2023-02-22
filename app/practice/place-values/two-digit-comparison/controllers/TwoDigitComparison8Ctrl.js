angular.module('simpleMath').controller("TwoDigitComparison8Ctrl", function ($scope, $location) {
  
  $scope.userAnswer = '';
  const answer = 'greater than';
  const wrongAnswer = "Sorry that is incorrect, please try agin.";
  const correctAnswer = "That's correct, awesome job!"
  $scope.message = null;

  // target elements
  const messageSpan = angular.element(document.querySelector('#message'));
  const nextBtn = angular.element(document.querySelector('#nextBtn'));
  
  $scope.checkAnswer = () => {
    messageSpan.attr('class', 'hidden');
    if($scope.userAnswer === answer) {
      // change color of message span to green
      messageSpan.addClass('green');
      // bold text
      messageSpan.addClass('bold');
      // change $scope.message to correctAnswer 
      $scope.message = correctAnswer;
      // show message
      messageSpan.removeClass('hidden');
      // display next button
      nextBtn.removeClass('hidden');
    } else {
      // change color of message span to red
      messageSpan.addClass('red');
      // bold text
      messageSpan.addClass('bold');
      // change $scope.message to wrongAnswer
      $scope.message = wrongAnswer;
      // show message
      messageSpan.removeClass('hidden');
    }
  }

  $scope.nextQuestion = () => {
    $location.url('practice/place-values/two-digit-comparison/two-digit-comparison-complete');
  };
});