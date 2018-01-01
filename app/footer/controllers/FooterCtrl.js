app.controller("FooterCtrl", function ($scope, $rootScope, $location, Factory) {
  // $rootScope.currentPath = $location.path();
  
  // $rootScope.test = 'hello';
  // console.log($rootScope.test);
  // let userId = null;
  // let activeChildId = null;
  // $scope.activeChildUsername = null;

  $scope.locationIsRoot = () => {
    console.log('in locationIsRoot()');
    return $location.url() === '/';
  };
});