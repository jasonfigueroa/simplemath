app.controller("DashCtrl", function ($scope) {
  
  $scope.displayAddChild = false;
  $scope.displayViewChildren = false;
  
  $scope.addChild = () => {
    console.log('adding new child to account');
  };

  // $scope.viewChildren = () => {
  //   console.log('displaying registered children');
  // };

});