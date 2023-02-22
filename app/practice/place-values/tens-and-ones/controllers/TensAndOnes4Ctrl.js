angular.module('simpleMath').controller("TensAndOnes4Ctrl", function ($scope, $location) {

  $scope.tenFrame = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.tens = [1, 2, 3];
  $scope.ones = [1, 2, 3, 4, 5, 6];

  $scope.userAnswer = '';
  const answer = '36';
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
    $location.url('practice/place-values/tens-and-ones/tens-and-ones-5');
  };
});