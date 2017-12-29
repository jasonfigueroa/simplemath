app.controller("NavigationCtrl", function ($scope, $rootScope, $location, Factory) {
  $rootScope.currentPath = $location.path();
  
  // $rootScope.test = 'hello';
  // console.log($rootScope.test);
  // let userId = null;
  // let activeChildId = null;
  // $scope.activeChildUsername = null;

  $scope.locationIsRoot = () => {
    console.log('in locationIsRoot()');
    return $location.url() === '/';
  };
  
  $scope.logout = () => {
    Factory.logout();
  };

  // TODO assign the following to $rootScope
  // - user email - nix this available with firebaseUser.email property
  // - user id
  // - child id
  // - child username
  // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      Factory.getUserId(firebaseUser.email).then(data => {
        $rootScope.userId = data;
        
        /* Working New Block */
        Factory.getActiveChildId($rootScope.userId).then(data => {
          // if active child
          if(data) {
            $rootScope.activeChildId = data
                        
            Factory.getActiveChildObj($rootScope.userId).then(childObj => {
              console.log(childObj)
    
              $scope.$apply(() => {
                // rootscope the child username
                $rootScope.activeChildUsername = childObj.username;
      
                // rootscope the child avatar src
                $rootScope.activeChildAvatarSrc = childObj.avatar;
              });
            });

          } else {
            $scope.$apply(() => {
              $location.path("/dash");
            });
          }
        });
        /* End Working New Block */


        // change this block to pull active child object
        // LEAVE THIS IN HERE FOR NOW
        Factory.getActiveChildId($rootScope.userId).then(data => {
          // if active child
          if(data) {
            $rootScope.activeChildId = data
            Factory.getActiveChildUsername($rootScope.userId, $rootScope.activeChildId).then(data => {
              $scope.$apply(() => {
                $rootScope.activeChildUsername = data
                $location.path("/child-dash");
              });
              // $rootScope.activeChildUsername = data;
            });            
          } else {
            $scope.$apply(() => {
              $location.path("/dash");
            });
          }
        });
      });
      
    } else {
      // TODO add redirect here
      console.log('not logged in');
      
    }
  });
});