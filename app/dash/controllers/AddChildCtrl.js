app.controller("AddChildCtrl", function ($scope, AddChildFactory) {
  let userEmail = null;

  $scope.newChild = {};

  $scope.addChild = () => {
    if($scope.newChild.username) {
      AddChildFactory.addChild(userEmail, $scope.newChild.username);
      $scope.newChild = {};
      document.getElementById('newChildUsername').focus();
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

  $scope.images = [
    {id: 'image-div_1', selected: false, src: null},
    {id: 'image-div_2', selected: false, src: null},
    {id: 'image-div_3', selected: false, src: null},
    {id: 'image-div_4', selected: false, src: null},
    {id: 'image-div_5', selected: false, src: null},
  ];
  //   one: {id: 'image-div_1', selected: false},
  //   two: {id: 'image-div_2', selected: false},
  //   three: {id: 'image-div_3', selected: false},
  //   four: {id: 'image-div_4', selected: false},
  //   five: {id: 'image-div_5', selected: false},
  //   // six: {id: 'image-div_6', selected: false},
  //   // seven: {id: 'image-div_7', selected: false},
  //   // eight: {id: 'image-div_8', selected: false},
  //   // nine: {id: 'image-div_9', selected: false},
  //   // ten: {id: 'image-div_10', selected: false}
  // }

  const deselectImages = function() {
    for(key in $scope.images) {
      $scope.images[key].selected = false;
    }
  }

  $scope.selectImage = function(num) {
    deselectImages();
    $scope.images[num].selected = true;
    console.log($scope.images);
    selectImageSrc = $scope.images
  }
  
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

  $scope.activate = function(item) {
    for(let key in $scope.nav) {
      $scope.nav[key].active = false;
    }
    item.active = true;
  }

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
    deselectImages();
    // console.log(document.images);
    scopeImageIndex = 0;
    for(let i = 0; i < document.images.length; i++) {
      if(document.images[i].id !== 'nav_active_child_avatar') {
        let image = document.images[i];
        image.src = "../assets/clear.png"
        let downloadingImage = new Image();
        downloadingImage.onload = function(){
            image.src = this.src;   
        };
        downloadingImage.src = `${urlPrefix}${$scope.avatar.selectedType.value}${$scope.avatar.selectedBackground.value}${randomString()}.png`;
        // console.log(downloadingImage.src);
        $scope.images[scopeImageIndex].src = downloadingImage;
        scopeImageIndex++;
      }
  
    }
  }

  $scope.reloadImages();

  /********************/
  /* End From Sandbox */
  /********************/
});