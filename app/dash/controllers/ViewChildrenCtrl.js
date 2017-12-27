app.controller("ViewChildrenCtrl", function ($scope, $rootScope, ViewChildrenFactory) {
  let userId = null;
  $scope.childrenList = null;
  
  $scope.removeChild = (child) => {
    console.log('in remove child');
    console.log(`child.id: ${child.id}`);
    console.log(`$rootScope.activeChildId: ${$rootScope.activeChildId}`);
    // if(child.id === $rootScope.activeChildId) {
    //   console.log('in if child.id === $rootScope.activeChildId');
    //   $scope.$apply(() => {
    //     $rootScope.activeChildId = '';
    //   });
    // }
    ViewChildrenFactory.removeChild(userId, child.id).then(() => {
      console.log('in removeChild.then')
      ViewChildrenFactory.listChildren(userId).then(childrenArray => {
        $scope.$apply(() => {
          if(child.id === $rootScope.activeChildId) {
            console.log('in if child.id === $rootScope.activeChildId');
            $rootScope.activeChildId = null;
          }
          $scope.childrenList = childrenArray;
        });
      });
    });
  };

  // // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      // TODO capture the userId here
      ViewChildrenFactory.getUserId(firebaseUser.email).then(key => {
        userId = key;
        ViewChildrenFactory.listChildren(userId).then(childrenArray => {
          $scope.$apply(() => {
            $scope.childrenList = childrenArray;
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