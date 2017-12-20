app.controller("ConceptSubmissionCtrl", function ($scope, ConceptSubmissionFactory) {
  $scope.concept = {
    title: '',
    category_id: '',
    // description: null
  };

  $scope.addConcept = () => {
    console.log('in addConcept');
    if($scope.concept.title && $scope.concept.category_id) {
      console.log('in if');
      ConceptSubmissionFactory.addConcept($scope.concept);
    }
  };
});