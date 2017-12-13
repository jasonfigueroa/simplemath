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
    .when('/practice/place-values/groups-of-ten/groups-of-ten-1', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-1',
        controller: 'GroupsOfTen1Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-2', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-2',
        controller: 'GroupsOfTen2Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-3', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-3',
        controller: 'GroupsOfTen3Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-4', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-4',
        controller: 'GroupsOfTen4Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-5', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-5',
        controller: 'GroupsOfTen5Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-6', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-6',
        controller: 'GroupsOfTen6Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-7', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-7',
        controller: 'GroupsOfTen7Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-8', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-8',
        controller: 'GroupsOfTen8Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-9', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-9',
        controller: 'GroupsOfTen9Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-10', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-10',
        controller: 'GroupsOfTen10Ctrl'
    })
    .when('/practice/place-values/groups-of-ten/groups-of-ten-complete', {
        templateUrl: 'app/practice/place-values/groups-of-ten/partials/groups-of-ten-complete',
        controller: 'GroupsOfTenCompleteCtrl'
    })
    .when('/practice/place-values/tens-and-ones/tens-and-ones-1', {
        templateUrl: 'app/practice/place-values/tens-and-ones/partials/tens-and-ones-1',
        controller: 'TensAndOnes1Ctrl'
    })
    .when('/practice/place-values/tens-and-ones/tens-and-ones-2', {
        templateUrl: 'app/practice/place-values/tens-and-ones/partials/tens-and-ones-2',
        controller: 'TensAndOnes2Ctrl'
    })
    .when('/practice/place-values/tens-and-ones/tens-and-ones-3', {
        templateUrl: 'app/practice/place-values/tens-and-ones/partials/tens-and-ones-3',
        controller: 'TensAndOnes3Ctrl'
    })
    .when('/practice/place-values/tens-and-ones/tens-and-ones-4', {
        templateUrl: 'app/practice/place-values/tens-and-ones/partials/tens-and-ones-4',
        controller: 'TensAndOnes4Ctrl'
    })
    .when('/practice/place-values/tens-and-ones/tens-and-ones-5', {
        templateUrl: 'app/practice/place-values/tens-and-ones/partials/tens-and-ones-5',
        controller: 'TensAndOnes5Ctrl'
    })
    .when('/practice/place-values/tens-and-ones/tens-and-ones-6', {
        templateUrl: 'app/practice/place-values/tens-and-ones/partials/tens-and-ones-6',
        controller: 'TensAndOnes6Ctrl'
    })
    .when('/practice/place-values/tens-and-ones/tens-and-ones-7', {
        templateUrl: 'app/practice/place-values/tens-and-ones/partials/tens-and-ones-7',
        controller: 'TensAndOnes7Ctrl'
    })
    .when('/practice/place-values/tens-and-ones/tens-and-ones-8', {
        templateUrl: 'app/practice/place-values/tens-and-ones/partials/tens-and-ones-8',
        controller: 'TensAndOnes8Ctrl'
    })
    .when('/practice/place-values/tens-and-ones/tens-and-ones-complete', {
        templateUrl: 'app/practice/place-values/tens-and-ones/partials/tens-and-ones-complete',
        controller: 'TensAndOnesCompleteCtrl'
    })
    .when('/practice/place-values/two-digit-place-value/two-digit-place-value-1', {
        templateUrl: 'app/practice/place-values/two-digit-place-value/partials/two-digit-place-value-1',
        controller: 'TwoDigitPlaceValue1Ctrl'
    })
    .when('/practice/place-values/two-digit-place-value/two-digit-place-value-2', {
        templateUrl: 'app/practice/place-values/two-digit-place-value/partials/two-digit-place-value-2',
        controller: 'TwoDigitPlaceValue2Ctrl'
    })
    .when('/practice/place-values/two-digit-place-value/two-digit-place-value-3', {
        templateUrl: 'app/practice/place-values/two-digit-place-value/partials/two-digit-place-value-3',
        controller: 'TwoDigitPlaceValue3Ctrl'
    })
    .when('/practice/place-values/two-digit-place-value/two-digit-place-value-4', {
        templateUrl: 'app/practice/place-values/two-digit-place-value/partials/two-digit-place-value-4',
        controller: 'TwoDigitPlaceValue4Ctrl'
    })
    .when('/practice/place-values/two-digit-place-value/two-digit-place-value-5', {
        templateUrl: 'app/practice/place-values/two-digit-place-value/partials/two-digit-place-value-5',
        controller: 'TwoDigitPlaceValue5Ctrl'
    })
    .when('/practice/place-values/two-digit-place-value/two-digit-place-value-6', {
        templateUrl: 'app/practice/place-values/two-digit-place-value/partials/two-digit-place-value-6',
        controller: 'TwoDigitPlaceValue6Ctrl'
    })
    .when('/practice/place-values/two-digit-place-value/two-digit-place-value-7', {
        templateUrl: 'app/practice/place-values/two-digit-place-value/partials/two-digit-place-value-7',
        controller: 'TwoDigitPlaceValue7Ctrl'
    })
    .when('/practice/place-values/two-digit-place-value/two-digit-place-value-8', {
        templateUrl: 'app/practice/place-values/two-digit-place-value/partials/two-digit-place-value-8',
        controller: 'TwoDigitPlaceValue8Ctrl'
    })
    .when('/practice/place-values/two-digit-place-value/two-digit-place-value-complete', {
        templateUrl: 'app/practice/place-values/two-digit-place-value/partials/two-digit-place-value-complete',
        controller: 'TwoDigitPlaceValueCompleteCtrl'
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