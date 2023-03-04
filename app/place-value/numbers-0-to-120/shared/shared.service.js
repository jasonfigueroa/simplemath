(function () {
  'use strict';

  angular
    .module('placeValue.numbers0To120.shared')
    .factory('sharedService', sharedService);

  sharedService.$inject = ['$location'];

  function sharedService($location) {
    return {
      nextQuestion: nextQuestion
    };

    function nextQuestion() {
      const urlSegments = $location.path().split('/');
      const currentId = urlSegments[urlSegments.length - 1];
      const nextId = Number(currentId) + 1;

      $location.url(`practice/place-value/numbers-0-to-120/${nextId}`);
    };
  }
})();