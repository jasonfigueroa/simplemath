app.controller("AddingWithinTwentyCtrl", function ($uibModal, $document, $scope, $rootScope, $location, Factory, toaster) {

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

  $rootScope.completeSection = () => {
    const childConceptObj = {
      childId: $rootScope.activeChildId,
      conceptId: $rootScope.activeConceptId
    };
    Factory.addConceptToChildConcepts(childConceptObj);
    $location.url('child-dash');
  };

  const popSuccess = function(){
    toaster.pop('success', "Correct", "Awesome job!");
  };

  const popError = function(){
    toaster.pop('error', "Incorrect", "Sorry, please try agin.");
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
    if ($scope.userAnswer == answer) {
      
      if($scope.correctAnswerCount + 1 >= $scope.totalQuestions) {
        showModalBtn.removeClass('hidden');
        document.getElementById('showModalBtn').focus();
      } else {
        nextBtn.removeClass('hidden');
        document.getElementById('nextBtn').focus();
      }
      
      popSuccess();
    
    } else {
      popError();
    }
  }
});

app.controller('ModalDemoCtrl', function ($uibModal, $document, $rootScope) {
  var $ctrl = this;
  $ctrl.items = "Hello From Controller";

  $ctrl.animationsEnabled = true;

  $rootScope.openModal = () => {
    $ctrl.open();
  }
  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
  };
});

// The following is for the modal
app.controller('ModalInstanceCtrl', function ($uibModalInstance, items, $rootScope) {
  const $ctrl = this;
  $ctrl.items = items;

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
    $rootScope.completeSection();
  };
});