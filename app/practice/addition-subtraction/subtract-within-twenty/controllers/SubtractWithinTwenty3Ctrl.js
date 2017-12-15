app.controller("SubtractWithinTwenty3Ctrl", function ($scope, $location) {
  $scope.msg = '';
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  $scope.set = {};
  // pasted in
  let a = 0;
  let b = 0;
  let c = 0;

  // subtracting within 20
  a = getRandomInt(8, 21);
  $scope.set.a = a;

  b = getRandomInt(0, a);

  // don't want b to be 1 or 0
  while(b <= 1) {
    b = getRandomInt(0, a);
  } 

  $scope.set.b = b;

  c = a - b;

  $scope.set.c = c;
  // end pasted in

  $scope.msg = `${$scope.set.a} - ${$scope.set.b} = ${$scope.set.c}`;

  // $scope.set = {};

  // let a = 0;
  // let b = 0;
  // let c = 0;
  // let d = 0;
  
  // // making sure that values a, b and c are all greater than 1
  // while(a <= 1 || b <= 1 || c <= 1) {
  //   d = getRandomInt(8, 21);
  //   $scope.set.d = d;
    
  //   a = getRandomInt(d/4, d);
  //   $scope.set.a = a;  
    
  //   b = getRandomInt(0, d - a);
  //   $scope.set.b = b;
    
  //   c = d - a - b;
  // }
  
  // $scope.set.c = c;
  
  // // following was used for testing
  // // $scope.msg = `${$scope.set.a} + ${$scope.set.b}  + ${$scope.set.c} = ${$scope.set.d}`;

  $scope.userAnswer = '';
  const answer = c;
  const wrongAnswer = "Sorry that is incorrect, please try agin.";
  const correctAnswer = "That's correct, awesome job!"
  $scope.message = null;

  // target elements
  const messageSpan = angular.element(document.querySelector('#message'));
  const nextBtn = angular.element(document.querySelector('#nextBtn'));

  $scope.checkAnswer = () => {
    messageSpan.attr('class', 'hidden');
    if ($scope.userAnswer == answer) {
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
    $location.url('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-4');
  };
});