var app = angular.module("NgBoilerApp", ["ngRoute", "ngSanitize"])

// TODO change NgBoilerApp to app name
app.config(function ($routeProvider) {
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
    .when('/practice/place-value-1', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-1',
        controller: 'PlaceValueProblem1Ctrl'
    })
    .when('/practice/place-value-2', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-2',
        controller: 'PlaceValueProblem2Ctrl'
    })
    .when('/practice/place-value-3', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-3',
        controller: 'PlaceValueProblem3Ctrl'
    })
    .when('/practice/place-value-4', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-4',
        controller: 'PlaceValueProblem4Ctrl'
    })
    .when('/practice/place-value-5', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-5',
        controller: 'PlaceValueProblem5Ctrl'
    })
    .when('/practice/place-value-6', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-6',
        controller: 'PlaceValueProblem6Ctrl'
    })
    .when('/practice/place-value-7', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-7',
        controller: 'PlaceValueProblem7Ctrl'
    })
    .when('/practice/place-value-8', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-8',
        controller: 'PlaceValueProblem8Ctrl'
    })
    .when('/practice/place-value-9', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-9',
        controller: 'PlaceValueProblem9Ctrl'
    })
    .when('/practice/place-value-10', {
        templateUrl: 'app/practice/place-values/partials/place-value-problem-10',
        controller: 'PlaceValueProblem10Ctrl'
    })
    .when('/practice/place-values-complete', {
        templateUrl: 'app/practice/place-values/partials/place-values-complete',
        controller: 'PlaceValuesCompleteCtrl'
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
});