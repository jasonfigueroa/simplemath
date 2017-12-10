angular
// TODO change name of app
.module("NgBoilerApp")
// TODO change name of factory
.factory("CategorySubmissionFactory", function ($http) {
  return Object.create(null, {
    "cache": {
      value: null,
      writable: true
    },
    "listCategories": {
      value: function () {
        return firebase.database().ref(`categories`).once('value').then(function(snapshot) {
          const data = snapshot.val();
          this.cache = Object.keys(data).map(key => {
            data[key].id = key
            return data[key]
          });
          return this.cache
        });
      }
    },
    "addCategory": {
      value: function (categoryObj) {
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('categories/').push().key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates[`categories/${newPostKey}`] = categoryObj;
      
        return firebase.database().ref().update(updates);      
      }
    },
  })
})