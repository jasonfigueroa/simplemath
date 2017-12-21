app.controller("AddingWithinTwentyCtrl", function ($scope, $location) {

  /*************/
  /* Functions */
  /*************/

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function reset_template() {
    $scope.set = {};
    answer = null;    
    
    $scope.userAnswer = '';
    
    
    // adding within 20
    c = getRandomInt(8, 21);
    $scope.set.c = c
    a = getRandomInt(2, c) 
    $scope.set.a = a
    b = c - a
    $scope.set.b = b
    console.log(`${a} + ${b} = ${c}`)
    answer = c;
  }

  $scope.nextQuestion = () => {
    reset_template();
    
    $scope.correctAnswerCount++;

    messageSpan.attr('class', 'hidden');
    nextBtn.addClass('hidden');
  };

  // TODO 12-21-2017 following is not in use and has to be fixed
  $scope.completeSection = () => {
    console.log(`activeChildId: ${activeChildId}`);
    // EqualityFactory.markAsComplete(userId, activeChildId);
    // log to db
    
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

  // following are not in use yet
  let userId = null;
  let activeChildId = null;
  
  $scope.set = null;
  let a = 0;
  let b = 0;
  let c = 0;

  let answer = null;

  $scope.totalQuestions = 2;
  $scope.correctAnswerCount = 0;
  
  const wrongAnswer = "Sorry that is incorrect, please try agin.";
  const correctAnswer = "That's correct, awesome job!"
  
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

  $scope.checkAnswer = () => {
    messageSpan.attr('class', 'hidden');
    if ($scope.userAnswer == answer) {
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
      // display next button
      // nextBtn.removeClass('hidden');
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

  // TODO 12-21-2017 haven't done anything to the following
  // // // add a realtime listener
  // firebase.auth().onAuthStateChanged(firebaseUser => {
  //   if(firebaseUser) {
  //     EqualityFactory.getUserId(firebaseUser.email).then(data => {
  //       console.log(`data: ${data}`);
  //       userId = data;
  //       console.log(`userId: ${userId}`)
  //       EqualityFactory.getActiveChildId(userId).then(data => activeChildId = data);
  //     });
  //     // console.log(firebaseUser.email);
  //     // console.log('logged in');
  //     // console.log(`userId: ${userId}`);
      
  //   } else {
  //     // TODO add redirect here
  //     console.log('not logged in');
      
  //   }
  // });
});