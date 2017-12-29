app.factory("ViewChildrenFactory", function ($http) {
  return Object.create(null, {
    "cache": {
      value: null,
      writable: true
    },
    "conceptsCache": {
      value: null,
      writable: true
    },
    "categoriesCache": {
      value: null,
      writable: true
    },
    "childConceptsCache": {
      value: null,
      writable: true
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
    "listChildren": {
      value: function (userId) {
        return firebase.database().ref(`/users/${userId}/children`).once('value').then(function(snapshot) {
          const data = snapshot.val();
          if(data) {
            this.cache = Object.keys(data).map(key => {
              data[key].id = key
              return data[key]
            });
          } else {
            this.cache = null;
          }
          return this.cache;
        });
      }
    },
    "removeChild": {
      value: function (userId, childId) {
        console.log('test')
        return firebase.database().ref(`/users/${userId}/children`).child(childId).remove();
      }
    },
    "getConcepts": {
      value: function() {
        return firebase.database().ref(`/concepts`).once('value').then(function(snapshot) {
          const data = snapshot.val();
          if(data) {
            this.conceptsCache = Object.keys(data).map(key => {
              data[key].id = key
              return data[key]
            });
          } else {
            this.conceptsCache = null;
          }
          return this.conceptsCache;
        });
      }
    },
    "getCategories": {
      value: function() {
        return firebase.database().ref(`/categories`).once('value').then(function(snapshot) {
          const data = snapshot.val();
          if(data) {
            this.categoriesCache = Object.keys(data).map(key => {
              data[key].id = key
              return data[key]
            });
          } else {
            this.categoriesCache = null;
          }
          return this.categoriesCache;
        });
      }
    },
    "getChildConcepts": {
      value: function() {
        return firebase.database().ref(`/childConcepts`).once('value').then(function(snapshot) {
          const data = snapshot.val();
          if(data) {
            this.childConceptsCache = Object.keys(data).map(key => {
              data[key].id = key
              return data[key]
            });
          } else {
            this.childConceptsCache = null;
          }
          return this.childConceptsCache;
        });
      }
    },
  })
})