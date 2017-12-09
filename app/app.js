angular.module("NgBoilerApp", ["ngRoute"])

// TODO change NgBoilerApp to app name
angular.module("NgBoilerApp").config(function ($routeProvider) {
  $routeProvider
    // TODO change routes accordingly
    .when("/", {
        templateUrl: "app/login/partials/login.html",
        controller: "LoginCtrl"
    })
    .when('/dash', {
        templateUrl: "app/dash/partials/dash.html",
        controller: "DashCtrl"
    })
    .when('/dash/add-child', {
        templateUrl: "app/dash/partials/add-child.html",
        controller: "AddChildCtrl"
    })
    .when('/dash/view-children', {
        templateUrl: 'app/dash/partials/view-children.html',
        controller: 'ViewChildrenCtrl'
    })
    // .when("/employees/new", {
    //     templateUrl: "app/employees/partials/create.html",
    //     controller: "EmployeeCreateCtrl"
    // })
    // default route
    .otherwise({redirectTo: '/'});
})