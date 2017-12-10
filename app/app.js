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
    .when('/dash/select-child', {
        templateUrl: 'app/practice/partials/select-child',
        controller: 'SelectChildCtrl'
    })
    .when('/practice/child-dash', {
        templateUrl: 'app/practice/partials/child-dash',
        controller: 'ChildDashCtrl'
    })
    .when('/practice/problems/add', {
        templateUrl: 'app/practice/problems/partials/problem-submission',
        controller: 'ProblemSubmissionCtrl'
    })
    // NOTE: uncomment the following to add a new category for problems
    // .when('/practice/problems/category/add', {
    //     templateUrl: 'app/practice/problems/partials/category-submission',
    //     controller: 'CategorySubmissionCtrl'
    // })

    // TODO the following is old code
    // .when("/employees/new", {
    //     templateUrl: "app/employees/partials/create.html",
    //     controller: "EmployeeCreateCtrl"
    // })
    // TODO the following is old code
    // default route
    .otherwise({redirectTo: '/'});
})