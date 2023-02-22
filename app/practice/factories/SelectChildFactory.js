angular.module('simpleMath')
  .factory("SelectChildFactory", function ($http) {
    return Object.create(null, {
      "cache": {
        value: null,
        writable: true
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
      "listChildren": {
        value: function (userId) {
          return firebase.database().ref(`/users/${userId}/children`).once('value').then(function (snapshot) {
            const data = snapshot.val();
            if (!data) {
              this.cache = null;
            } else {
              this.cache = Object.keys(data).map(key => {
                data[key].id = key
                return data[key]
              });
            }
            return this.cache
          });
        }
      },
      "selectChild": {
        value: function (userId, childId) {
          var updates = {};
          updates[`/users/${userId}/children/${childId}/active`] = true;
          return firebase.database().ref().update(updates);
        }
      },
      "deactivate": {
        value: function (userId, childId) {
          var updates = {};
          updates[`/users/${userId}/children/${childId}/active`] = false;
          return firebase.database().ref().update(updates);
        }
      },
      // "getActiveChild": {
      //   value: function (userId) {

      //   }
      // }
      // "removeChild": {
      //   value: function (userId, childId) {
      //     console.log('test')
      //     return firebase.database().ref(`/users/${userId}/children`).child(childId).remove();
      //   }
      // },
    })
  })