(function () {
  'use strict';

  angular.module('simpleMath', [
    'ui.bootstrap',
    'ngSanitize',
    'toaster',
    'ngAnimate',
    'ngRoute',
    'core',
    
    // Components
    'login',
    'dash',
    'viewChildren',
  ]);
})();