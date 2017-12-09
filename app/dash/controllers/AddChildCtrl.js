angular
// TODO change NgBoilerApp to app name
.module("NgBoilerApp")
// TODO change LoginCtrl to controller name
.controller("AddChildCtrl", function ($scope, AddChildFactory) {
  let userEmail = null;
  // AddChildFactory.list(userEmail).then((users) => {
  //   // users.forEach((user) => {
  //   //   console.log(user);
  //   // });
  //   // console.log(users);
  // });

  $scope.newChild = {};

  $scope.addChild = () => {
    if($scope.newChild.username) {
      AddChildFactory.addChild(userEmail, $scope.newChild.username);
    }
  };

  // // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      userEmail = firebaseUser.email;
      console.log(firebaseUser.email);
      console.log('logged in');
      // AddChildFactory.list(userEmail)
      // .then((users) => {
      //   // users.forEach((user) => {
      //   //   console.log(user);
      //   // });
      //   // console.log(users);
      // });
    } else {
      // TODO add redirect here
      console.log('not logged in');
      
    }
  });
});