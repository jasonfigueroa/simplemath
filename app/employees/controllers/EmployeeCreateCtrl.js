// kind of a lot going on here, could be broken up into 2 or more modules I think
angular
// TODO change NgBoilerApp to app name
.module("NgBoilerApp")
// TODO change the name of this controller, remove unnecessary parameters
.controller("EmployeeCreateCtrl", function ($scope, $timeout, $location, EmployeeFactory) {
  $scope.employee = {};
  $scope.employeeList = null;
  
  const getEmployees = () => {
    EmployeeFactory.list().then((response) => {
      // $apply is used to manually signal a change data leading to a change in dom
      $scope.$apply(() => {
        $scope.employeeList = response;
      });
    });
  };

  getEmployees();

  $scope.addEmployee = () => {
    if($scope.employee.fname && $scope.employee.lname) {
      EmployeeFactory.add($scope.employee);
      $scope.employee = {};
      getEmployees();
    } else {
      console.log('must provide string for fname & lname')
    }    
  };

  $scope.removeEmployee = (employee) => {
    EmployeeFactory.remove(employee.id);
    getEmployees();
  };

  $scope.fireEmployee = (employee) => {
    EmployeeFactory.fire(employee.id);
    getEmployees();
  };

  // the following will verify that the user is authenticated, if user is not 
  // authenticated the user will be redirected to the login/register screen
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      console.log('logged in');
    } else {
      console.log('not logged in');
      $timeout(function () {
        $location.url("/");
      }, 100);
    }
  });
})