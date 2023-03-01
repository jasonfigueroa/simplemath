(function () {
  'use strict';

  angular
    .module('simpleMath')
    .config(configure);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider
      .when('/login', {
        template: '<login></login>'
      })
      .when('/dash', {
        template: '<dash></dash>'
      })
      .when('/dash/add-child', {
        template: '<add-child></add-child>'
      })
      .when('/dash/view-children', {
        template: '<view-children></view-children>'
      })
      .when('/dash/select-child', {
        template: '<select-child></select-child>'
      })
      .when('/child-dash', {
        template: '<child-dash></child-dash>'
      })
      .when('/practice/problems/add', {
        templateUrl: 'practice/problems/partials/problem-submission.html',
        controller: 'ProblemSubmissionCtrl'
      })
      .when('/practice/place-value-1', {
        templateUrl: 'practice/place-values/partials/place-value-problem-1.html',
        controller: 'PlaceValueProblem1Ctrl'
      })
      .when('/practice/place-value-2', {
        templateUrl: 'practice/place-values/partials/place-value-problem-2.html',
        controller: 'PlaceValueProblem2Ctrl'
      })
      .when('/practice/place-value-3', {
        templateUrl: 'practice/place-values/partials/place-value-problem-3.html',
        controller: 'PlaceValueProblem3Ctrl'
      })
      .when('/practice/place-value-4', {
        templateUrl: 'practice/place-values/partials/place-value-problem-4.html',
        controller: 'PlaceValueProblem4Ctrl'
      })
      .when('/practice/place-value-5', {
        templateUrl: 'practice/place-values/partials/place-value-problem-5.html',
        controller: 'PlaceValueProblem5Ctrl'
      })
      .when('/practice/place-value-6', {
        templateUrl: 'practice/place-values/partials/place-value-problem-6.html',
        controller: 'PlaceValueProblem6Ctrl'
      })
      .when('/practice/place-value-7', {
        templateUrl: 'practice/place-values/partials/place-value-problem-7.html',
        controller: 'PlaceValueProblem7Ctrl'
      })
      .when('/practice/place-value-8', {
        templateUrl: 'practice/place-values/partials/place-value-problem-8.html',
        controller: 'PlaceValueProblem8Ctrl'
      })
      .when('/practice/place-value-9', {
        templateUrl: 'practice/place-values/partials/place-value-problem-9.html',
        controller: 'PlaceValueProblem9Ctrl'
      })
      .when('/practice/place-value-10', {
        templateUrl: 'practice/place-values/partials/place-value-problem-10.html',
        controller: 'PlaceValueProblem10Ctrl'
      })
      .when('/practice/place-values-complete', {
        templateUrl: 'practice/place-values/partials/place-values-complete.html',
        controller: 'PlaceValuesCompleteCtrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-1', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-1.html',
        controller: 'GroupsOfTen1Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-2', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-2.html',
        controller: 'GroupsOfTen2Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-3', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-3.html',
        controller: 'GroupsOfTen3Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-4', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-4.html',
        controller: 'GroupsOfTen4Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-5', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-5.html',
        controller: 'GroupsOfTen5Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-6', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-6.html',
        controller: 'GroupsOfTen6Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-7', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-7.html',
        controller: 'GroupsOfTen7Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-8', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-8.html',
        controller: 'GroupsOfTen8Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-9', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-9.html',
        controller: 'GroupsOfTen9Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-10', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-10.html',
        controller: 'GroupsOfTen10Ctrl'
      })
      .when('/practice/place-values/groups-of-ten/groups-of-ten-complete', {
        templateUrl: 'practice/place-values/groups-of-ten/partials/groups-of-ten-complete.html',
        controller: 'GroupsOfTenCompleteCtrl'
      })
      .when('/practice/place-values/tens-and-ones/tens-and-ones-1', {
        templateUrl: 'practice/place-values/tens-and-ones/partials/tens-and-ones-1.html',
        controller: 'TensAndOnes1Ctrl'
      })
      .when('/practice/place-values/tens-and-ones/tens-and-ones-2', {
        templateUrl: 'practice/place-values/tens-and-ones/partials/tens-and-ones-2.html',
        controller: 'TensAndOnes2Ctrl'
      })
      .when('/practice/place-values/tens-and-ones/tens-and-ones-3', {
        templateUrl: 'practice/place-values/tens-and-ones/partials/tens-and-ones-3.html',
        controller: 'TensAndOnes3Ctrl'
      })
      .when('/practice/place-values/tens-and-ones/tens-and-ones-4', {
        templateUrl: 'practice/place-values/tens-and-ones/partials/tens-and-ones-4.html',
        controller: 'TensAndOnes4Ctrl'
      })
      .when('/practice/place-values/tens-and-ones/tens-and-ones-5', {
        templateUrl: 'practice/place-values/tens-and-ones/partials/tens-and-ones-5.html',
        controller: 'TensAndOnes5Ctrl'
      })
      .when('/practice/place-values/tens-and-ones/tens-and-ones-6', {
        templateUrl: 'practice/place-values/tens-and-ones/partials/tens-and-ones-6.html',
        controller: 'TensAndOnes6Ctrl'
      })
      .when('/practice/place-values/tens-and-ones/tens-and-ones-7', {
        templateUrl: 'practice/place-values/tens-and-ones/partials/tens-and-ones-7.html',
        controller: 'TensAndOnes7Ctrl'
      })
      .when('/practice/place-values/tens-and-ones/tens-and-ones-8', {
        templateUrl: 'practice/place-values/tens-and-ones/partials/tens-and-ones-8.html',
        controller: 'TensAndOnes8Ctrl'
      })
      .when('/practice/place-values/tens-and-ones/tens-and-ones-complete', {
        templateUrl: 'practice/place-values/tens-and-ones/partials/tens-and-ones-complete.html',
        controller: 'TensAndOnesCompleteCtrl'
      })
      .when('/practice/place-values/two-digit-place-value/two-digit-place-value-1', {
        templateUrl: 'practice/place-values/two-digit-place-value/partials/two-digit-place-value-1.html',
        controller: 'TwoDigitPlaceValue1Ctrl'
      })
      .when('/practice/place-values/two-digit-place-value/two-digit-place-value-2', {
        templateUrl: 'practice/place-values/two-digit-place-value/partials/two-digit-place-value-2.html',
        controller: 'TwoDigitPlaceValue2Ctrl'
      })
      .when('/practice/place-values/two-digit-place-value/two-digit-place-value-3', {
        templateUrl: 'practice/place-values/two-digit-place-value/partials/two-digit-place-value-3.html',
        controller: 'TwoDigitPlaceValue3Ctrl'
      })
      .when('/practice/place-values/two-digit-place-value/two-digit-place-value-4', {
        templateUrl: 'practice/place-values/two-digit-place-value/partials/two-digit-place-value-4.html',
        controller: 'TwoDigitPlaceValue4Ctrl'
      })
      .when('/practice/place-values/two-digit-place-value/two-digit-place-value-5', {
        templateUrl: 'practice/place-values/two-digit-place-value/partials/two-digit-place-value-5.html',
        controller: 'TwoDigitPlaceValue5Ctrl'
      })
      .when('/practice/place-values/two-digit-place-value/two-digit-place-value-6', {
        templateUrl: 'practice/place-values/two-digit-place-value/partials/two-digit-place-value-6.html',
        controller: 'TwoDigitPlaceValue6Ctrl'
      })
      .when('/practice/place-values/two-digit-place-value/two-digit-place-value-7', {
        templateUrl: 'practice/place-values/two-digit-place-value/partials/two-digit-place-value-7.html',
        controller: 'TwoDigitPlaceValue7Ctrl'
      })
      .when('/practice/place-values/two-digit-place-value/two-digit-place-value-8', {
        templateUrl: 'practice/place-values/two-digit-place-value/partials/two-digit-place-value-8.html',
        controller: 'TwoDigitPlaceValue8Ctrl'
      })
      .when('/practice/place-values/two-digit-place-value/two-digit-place-value-complete', {
        templateUrl: 'practice/place-values/two-digit-place-value/partials/two-digit-place-value-complete.html',
        controller: 'TwoDigitPlaceValueCompleteCtrl'
      })
      .when('/practice/place-values/two-digit-comparison/two-digit-comparison-1', {
        templateUrl: 'practice/place-values/two-digit-comparison/partials/two-digit-comparison-1.html',
        controller: 'TwoDigitComparison1Ctrl'
      })
      .when('/practice/place-values/two-digit-comparison/two-digit-comparison-2', {
        templateUrl: 'practice/place-values/two-digit-comparison/partials/two-digit-comparison-2.html',
        controller: 'TwoDigitComparison2Ctrl'
      })
      .when('/practice/place-values/two-digit-comparison/two-digit-comparison-3', {
        templateUrl: 'practice/place-values/two-digit-comparison/partials/two-digit-comparison-3.html',
        controller: 'TwoDigitComparison3Ctrl'
      })
      .when('/practice/place-values/two-digit-comparison/two-digit-comparison-4', {
        templateUrl: 'practice/place-values/two-digit-comparison/partials/two-digit-comparison-4.html',
        controller: 'TwoDigitComparison4Ctrl'
      })
      .when('/practice/place-values/two-digit-comparison/two-digit-comparison-5', {
        templateUrl: 'practice/place-values/two-digit-comparison/partials/two-digit-comparison-5.html',
        controller: 'TwoDigitComparison5Ctrl'
      })
      .when('/practice/place-values/two-digit-comparison/two-digit-comparison-6', {
        templateUrl: 'practice/place-values/two-digit-comparison/partials/two-digit-comparison-6.html',
        controller: 'TwoDigitComparison6Ctrl'
      })
      .when('/practice/place-values/two-digit-comparison/two-digit-comparison-7', {
        templateUrl: 'practice/place-values/two-digit-comparison/partials/two-digit-comparison-7.html',
        controller: 'TwoDigitComparison7Ctrl'
      })
      .when('/practice/place-values/two-digit-comparison/two-digit-comparison-8', {
        templateUrl: 'practice/place-values/two-digit-comparison/partials/two-digit-comparison-8.html',
        controller: 'TwoDigitComparison8Ctrl'
      })
      .when('/practice/place-values/two-digit-comparison/two-digit-comparison-complete', {
        templateUrl: 'practice/place-values/two-digit-comparison/partials/two-digit-comparison-complete.html',
        controller: 'TwoDigitComparisonCompleteCtrl'
      })
      // adding within twenty
      .when('/practice/addition-subtraction/adding-within-twenty', {
        templateUrl: 'practice/addition-subtraction/adding-within-twenty/partials/adding-within-twenty.html',
        controller: 'AddingWithinTwentyCtrl'
      })
      // add three numbers
      .when('/practice/addition-subtraction/add-three-numbers', {
        templateUrl: 'practice/addition-subtraction/add-three-numbers/partials/add-three-numbers.html',
        controller: 'AddThreeNumbersCtrl'
      })
      // subtract within twenty
      .when('/practice/addition-subtraction/subtract-within-twenty', {
        templateUrl: 'practice/addition-subtraction/subtract-within-twenty/partials/subtract-within-twenty.html',
        controller: 'SubtractWithinTwentyCtrl'
      })
      // equality
      .when('/practice/addition-subtraction/equality', {
        templateUrl: 'practice/addition-subtraction/equality/partials/equality.html',
        controller: 'EqualityCtrl'
      })
      .otherwise('/dash')
  }
})();