angular
// TODO change NgBoilerApp to app name
.module("NgBoilerApp")
// TODO change LoginCtrl to controller name
.controller("NavigationCtrl", function ($scope, $location, NavigationFactory) {
  $scope.locationIsRoot = () => {
    console.log('in locationIsRoot()');
    return $location.url() === '/';
  };
  
  $scope.logout = () => {
    NavigationFactory.logout();
  };

});