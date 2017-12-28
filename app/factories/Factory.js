app.factory("Factory", function () {
  return Object.create(null, {
    logout: {
        value: () => firebase.auth().signOut()
    },
    "getUserId": {
      value: function (email) {
        return firebase.database().ref('/users/').once('value').then(function(snapshot) {
          const data = snapshot.val();
          let userId = null;

          for(key in data) {
            if(data[key].email === email) {
              userId = key;
            }
          }
          return userId;
        });
      }
    },
    "getActiveChildObj": {
      value: function(userId) {
        return firebase.database().ref(`/users/${userId}/children`).once('value').then(function(snapshot) {
          const data = snapshot.val();
          let activeChildObj = null;
          for(key in data) {
            if(data[key].active) {
              activeChildObj = data[key];
            }
          }
          return activeChildObj;
        });
      }
    },
    "getActiveChildId": {
      value: function(userId) {
        return firebase.database().ref(`/users/${userId}/children`).once('value').then(function(snapshot) {
          const data = snapshot.val();
          let activeChildId = null;
          for(key in data) {
            if(data[key].active) {
              activeChildId = key;
            }
          }
          return activeChildId;
        });
      }
    },
    "getActiveChildUsername": {
      value: function(userId, childId) {
        return firebase.database().ref(`/users/${userId}/children/${childId}`).once('value').then(function(snapshot) {
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
  });
});