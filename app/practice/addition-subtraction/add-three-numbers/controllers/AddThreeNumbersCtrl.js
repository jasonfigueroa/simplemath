app.controller("AddThreeNumbersCtrl", function ($scope, $location) {

  /*************/
  /* Functions */
  /*************/

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function reset_template() {
    document.getElementById('userInput').focus();
    
    $scope.set = {};
    answer = null;    
    
    $scope.userAnswer = '';
    
    // making sure that values a, b and c are all greater than 1
    // while(a <= 1 || b <= 1 || c <= 1) {
    //   d = getRandomInt(8, 21);
    //   $scope.set.d = d;
      
    //   a = getRandomInt(d/4, d);
    //   $scope.set.a = a;  
      
    //   b = getRandomInt(0, d - a);
    //   $scope.set.b = b;
      
    //   c = d - a - b;
    // }

    d = getRandomInt(8, 21);
    $scope.set.d = d;

    const divisor = getRandomInt(2, 5);

    a = Math.floor(d/divisor);
    $scope.set.a = a;

    b = getRandomInt(2, ((d - a) - 1));
    $scope.set.b = b;

    c = d - (a + b);
    $scope.set.c = c;

    answer = d;
    console.log(`${$scope.set.a} + ${$scope.set.b} + ${$scope.set.c} = ${$scope.set.d}`);
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
    document.getElementById('completeSectionBtn').focus();
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

  $scope.set = {};

  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;

  let answer = null;

  $scope.totalQuestions = 10;
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
        document.getElementById('showModalBtn').focus();
        // redirect here
      } else {
        // display next button
        nextBtn.removeClass('hidden');
        document.getElementById('nextBtn').focus();
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
});