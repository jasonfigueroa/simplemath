app.factory("NavigationFactory", function () {
  return Object.create(null, {
    logout: {
        value: () => firebase.auth().signOut()
    }
  });
});