angular.module('simpleMath')
  .factory("ConceptSubmissionFactory", function ($http) {
    return Object.create(null, {
      "cache": {
        value: null,
        writable: true
      },
      // if going to use listConcepts you'll have to scub the code as it was copy and pasted in

      // "listConcepts": {
      //   value: function () {
      //     return firebase.database().ref(`categories`).once('value').then(function(snapshot) {
      //       const data = snapshot.val();
      //       this.cache = Object.keys(data).map(key => {
      //         data[key].id = key
      //         return data[key]
      //       });
      //       return this.cache
      //     });
      //   }
      // },
      "addConcept": {
        value: function (conceptObj) {
          // Get a key for a new Post.
          var newPostKey = firebase.database().ref().child('concepts/').push().key;
          // Write the new post's data simultaneously in the posts list and the user's post list.
          var updates = {};
          updates[`concepts/${newPostKey}`] = conceptObj;

          return firebase.database().ref().update(updates);
        }
      },
    })
  })