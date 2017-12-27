app.controller("SelectChildCtrl", function ($scope, $rootScope, $location, SelectChildFactory) {
  let userId = null;
  $scope.childrenList = {};
  let activeChild = null;
  
  // $scope.removeChild = (child) => {
  //   console.log('in remove child');
  //   SelectChildFactory.removeChild(userId, child.id).then(() => {
  //     console.log('in removeChild.then')
  //     SelectChildFactory.listChildren(userId).then(childrenArray => {
  //       $scope.$apply(() => {
  //         $scope.childrenList = childrenArray;
  //       });
  //     });
  //   });
  // };

  // const activeChild = () => {
  //   $scope.childrenList.availableOptions.forEach(child => {
  //     if(child.active) {
  //       activeChild = child;
  //     }
  //   });
  // };

  $scope.activateChild = () => {
    $scope.childrenList.availableOptions.forEach(child => {
      if(child.active) {
        activeChild = child;
      }
    });
    const childId = $scope.childrenList.selectedOption.id;
    // console.log(`childId: ${childId}`);
    // added the following to capture the assignment of active child
    // $scope.$apply(() => {
    //   $rootScope.activeChildId = childId;
    // });
    if(activeChild) {
      SelectChildFactory.deactivate(userId, activeChild.id).then(() => {
        SelectChildFactory.selectChild(userId, childId).then(() => {
          $scope.$apply(() => {
            $location.url('child-dash');  
          });
        });
      });
    } else {
      SelectChildFactory.selectChild(userId, childId).then(() => {
        $scope.$apply(() => {
          $location.url('child-dash');
        });
      });
    }
    // $scope.childrenList.availableOptions.forEach((child) => {
    //   if(child.active) {
    //     SelectChildFactory.deactivate(userId, child.id)
    //   }
    // })
    // .then(() => {
    //   SelectChildFactory.selectChild(userId, childId).then(() => {
    //     $location.url('/child-dash');
    //   });
    // });

    // SelectChildFactory.deactivateAll().then(() => {
    // });
  };

  // // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      // TODO capture the userId here
      SelectChildFactory.getUserId(firebaseUser.email).then(key => {
        userId = key;
        SelectChildFactory.listChildren(userId).then(childrenArray => {
          $scope.$apply(() => {
            $scope.childrenList.availableOptions = childrenArray;
            $scope.childrenList.selectedOption = $scope.childrenList.availableOptions[0];
            console.log($scope.childrenList)
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