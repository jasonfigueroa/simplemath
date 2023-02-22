angular.module('simpleMath').controller("CategorySubmissionCtrl", function ($scope, CategorySubmissionFactory) {
  $scope.category = {
    name: '',
    rank: '',
    description: null
  };

  $scope.addCategory = () => {
    if($scope.category.name && $scope.category.rank) {
      CategorySubmissionFactory.addCategory($scope.category);
    }
  };
});