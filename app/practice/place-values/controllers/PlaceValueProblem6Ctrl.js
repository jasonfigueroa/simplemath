angular.module('simpleMath').controller("PlaceValueProblem6Ctrl", function ($scope, $location) {
  
  $scope.userAnswer = '';
  const answer = '116';

  $scope.userIsCorrect = false;
  $scope.userIsIncorrect = false;

  // const wrongAnswer = "Sorry that is incorrect, please try agin.";
  // const correctAnswer = "That's correct, awesome job!"
  // $scope.message = null;

  // target elements
  // const messageSpan = angular.element(document.querySelector('#message'));
  // const nextBtn = angular.element(document.querySelector('#nextBtn'));
  
  $scope.check = () => {
    $scope.userIsCorrect = false;
    $scope.userIsIncorrect = false;
    // messageSpan.attr('class', 'hidden');
    if($scope.userAnswer === answer) {
      $scope.userIsCorrect = true;
      // // change color of message span to green
      // messageSpan.addClass('green');
      // // bold text
      // messageSpan.addClass('bold');
      // // change $scope.message to correctAnswer 
      // $scope.message = correctAnswer;
      // // show message
      // messageSpan.removeClass('hidden');
      // // display next button
      // nextBtn.removeClass('hidden');
    } else {
      $scope.userIsIncorrect = true;
      // // change color of message span to red
      // messageSpan.addClass('red');
      // // bold text
      // messageSpan.addClass('bold');
      // // change $scope.message to wrongAnswer
      // $scope.message = wrongAnswer;
      // // show message
      // messageSpan.removeClass('hidden');
    }
  }

  $scope.nextQuestion = () => {
    $location.url('practice/place-value-7');
  };
});