app.controller("TwoDigitPlaceValue3Ctrl", function ($scope, $location) {
  
  const answers = [
    '10 + 10 + 10 + 10 + 1 + 1 + 1 + 1',
    '40 + 1 + 1 + 1 + 1',
  ];
  
  $scope.availableAnswers = [
    '10 + 10 + 10 + 10 + 1 + 1 + 1 + 1',
    '40 + 1 + 1 + 1',
    '40 + 1 + 1 + 1 + 1',
    '10 + 10 + 10 + 10 + 10 + 4'
  ];

  $scope.userAnswers = [];

  // Toggle selection for given answer
  $scope.toggleSelection = (availableAnswer) => {
    var idx = $scope.userAnswers.indexOf(availableAnswer);

    // Is currently selected
    if (idx > -1) {
      $scope.userAnswers.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.userAnswers.push(availableAnswer);
    }
  };
  const isInAnswers = (userAnswer) => {
    let verdict = false;
    answers.forEach(answer => {
      if(answer === userAnswer) {
        verdict = true;
      }
    });
    return verdict;
  };
  const userAnswerEqualsAnswer = () => {
    let verdict = true;
    if($scope.userAnswers.length != answers.length) {
      return false;
    }
    $scope.userAnswers.forEach(userAnswer => {
      if(!isInAnswers(userAnswer)) {
        verdict = false;
      }
    });
    return verdict;
  };
  $scope.printSelected = () => {
    console.log(userAnswerEqualsAnswer());
    // if($scope.userAnswers.length === answers.length && isInAnswers($scope.userAnswers[0]) && isInAnswers($scope.userAnswers[0])) {
    //   console.log('correct');
    // } else {
    //   console.log('incorrect');
    // }
  };
  
  // const answer = 'false';
  // $scope.userAnswer = null;
  
  // $scope.incorrectMessage = "Sorry that is incorrect, please try agin.";
  // $scope.correctMessage = "That's correct, awesome job!"
  // // $scope.message = null;

  // // target elements
  // const correctMessageSpan = angular.element(document.querySelector('#correct_message'));
  // const incorrectMessageSpan = angular.element(document.querySelector('#incorrect_message'));
  // const nextBtn = angular.element(document.querySelector('#nextBtn'));
  
  // $scope.checkAnswer = () => {
  //   correctMessageSpan.attr('class', 'green bold hidden');
  //   incorrectMessageSpan.attr('class', 'red bold hidden');
  //   if($scope.userAnswer === answer) {
  //     // // change color of message span to green
  //     // correctMessageSpan.addClass('green');
  //     // // bold text
  //     // correctMessageSpan.addClass('bold');
  //     // // change $scope.message to correctAnswer 
  //     // $scope.message = correctAnswer;
  //     // // show message
  //     correctMessageSpan.removeClass('hidden');
  //     // display next button
  //     nextBtn.removeClass('hidden');
  //   } else {
  //     // // change color of message span to red
  //     // messageSpan.addClass('red');
  //     // // bold text
  //     // messageSpan.addClass('bold');
  //     // // change $scope.message to wrongAnswer
  //     // $scope.message = wrongAnswer;
  //     // // show message
  //     incorrectMessageSpan.removeClass('hidden');
  //   }
  // }

  // $scope.nextQuestion = () => {
  //   $location.url('practice/place-values/two-digit-place-value/two-digit-place-value-3');
  // };
});