app.controller("Equality1Ctrl", function ($scope, $location) {
  
  /*************/
  /* Functions */
  /*************/

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function generateEquationFor(c) {
    let a = getRandomInt(0, c);
    
    while(a > c - 2 || a <= 1) {
      // console.log(a, c)
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

  function getCorrectAnswerIndex(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].correct_answer) {
        return i;
      }
    }
  }
  
  // You would use this like: swapArrayElements(myArray, 3, 7);
  const swapArrayElements = function(arr, indexA, indexB) {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  };

  $scope.nextQuestion = () => {
    console.log('clicked next button');

    reset_template();
    messageSpan.attr('class', 'hidden');
    nextBtn.addClass('hidden');

    // if correct answer count === 10 congrats, log in db, redirect button

    // else print next question and reset variables

    // following is old
    // $location.url('practice/addition-subtraction/equality/equality-2');
  };

  $scope.completeSection = () => {
    $location.url('practice/child-dash');

    // TODO 12-19-2017 mark this section as complete in the db for the active user
    console.log('TODO 12-19-2017 mark this section as complete in the db for the active user');
  };

  $scope.showModalBtn = () => {
    congratsModal.removeClass('hidden');
  };

  /********************/
  /* End of Functions */
  /********************/



  /************************/
  /* Initialize Variables */
  /************************/

  // the following is the correct answer
  let answer = null;

  const totalQuestions = 2;
  let correctAnswerCount = 0;
  
  const correctAnswerIndex = 0;
  // const correctAnswerIndex = getCorrectAnswerIndex($scope.equality_set);
  
  const wrongAnswer = "Sorry that is incorrect, please try agin.";
  const correctAnswer = "That's correct, awesome job!"
  
  // may put this in the loop
  $scope.message = null;
  
  // target elements
  const messageSpan = angular.element(document.querySelector('#message'));
  const nextBtn = angular.element(document.querySelector('#nextBtn'));

  const showModalBtn = angular.element(document.querySelector('#showModalBtn'));

  // modal variables
  const completeSectionBtn = angular.element(document.querySelector('#completeSectionBtn'));
  const congratsModal = angular.element(document.querySelector('#congratsModal'));

  /****************************/
  /* End Initialize Variables */
  /****************************/

  // redirect will have to go in here
  // also increment correctAnswerCount in here
  $scope.checkAnswer = () => {
    
    messageSpan.attr('class', 'hidden');
    if($scope.userAnswer === answer) {
      // following is new
      correctAnswerCount++;
      if(correctAnswerCount >= totalQuestions) {
        console.log('section complete, should redirect here');
        // display complete section button
        showModalBtn.removeClass('hidden');
        // redirect here
      } else {
        console.log(`completed ${correctAnswerCount} of ${totalQuestions} questions`);
        // display next button
        nextBtn.removeClass('hidden');
      }
      
      // change color of message span to green
      messageSpan.addClass('green');
      // bold text
      messageSpan.addClass('bold');
      // change $scope.message to correctAnswer 
      $scope.message = correctAnswer;
      // show message
      messageSpan.removeClass('hidden');

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

  // $scope.completeSection = () => {
  //   // display congratulatory modal
  //   congratsModal.removeClass('hidden');

  //   // in modal present button to redirect to list of available concepts to practice
  // };

  /**************/
  /* Start Loop */
  /**************/

  function reset_template() {
    // correct answer is reset to null
    answer = null;
    $scope.equality_set = [];
  
    const a = getRandomInt(8, 19)
    const b = a + getRandomInt(1, 3)
    const c = a - getRandomInt(1, 3)
  
    // buildEquality(a)
    // buildEquality(a, b)
    // buildEquality(c, a)
    $scope.equality_set.push(buildEquality(a));
    $scope.equality_set.push(buildEquality(a, b));
    $scope.equality_set.push(buildEquality(c, a));
  
    const newCorrectAnswerIndex = getRandomInt(0, 3);
    
    // console.log($scope.equality_set);
    swapArrayElements($scope.equality_set, correctAnswerIndex, newCorrectAnswerIndex);
    // console.log($scope.equality_set);
    
    $scope.userAnswer = '';
    answer = `${$scope.equality_set[newCorrectAnswerIndex].equation_a} = ${$scope.equality_set[newCorrectAnswerIndex].equation_b}`;
  }

  reset_template();

  /************/
  /* End Loop */
  /************/

  // following is old
  // $scope.equality_set.push(buildEquality(15, 14));
  // $scope.equality_set.push(buildEquality(15));
  // $scope.equality_set.push(buildEquality(16, 15));  

});