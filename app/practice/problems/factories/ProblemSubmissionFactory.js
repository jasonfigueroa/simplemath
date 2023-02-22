angular.module('simpleMath')
  .factory("ProblemSubmissionFactory", function ($http) {
    return Object.create(null, {
      "cache": {
        value: null,
        writable: true
      },
      "addProblem": {
        value: function (problemObj) {
          // Get a key for a new Post.
          var newPostKey = firebase.database().ref().child('problems').push().key;
          // Write the new post's data simultaneously in the posts list and the user's post list.
          var updates = {};
          updates[`problems/${newPostKey}`] = problemObj;

          return firebase.database().ref().update(updates);
        }
      },
    })
  })