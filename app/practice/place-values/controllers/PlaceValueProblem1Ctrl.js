// 12-11-2017 - was experimenting with $sce but didn't work out 
app.controller("PlaceValueProblem1Ctrl", function ($scope, $location) {
  // $scope.problem = "<p>\n  What is the missing number?\n</p>\n<p>\n  100, 101, 102, 103, 104, <span><input type=\"text\" ng-model=\"userAnswer\" size=\"5\"></span>, 106. 107, 108, 109, 110\n</p>";
  $scope.userAnswer = '';
  const answer = '105';

  $scope.userIsCorrect = false;
  $scope.userIsIncorrect = false;

  const wrongAnswer = "Sorry that is incorrect, please try agin.";
  const correctAnswer = "That's correct, awesome job!"
  // $scope.message = null;

  // target elements
  // const messageSpan = angular.element(document.querySelector('#message'));
  // const nextBtn = angular.element(document.querySelector('#nextBtn'));
  
  $scope.check = () => {
    $scope.userIsCorrect = false;
    $scope.userIsIncorrect = false;
    // messageSpan.attr('class', 'hidden');
    if($scope.userAnswer === answer) {
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
      $scope.userIsCorrect = true;
    } else {
      // // change color of message span to red
      // messageSpan.addClass('red');
      // // bold text
      // messageSpan.addClass('bold');
      // // change $scope.message to wrongAnswer
      // $scope.message = wrongAnswer;
      // // show message
      // messageSpan.removeClass('hidden');
      $scope.userIsIncorrect = true;
    }
  }

  $scope.nextQuestion = () => {
    $location.url('practice/place-value-2');
  };
});