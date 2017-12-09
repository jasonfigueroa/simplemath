// change NgBoilerApp to name of app
angular.module("NgBoilerApp").constant("FIREBASE_CONFIG", {
  apiKey: "", // TODO fill this in
  authDomain: "", // TODO fill this in
  databaseURL: "", // TODO fill this in
  projectId: "", // TODO fill this in
  storageBucket: "", // TODO fill this in
  messagingSenderId: "" // TODO fill this in
});

// change NgBoilerApp to name of app
angular.module("NgBoilerApp").run(function (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});