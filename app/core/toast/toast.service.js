(function () {
  'use strict';

  angular
    .module('core.toast')
    .factory('toastService', toastService);

  toastService.$inject = ['toaster'];
  
  function toastService(toaster) {
    return {
      success: success,
      error: error
    };

    function success() {
      toaster.pop('success', 'Correct', 'Awesome Job!', 2000);  
    }

    function error() {
      toaster.pop('error', 'Incorrect', 'Sorry, please try agin.', 2000);
    }
  }
})();