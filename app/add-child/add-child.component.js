(function () {
  angular
    .module('addChild')
    .component('addChild', {
      templateUrl: 'add-child/add-child.template.html',
      controller: AddChildController
    });

  AddChildController.$inject = ['$location', 'authService', 'childService'];

  function AddChildController($location, authService, childService) {
    let self = this;

    self.newChild = {};

    self.loadImages = loadImages;
    self.addChild = addChild;
    self.updateSelectedImage = updateSelectedImage;

    self.image = {
      name: 'image_1'
    };

    self.images = {
      image_1: {
        src: null,
        selected: true
      },
      image_2: {
        src: null
      },
      image_3: {
        src: null
      }
    };

    self.avatar = {
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
    };

    activate();

    function activate() {
      loadImages();
      updateSelectedImage();
    }

    function updateSelectedImage() {
      unmarkSelectedImage();
      markSelectedImage();
    }

    function unmarkSelectedImage() {
      document.getElementById('span_1').classList.remove('glyphicon-ok');
      document.getElementById('span_2').classList.remove('glyphicon-ok');
      document.getElementById('span_3').classList.remove('glyphicon-ok');
    }

    function markSelectedImage() {
      const num = self.image.name.split('_')[1];
      document.getElementById(`span_${num}`).classList.add('glyphicon-ok');
    }

    function addChild() {
      if (self.newChild.userName) {
        self.newChild.parentId = authService.getLoggedInUserId();
        self.newChild.avatarUrl = self.images[self.image.name].src;
        
        childService.addChild(self.newChild);
        
        self.newChild = {};
        
        $location.path('/dash');
      }
    }

    function loadImages() {
      let key = null;
      
      for (let i = 0; i < document.images.length; i++) {
        if (document.images[i].id !== 'nav-active-child-avatar') {
          let image = document.images[i];
          let downloadingImage = new Image();
          
          downloadingImage.src = 'https://robohash.org/' +
            self.avatar.selectedType.value +
            self.avatar.selectedBackground.value +
            randomString() +
            '.png';
          
          // This seems to be an asynchronous function
          downloadingImage.onload = function () {
            key = `image_${i}`;

            // The this below is the downloadingImage this event listener was 
            // attached to 
            image.src = this.src;
            self.images[key].src = image.src;
          };
        }
      }
    }

    function randomString() {
      let text = "";
      const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      function randomValue() {
        return Math.floor(Math.random() * 10) + 1;
      }

      for (let i = 0; i < randomValue(); i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  }
})();