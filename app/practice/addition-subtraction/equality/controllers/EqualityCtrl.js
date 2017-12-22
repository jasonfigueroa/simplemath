app.controller("EqualityCtrl", function ($scope, $location, EqualityFactory) {
  
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

  function reset_template() {
    // correct answer is reset to null
    answer = null;
    $scope.equality_set = [];
  
    const a = getRandomInt(8, 19)
    const b = a + getRandomInt(1, 3)
    const c = a - getRandomInt(1, 3)
  
    $scope.equality_set.push(buildEquality(a));
    $scope.equality_set.push(buildEquality(a, b));
    $scope.equality_set.push(buildEquality(c, a));
  
    const newCorrectAnswerIndex = getRandomInt(0, 3);
    
    swapArrayElements($scope.equality_set, correctAnswerIndex, newCorrectAnswerIndex);
    
    $scope.userAnswer = '';
    answer = `${$scope.equality_set[newCorrectAnswerIndex].equation_a} = ${$scope.equality_set[newCorrectAnswerIndex].equation_b}`;
  }

  $scope.checkAnswer = () => {
    
    messageSpan.attr('class', 'hidden');
    if($scope.userAnswer === answer) {
      // following is new
      // $scope.correctAnswerCount++;
      if($scope.correctAnswerCount + 1 >= $scope.totalQuestions) {
        // display complete section button
        showModalBtn.removeClass('hidden');
        // redirect here
      } else {
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
  };

  $scope.nextQuestion = () => {

    reset_template();
    
    $scope.correctAnswerCount++;

    messageSpan.attr('class', 'hidden');
    nextBtn.addClass('hidden');

    // if correct answer count === 10 congrats, log in db, redirect button

    // else print next question and reset variables

    // following is old
    // $location.url('practice/addition-subtraction/equality/equality-2');
  };

  $scope.completeSection = () => {
    console.log(`activeChildId: ${activeChildId}`);
    EqualityFactory.markAsComplete(userId, activeChildId);
    // log to db
    // 
    
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
  let userId = null;
  let activeChildId = null;

  let answer = null;

  $scope.totalQuestions = 10;
  $scope.correctAnswerCount = 0;
  
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

  reset_template();

  // // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      EqualityFactory.getUserId(firebaseUser.email).then(data => {
        console.log(`data: ${data}`);
        userId = data;
        console.log(`userId: ${userId}`)
        EqualityFactory.getActiveChildId(userId).then(data => activeChildId = data);
      });
      // console.log(firebaseUser.email);
      // console.log('logged in');
      // console.log(`userId: ${userId}`);
      
    } else {
      // TODO add redirect here
      console.log('not logged in');
      
    }
  });
});