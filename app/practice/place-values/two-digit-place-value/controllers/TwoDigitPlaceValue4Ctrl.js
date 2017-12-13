app.controller("TwoDigitPlaceValue4Ctrl", function ($scope, $location) {
  
  const answers = [
    '10 + 10 + 10 + 1 + 1 + 1 + 1',
    '30 + 1 + 1 + 1 + 1',
  ];
  
  $scope.availableAnswers = [
    '10 + 10 + 10 + 1 + 1 + 1 + 1',
    '40 + 1 + 1 + 1',
    '30 + 1 + 1 + 1 + 1',
    '10 + 10 + 10 + 10 + 10 + 4'
  ];

  // users selected answers will be pushed to this array
  $scope.userAnswers = [];

  // Toggle selection for user's given answer(s)
  $scope.toggleSelection = (availableAnswer) => {
    // if availableAnswer is not in array idx will = -1 else idx will be > -1
    var idx = $scope.userAnswers.indexOf(availableAnswer);

    // Is currently selected
    if (idx > -1) {
      // remove from array
      $scope.userAnswers.splice(idx, 1);
    }

    // Is newly selected
    else {
      // push to array
      $scope.userAnswers.push(availableAnswer);
    }
  };

  // determines if userAnswer is in answers array
  const isInAnswers = (userAnswer) => {
    let verdict = false;
    answers.forEach(answer => {
      if(answer === userAnswer) {
        verdict = true;
      }
    });
    return verdict;
  };

  // determines the answers in the userAnswers array are the same as the 
  // answers in the answers array 
  const userAnswerEqualsAnswer = () => {
    let verdict = true;
    if($scope.userAnswers.length != answers.length) {
      return false;
    }
    $scope.userAnswers.forEach(userAnswer => {
      // if any one answer in the userAnswers array is not found in the answers 
      // array the verdict will be set to false
      if(!isInAnswers(userAnswer)) {
        verdict = false;
      }
    });
    return verdict;
  };

  // below is the same boiler plate code found in other controllers for other 
  // problems

  const wrongAnswer = "Sorry that is incorrect, please try agin.";
  const correctAnswer = "That's correct, awesome job!"
  $scope.message = null;
  
  // target elements
  const messageSpan = angular.element(document.querySelector('#message'));
  const nextBtn = angular.element(document.querySelector('#nextBtn'));
  
  $scope.checkAnswer = () => {
    messageSpan.attr('class', 'hidden');
    if(userAnswerEqualsAnswer()) {
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
    $location.url('practice/place-values/two-digit-place-value/two-digit-place-value-5');
  };
});