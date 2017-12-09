angular
// TODO change name of app
.module("NgBoilerApp")
.factory("NavigationFactory", function () {
  return Object.create(null, {
    logout: {
        value: () => firebase.auth().signOut()
    }
  });
});