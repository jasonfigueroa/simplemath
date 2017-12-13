app.controller("AddingWithinTwenty1Ctrl", function ($scope, $location) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  $scope.set = {};

  let c = getRandomInt(8, 21);
  $scope.set.c = c
  let a = getRandomInt(0, c)
  $scope.set.a = a
  let b = c - a
  $scope.set.b = b
  console.log(`${a} + ${b} = ${c}`)

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
    // $location.url('practice/place-values/groups-of-ten/groups-of-ten-2');
    // $location.url('/practice/place-values/groups-of-ten/groups-of-ten-1')
  };
});