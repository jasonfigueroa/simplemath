angular
// TODO change NgBoilerApp to app name
.module("NgBoilerApp")
// TODO change LoginCtrl to controller name
.controller("DashCtrl", function ($scope) {
  
  $scope.displayAddChild = false;
  $scope.displayViewChildren = false;
  
  $scope.addChild = () => {
    console.log('adding new child to account');
  };

  // $scope.viewChildren = () => {
  //   console.log('displaying registered children');
  // };

});