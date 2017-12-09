angular
// TODO change name of app
.module("NgBoilerApp")
.factory("LoginFactory", function ($http) {
  return Object.create(null, {
    // post
    "add": {
      value: function (email) {
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('users').push().key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates[`/users/${newPostKey}/email/`] = email;
      
        return firebase.database().ref().update(updates);
      }
    }

  })
})