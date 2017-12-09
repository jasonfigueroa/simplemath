angular
// TODO change name of app
.module("NgBoilerApp")
// TODO change name of factory
.factory("EmployeeFactory", function ($http) {
  return Object.create(null, {
    "cache": {
      value: null,
      writable: true
    },
    // read
    "list": {
      value: function () {
        return firebase.database().ref('/employees/').once('value').then(function(snapshot) {
          const data = snapshot.val();

          // converting returned object to array and storing it in cache
          this.cache = Object.keys(data).map(key => {
            data[key].id = key
            return data[key]
          });

          return this.cache
          
        });
      }
    },
    // delete
    "remove": {
      value: function (key) {
        return firebase.database().ref('employees').child(key).remove();
      }
    },
    // update
    "fire": {
      value: function (key) {
        var updates = {};
        updates[`/employees/${key}/fired`] = true;      
        return firebase.database().ref().update(updates);
      }
    },
    // post
    "add": {
      value: function (employee) {
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('posts').push().key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/employees/' + newPostKey] = employee;
      
        return firebase.database().ref().update(updates);
      }
    }

  })
})