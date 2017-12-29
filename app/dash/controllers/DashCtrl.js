app.controller("DashCtrl", function ($scope, $rootScope, $location) {
  
  console.log(`$rootScope.currentPath: ${$rootScope.currentPath}`);
  $rootScope.currentPath = $location.path();
  console.log(`$rootScope.currentPath: ${$rootScope.currentPath}`);

  $scope.displayAddChild = false;
  $scope.displayViewChildren = false;
  
  $scope.addChild = () => {
    console.log('adding new child to account');
  };

  // $scope.viewChildren = () => {
  //   console.log('displaying registered children');
  // };

});