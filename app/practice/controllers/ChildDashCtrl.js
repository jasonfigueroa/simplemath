app.controller("ChildDashCtrl", function ($scope, $rootScope, Factory) {
  // $rootScope.test = 'changed';
  // console.log($rootScope.test);
  // NavigationCtrl.$scope.activeChildUsernmame = 'hello';
  // let userId = null;
  $scope.activeChild = null;

  // // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      // TODO capture the userId here
      if(!$rootScope.userId) {
        console.log('$rootScope.userId is not defined, allowing navigation to set initial variables');
      } else {
        Factory.getUserId(firebaseUser.email).then(key => {
          if($rootScope.userId === key) {
            console.log('$rootScope.userId has not changed');
          }
          Factory.getActiveChildId($rootScope.userId).then(data => {
            console.log(`$rootScope.activeChildId: ${$rootScope.activeChildId}`);
            console.log(`latest active child id: ${data}`);
            if($rootScope.activeChildId && $rootScope.activeChildId !== data) {
              console.log("$rootScope.activeChildId was defined and it changed!");
              $rootScope.activeChildId = data  
              Factory.getActiveChildUsername($rootScope.userId, $rootScope.activeChildId).then(data => {
                $scope.$apply($rootScope.activeChildUsername = data);
              });
            } else {
              console.log('$rootScope.activeChildId has NOT changed');
            }
            // $rootScope.activeChildId = data
          });
          // userId = key;
          // Factory.listChildren($rootScope.userId).then(childrenArray => {
          //   $scope.$apply(() => {
          //     $scope.childrenList = childrenArray;
          //     childrenArray.forEach(child => {
          //       if(child.active) {
          //         $scope.activeChild = child;
          //       }
          //     });
          //     // $scope.activeChild = $scope.childrenList.availableOptions[0];
          //     console.log($scope.activeChild)
          //   });
          // });
        });
      }
      console.log('from ChildDashCtrl: logged in');
      // console.log(`list in realtime listener: ${$scope.childrenList}`);
    } else {
      // TODO add redirect here
      console.log('from ChildDashCtrl: not logged in');      
    }
  });
});