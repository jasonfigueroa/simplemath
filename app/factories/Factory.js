angular.module('simpleMath')
  .factory("Factory", function () {
    return Object.create(null, {
      logout: {
        value: () => firebase.auth().signOut()
      },
      "getUserId": {
        value: function (email) {
          return firebase.database().ref('/users/').once('value').then(function (snapshot) {
            const data = snapshot.val();
            let userId = null;

            for (key in data) {
              if (data[key].email === email) {
                userId = key;
              }
            }
            return userId;
          });
        }
      },
      "getActiveChildObj": {
        value: function (userId) {
          return firebase.database().ref(`/users/${userId}/children`).once('value').then(function (snapshot) {
            const data = snapshot.val();
            let activeChildObj = null;
            for (key in data) {
              if (data[key].active) {
                activeChildObj = data[key];
              }
            }
            return activeChildObj;
          });
        }
      },
      "getActiveChildId": {
        value: function (userId) {
          return firebase.database().ref(`/users/${userId}/children`).once('value').then(function (snapshot) {
            const data = snapshot.val();
            let activeChildId = null;
            for (key in data) {
              if (data[key].active) {
                activeChildId = key;
              }
            }
            return activeChildId;
          });
        }
      },
      "getActiveChildUsername": {
        value: function (userId, childId) {
          return firebase.database().ref(`/users/${userId}/children/${childId}`).once('value').then(function (snapshot) {
            const data = snapshot.val();
            // let activeChildObj = null;
            // for(key in data) {
            //   if(data[key].active) {
            //     activeChildId = key;
            //   }
            // }
            return data.username;
          });
        }
      },
      "getConceptId": {
        value: function (conceptName) {
          return firebase.database().ref('/concepts/').once('value').then(function (snapshot) {
            const data = snapshot.val();
            let conceptId = null;
            for (key in data) {
              if (data[key].title === conceptName) {
                conceptId = key;
                console.log(data[key]);
                // console.log(`${}`)
                // console.log(`${}`)
              }
            }
            return conceptId;
          });
        }
      },
      // addConceptToChildConcepts($rootScope.activeChildId, $rootScope.activeConceptId)
      "addConceptToChildConcepts": {
        // value: function(activeChildId, activeConceptId) {
        value: function (childConceptObj) {
          console.log(childConceptObj);
          // Get a key for a new Post.
          var newPostKey = firebase.database().ref().child('childConcepts/').push().key;
          // Write the new post's data simultaneously in the posts list and the user's post list.
          var updates = {};
          updates[`childConcepts/${newPostKey}`] = childConceptObj;
          // updates[`childConcepts/${newPostKey}/conceptId`] = activeConceptId;

          return firebase.database().ref().update(updates);
        }
      }
    });
  });