app.controller("LoginCtrl", function ($scope, $location, LoginFactory) {
  $scope.employee = {};

  $scope.loginEmail = '';
  $scope.loginPassword = '';

    // add login event
  $scope.login = () => {
    const email = $scope.loginEmail;
    const pass = $scope.loginPassword;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  }

  // TODO add autologin on creation and clear text boxes
  $scope.signUp = () => {
    const email = $scope.loginEmail;
    const pass = $scope.loginPassword;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass)
    .then(() => {
      LoginFactory.add(email);
    });
    promise.catch(e => console.log(e.message));

  };

  $scope.logout = () => {
    firebase.auth().signOut();
  };

  // // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      console.log('logged in');

      // redirect user
      $scope.$apply(() => {
        $location.path("/dash");
      });

      // display hidden items
      // angular.element(document.querySelector('#createEmployeeAnchor')).removeClass('hidden');
      // angular.element(document.querySelector('#btnLogout')).removeClass('hidden');
    } else {
      console.log('not logged in');
      
      // hide items
      // angular.element(document.querySelector('#createEmployeeAnchor')).addClass('hidden');
      // angular.element(document.querySelector('#btnLogout')).addClass('hidden');
    }
  });

})