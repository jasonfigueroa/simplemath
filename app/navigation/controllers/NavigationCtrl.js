app.controller("NavigationCtrl", function ($scope, $location, NavigationFactory) {
  $scope.locationIsRoot = () => {
    console.log('in locationIsRoot()');
    return $location.url() === '/';
  };
  
  $scope.logout = () => {
    NavigationFactory.logout();
  };

});