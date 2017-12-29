app.controller("AddChildCtrl", function ($scope, AddChildFactory, $location) {
  let userEmail = null;

  $scope.newChild = {};

  $scope.addChild = () => {
    if($scope.newChild.username) {
      $scope.image.src = $scope.images[$scope.image.name].src;
      AddChildFactory.addChild(userEmail, $scope.newChild.username, $scope.image.src);
      $scope.newChild = {};
      // document.getElementById('newChildUsername').focus();
      $location.url('dash');
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

  /***************/
  /* From Sandbox*/
  /***************/

  let selectImageSrc = null;

  $scope.image = {
    name: 'image_1'
  };

  $scope.images = {
    image_1: {
      src: null
    },
    image_2: {
      src: null
    },
    image_3: {
      src: null
    }
  };

  // following is not in use right now 
  // const deselectImages = function() {
  //   for(key in $scope.images) {
  //     $scope.images[key].selected = false;
  //   }
  // }

  // 
  // $scope.selectImage = function(num) {
  //   deselectImages();
  //   $scope.images[num].selected = true;
  //   console.log($scope.images);
  //   selectImageSrc = $scope.images
  // }
  
  // $scope.pendingFriendRequests = [];

  // $scope.alerts = [
  //   { type: 'friendRequest', username: "spaz"},
  //   { type: 'friendRequest', username: "jaz"}
  // ];

  // $scope.addAlert = function() {
  //   $scope.alerts.push({msg: 'Another alert!'});
  // };

  // $scope.closeAlert = function(index) {
  //   $scope.alerts.splice(index, 1);
  // };

  // $scope.nav = {
  //   home: {title: "Home", active: true},
  //   profile: {title: "Profile", active: false},
  //   messages: {title: "Messages", active: false}
  // }

  // following is not in use right now
  // $scope.activate = function(item) {
  //   for(let key in $scope.nav) {
  //     $scope.nav[key].active = false;
  //   }
  //   item.active = true;
  // }

  $scope.avatar = {
    types: [
      {
        id: '1',
        name: 'robot',
        value: 'set_set1/'
      },
      {
        id: '2',
        name: 'monster',
        value: 'set_set2/'
      },
      {
        id: '3',
        name: 'cat',
        value: 'set_set4/'
      }
    ],
    selectedType: {
      id: '1',
      name: 'robot',
      value: 'set_set1/'
    },
    backgrounds: [
      {
        id: '2',
        name: 'one',
        value: 'bgset_bg1/'
      },
      {
        id: '3',
        name: 'two',
        value: 'bgset_bg2/'
      }
    ],
    selectedBackground: {
      id: '2',
      name: 'one',
      value: 'bgset_bg1/'
    }
  }

  const urlPrefix = 'https://robohash.org/';
    //   $scope.avatarArray = []
    
  // const avatarType = avatar.type.cat;
  // const avatarBackground = avatar.background.one;

  
  $scope.avatarArray = [];
  
  const randomString = function() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    function randomValue() {
      return Math.floor(Math.random() * 10) + 1;
    }
    
    for (let i = 0; i < randomValue(); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return text;
  }

  // TODO 12-3-2017 Test Code
  $scope.reloadImages = function() {
    // following line is currently not in use
    // deselectImages();
    
    // console.log(document.images);
    scopeImageIndex = 0;
    let keyPrefix = 'image_';
    let key = null;
    for(let i = 0; i < document.images.length; i++) {
      if(document.images[i].id !== 'nav_active_child_avatar') {
        let image = document.images[i];
        image.src = "../assets/clear.png"
        let downloadingImage = new Image();
        downloadingImage.onload = function(){
          key = keyPrefix + i;
          image.src = this.src;
          console.log(`key: ${key}`);
          $scope.images[key].src = image.src; 
        };
        downloadingImage.src = `${urlPrefix}${$scope.avatar.selectedType.value}${$scope.avatar.selectedBackground.value}${randomString()}.png`;
        // console.log(downloadingImage.src);
        // $scope.images[scopeImageIndex].src = downloadingImage;
        scopeImageIndex++;
      }
  
    }
  }

  $scope.printSrc = imageName => {
    console.log($scope.images);
    $scope.image.src = $scope.images[$scope.image.name].src;
    console.log($scope.image);
  }; 

  $scope.reloadImages();

  /********************/
  /* End From Sandbox */
  /********************/
});