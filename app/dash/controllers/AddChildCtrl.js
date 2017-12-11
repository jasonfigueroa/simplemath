app.controller("AddChildCtrl", function ($scope, AddChildFactory) {
  let userEmail = null;

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
      
    } else {
      // TODO add redirect here
      console.log('not logged in');
      
    }
  });
});