app.controller("NavigationCtrl", function ($scope, $rootScope, $location, Factory) {
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