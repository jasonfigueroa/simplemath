app.controller("Equality1Ctrl", function ($scope, $location) {
  // $scope.msg = "works!";

  // pasted in
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function generateEquationFor(c) {
    let a = getRandomInt(0, c);
    
    while(a > c - 2 || a <= 1) {
      console.log(a, c)
      a = getRandomInt(0, c)
    }
  
    const b = c - a;
    return `${a} + ${b}`;
  }
  
  // passing in a second parameter will return an object with a set of equations 
  // not equal to each other, unless the 1st param is equal to the 2nd param
  function buildEquality(a, b=a) {
    const set = {
      equation_a: null,
      equation_b: null
    };
  
    if(a != b) {
      set.equation_a = generateEquationFor(a);
      set.equation_b = generateEquationFor(b);
  
    } else {
      set.equation_a = generateEquationFor(a);
      set.equation_b = generateEquationFor(a);
      set.correct_answer = true;
    }
  
    return set;
  }
  // end pasted in

  $scope.equality_set = [];

  $scope.equality_set.push(buildEquality(15, 14));
  $scope.equality_set.push(buildEquality(15));
  $scope.equality_set.push(buildEquality(16, 15));

  function getCorrectAnswerIndex(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].correct_answer) {
        return i;
      }
    }
  }
  
  // You would use this like: swapArrayElements(myArray, 3, 7);
  var swapArrayElements = function(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  };

  const correctAnswerIndex = getCorrectAnswerIndex($scope.equality_set);
  const newCorrectAnswerIndex = getRandomInt(0, 3);

  console.log($scope.equality_set);
  swapArrayElements($scope.equality_set, correctAnswerIndex, newCorrectAnswerIndex);
  console.log($scope.equality_set);
  
  // $scope.equality_set = {
  //   equality_a: buildEquality(15, 14),
  //   equality_b: buildEquality(15),
  //   equality_c: buildEquality(16, 15)
  // };

  // console.log($scope.equality_set);

  // $scope.answers = {
  //   answer_a: `${$scope.equality_set.equality_a.equation_a} = ${$scope.equality_set.equality_a.equation_b}`,
  //   answer_b: `${$scope.equality_set.equality_b.equation_a} = ${$scope.equality_set.equality_b.equation_b}`,
  //   answer_c: `${$scope.equality_set.equality_c.equation_a} = ${$scope.equality_set.equality_c.equation_b}`
  // };

  // console.log($scope.answers)

  $scope.userAnswer = '';
  const answer = `${$scope.equality_set[newCorrectAnswerIndex].equation_a} = ${$scope.equality_set[newCorrectAnswerIndex].equation_b}`;
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
    $location.url('practice/addition-subtraction/equality/equality-2');
  };
});