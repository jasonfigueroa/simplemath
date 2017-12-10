angular
// TODO change NgBoilerApp to app name
.module("NgBoilerApp")
// TODO change LoginCtrl to controller name
.controller("ChildDashCtrl", function ($scope, ChildDashFactory) {
  let userId = null;
  $scope.activeChild = null;

  // // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      // TODO capture the userId here
      ChildDashFactory.getUserId(firebaseUser.email).then(key => {
        userId = key;
        ChildDashFactory.listChildren(userId).then(childrenArray => {
          $scope.$apply(() => {
            $scope.childrenList = childrenArray;
            childrenArray.forEach(child => {
              if(child.active) {
                $scope.activeChild = child;
              }
            });
            // $scope.activeChild = $scope.childrenList.availableOptions[0];
            console.log($scope.activeChild)
          });
        });
      });
      console.log('logged in');
      // console.log(`list in realtime listener: ${$scope.childrenList}`);
    } else {
      // TODO add redirect here
      console.log('not logged in');      
    }
  });
});