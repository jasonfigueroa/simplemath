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
    .when('/practice/place-values/two-digit-comparison/two-digit-comparison-1', {
        templateUrl: 'app/practice/place-values/two-digit-comparison/partials/two-digit-comparison-1',
        controller: 'TwoDigitComparison1Ctrl'
    })
    .when('/practice/place-values/two-digit-comparison/two-digit-comparison-2', {
        templateUrl: 'app/practice/place-values/two-digit-comparison/partials/two-digit-comparison-2',
        controller: 'TwoDigitComparison2Ctrl'
    })
    .when('/practice/place-values/two-digit-comparison/two-digit-comparison-3', {
        templateUrl: 'app/practice/place-values/two-digit-comparison/partials/two-digit-comparison-3',
        controller: 'TwoDigitComparison3Ctrl'
    })
    .when('/practice/place-values/two-digit-comparison/two-digit-comparison-4', {
        templateUrl: 'app/practice/place-values/two-digit-comparison/partials/two-digit-comparison-4',
        controller: 'TwoDigitComparison4Ctrl'
    })
    .when('/practice/place-values/two-digit-comparison/two-digit-comparison-5', {
        templateUrl: 'app/practice/place-values/two-digit-comparison/partials/two-digit-comparison-5',
        controller: 'TwoDigitComparison5Ctrl'
    })
    .when('/practice/place-values/two-digit-comparison/two-digit-comparison-6', {
        templateUrl: 'app/practice/place-values/two-digit-comparison/partials/two-digit-comparison-6',
        controller: 'TwoDigitComparison6Ctrl'
    })
    .when('/practice/place-values/two-digit-comparison/two-digit-comparison-7', {
        templateUrl: 'app/practice/place-values/two-digit-comparison/partials/two-digit-comparison-7',
        controller: 'TwoDigitComparison7Ctrl'
    })
    .when('/practice/place-values/two-digit-comparison/two-digit-comparison-8', {
        templateUrl: 'app/practice/place-values/two-digit-comparison/partials/two-digit-comparison-8',
        controller: 'TwoDigitComparison8Ctrl'
    })
    .when('/practice/place-values/two-digit-comparison/two-digit-comparison-complete', {
        templateUrl: 'app/practice/place-values/two-digit-comparison/partials/two-digit-comparison-complete',
        controller: 'TwoDigitComparisonCompleteCtrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-1', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-1',
        controller: 'AddingWithinTwenty1Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-2', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-2',
        controller: 'AddingWithinTwenty2Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-3', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-3',
        controller: 'AddingWithinTwenty3Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-4', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-4',
        controller: 'AddingWithinTwenty4Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-5', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-5',
        controller: 'AddingWithinTwenty5Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-6', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-6',
        controller: 'AddingWithinTwenty6Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-7', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-7',
        controller: 'AddingWithinTwenty7Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-8', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-8',
        controller: 'AddingWithinTwenty8Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-9', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-9',
        controller: 'AddingWithinTwenty9Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-10', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-10',
        controller: 'AddingWithinTwenty10Ctrl'
    })
    .when('/practice/addition-subtraction/adding-within-twenty/adding-within-twenty-complete', {
        templateUrl: 'app/practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty-complete',
        controller: 'AddingWithinTwentyCompleteCtrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-1', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-1',
        controller: 'AddThreeNumbers1Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-2', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-2',
        controller: 'AddThreeNumbers2Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-3', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-3',
        controller: 'AddThreeNumbers3Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-4', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-4',
        controller: 'AddThreeNumbers4Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-5', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-5',
        controller: 'AddThreeNumbers5Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-6', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-6',
        controller: 'AddThreeNumbers6Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-7', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-7',
        controller: 'AddThreeNumbers7Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-8', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-8',
        controller: 'AddThreeNumbers8Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-9', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-9',
        controller: 'AddThreeNumbers9Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-10', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-10',
        controller: 'AddThreeNumbers10Ctrl'
    })
    .when('/practice/addition-subtraction/add-three-numbers/add-three-numbers-complete', {
        templateUrl: 'app/practice/addition-subtraction/add-three-numbers/partials/add-three-numbers-complete',
        controller: 'AddThreeNumbersCompleteCtrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-1', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-1',
        controller: 'SubtractWithinTwenty1Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-2', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-2',
        controller: 'SubtractWithinTwenty2Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-3', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-3',
        controller: 'SubtractWithinTwenty3Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-4', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-4',
        controller: 'SubtractWithinTwenty4Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-5', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-5',
        controller: 'SubtractWithinTwenty5Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-6', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-6',
        controller: 'SubtractWithinTwenty6Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-7', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-7',
        controller: 'SubtractWithinTwenty7Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-8', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-8',
        controller: 'SubtractWithinTwenty8Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-9', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-9',
        controller: 'SubtractWithinTwenty9Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-10', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-10',
        controller: 'SubtractWithinTwenty10Ctrl'
    })
    .when('/practice/addition-subtraction/subtract-within-twenty/subtract-within-twenty-complete', {
        templateUrl: 'app/practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty-complete',
        controller: 'SubtractWithinTwentyCompleteCtrl'
    })
    .when('/practice/addition-subtraction/equality/equality-1', {
        templateUrl: 'app/practice/addition-subtraction/equality/partials/equality-1',
        controller: 'Equality1Ctrl'
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