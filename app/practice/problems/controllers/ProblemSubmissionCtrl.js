angular.module('simpleMath').controller("ProblemSubmissionCtrl", function ($scope, ProblemSubmissionFactory, CategorySubmissionFactory) {
    $scope.categoryList = {
      availableOptions: null,
      selectedOption: null
    };

    $scope.problem = {
      categoryId: null,
      question: '',
      answer: ''
    };

    $scope.addProblem = () => {
      console.log($scope.problem);
      if($scope.problem.question && $scope.problem.answer) {
        console.log('adding question');
        ProblemSubmissionFactory.addProblem($scope.problem).then(() => {
          $scope.categoryList.selectedOption = $scope.categoryList.availableOptions[0];
          $scope.problem.question = '';
          $scope.problem.answer = '';
        });
      }
      // ProblemSubmissionFactory.add();
    };

    // // add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        // TODO capture the userId here
        CategorySubmissionFactory.listCategories().then(categoryArray => {
          $scope.$apply(() => {
            $scope.categoryList.availableOptions = categoryArray;
            $scope.categoryList.selectedOption = $scope.categoryList.availableOptions[0];
            $scope.problem.categoryId = $scope.categoryList.selectedOption.id;
            console.log($scope.categoryList)
          });
        });
        console.log('logged in');
        // console.log(`list in realtime listener: ${$scope.childrenList}`);
      } else {
        // TODO add redirect here
        console.log('not logged in');
      }
    });
  });