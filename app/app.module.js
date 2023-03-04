(function () {
  'use strict';

  angular.module('simpleMath', [
    'ui.bootstrap',
    'ngSanitize',
    'toaster',
    'ngAnimate',
    'ngRoute',
    
    // Services
    'core',
    
    // Components
    'login',
    'dash',
    'viewChildren',
    'addChild',
    'selectChild',
    'childDash',
    'placeValue',
  ]);
})();