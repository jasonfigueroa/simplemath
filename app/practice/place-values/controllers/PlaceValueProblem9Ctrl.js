app.controller("PlaceValueProblem9Ctrl", function ($scope, $location) {

  // $scope.values = [
  //   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //   [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  //   [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  //   [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  //   [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  //   [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  //   [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  //   [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  //   [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  //   [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
  //   [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
  //   [111, 112, 113, 114, 115, 116, 117, 118, 119, 120]
  // ];
  
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
    // 12-11-2017 - may end this section here
    $location.url('practice/place-value-10');
  };
});