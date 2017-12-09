angular
// TODO change name of app
.module("NgBoilerApp")
// TODO change name of factory
.factory("ViewChildrenFactory", function ($http) {
  return Object.create(null, {
    "cache": {
      value: null,
      writable: true
    },
    // read
    "getUserId": {
      value: function (email) {
        return firebase.database().ref('/users/').once('value').then(function(snapshot) {
          const data = snapshot.val();
          let userId = null;
          // console.log(data);
          for(key in data) {
            // console.log(`key: ${key}`);
            // console.log(`data[key].email: ${data[key].email}`);
            if(data[key].email === email) {
              userId = key;
            }
          }
          
          return key;
          // // converting returned object to array and storing it in cache
          // this.cache = Object.keys(data).map(key => {
          //   data[key].id = key
          //   return data[key]
          // });

          // return this.cache
          
        });
      }
    },
    // read
    "listChildren": {
      value: function (userId) {
        // let userId = null;
        // return this.getUserId(userEmail).then(key => {
        //   const userId = key;

          return firebase.database().ref(`/users/${userId}/children`).once('value').then(function(snapshot) {
            const data = snapshot.val();
            // console.log(data);
            // return data;
            // converting returned object to array and storing it in cache
            this.cache = Object.keys(data).map(key => {
              data[key].id = key
              return data[key]
            });
  
            return this.cache
        });
          
        // });
      }
    },
    // delete
    // need relationship id
    "removeChild": {
      value: function (userId, childId) {
        console.log('test')
        return firebase.database().ref(`/users/${userId}/children`).child(childId).remove();
      }
    },
    // "fire": {
    //   value: function (email) {
    //     const key = getUserKey(email);
    //     var updates = {};
    //     updates[`/employees/${key}/children`] = true;      
    //     return firebase.database().ref().update(updates);
    //   }
    // },
    // // post
    // // need user id and new child id
    // "addChild": {
    //   value: function (userEmail, childUserName) {
    //     let userId = null;
    //     this.getUserId(userEmail).then(key => {
    //       userId = key
    //       console.log(`userId: ${userId}`)
          
    //       // Get a key for a new Post.
    //       var newPostKey = firebase.database().ref().child('users/children/').push().key;
    //       // Write the new post's data simultaneously in the posts list and the user's post list.
    //       var updates = {};
    //       updates[`/users/${userId}/children/${newPostKey}/username/`] = childUserName;
        
    //       return firebase.database().ref().update(updates);
    //     });
    //   }
    // }

  })
})