angular.module('simpleMath').controller("ViewChildrenCtrl", function ($scope, $rootScope, ViewChildrenFactory) {
  let userId = null;
  $scope.childrenList = null;
  
  // new variables
  $scope.conceptsList = null;
  $scope.categoriesList = null;
  $scope.childConceptsList = null;
  
  $scope.removeChild = (child) => {
    console.log('in remove child');
    console.log(`child.id: ${child.id}`);
    console.log(`$rootScope.activeChildId: ${$rootScope.activeChildId}`);
    // if(child.id === $rootScope.activeChildId) {
    //   console.log('in if child.id === $rootScope.activeChildId');
    //   $scope.$apply(() => {
    //     $rootScope.activeChildId = '';
    //   });
    // }
    ViewChildrenFactory.removeChild(userId, child.id).then(() => {
      console.log('in removeChild.then')
      ViewChildrenFactory.listChildren(userId).then(childrenArray => {
        $scope.$apply(() => {
          if(child.id === $rootScope.activeChildId) {
            console.log('in if child.id === $rootScope.activeChildId');
            $rootScope.activeChildId = null;
          }
          $scope.childrenList = childrenArray;
        });
      });
    });
  };

  // add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      ViewChildrenFactory.getUserId(firebaseUser.email).then(key => {
        userId = key;
        ViewChildrenFactory.listChildren(userId).then(childrenArray => {
          ViewChildrenFactory.getConcepts().then(conceptsArray => {
            ViewChildrenFactory.getCategories().then(categoriesArray => {
              ViewChildrenFactory.getChildConcepts().then(childConceptsArray => {
                $scope.$apply(() => {
                  $scope.conceptsList = conceptsArray;
                  console.log(conceptsArray);

                  $scope.categoriesList = categoriesArray;
                  console.log(categoriesArray);
                  
                  $scope.childConceptsList = childConceptsArray;
                  console.log(childConceptsArray);

                  $scope.childrenList = childrenArray;
                  console.log($scope.childrenList);
                  
                  // assemble master object
                  $scope.childrenList.forEach(child => {
                    
                    child.completedConcepts = {};
                    child.completedConcepts.placevalue = [];
                    child.completedConcepts.additionandsubtraction = [];

                    $scope.childConceptsList.forEach(childConcept => {
                      if(child.id === childConcept.childId) {
                        $scope.conceptsList.forEach(concept => {
                          if(childConcept.conceptId === concept.id) {
                            $scope.categoriesList.forEach(category => {
                              if(concept.category_id === category.id) {
                                // let keyName = category.name.toLowerCase().replace(' ', '');
                                let keyName = category.name.toLowerCase().split(' ').join('');
                                child.completedConcepts[keyName].push({'conceptId': concept.id, 'conceptTitle': concept.title});
                              }
                            });
                          }
                        });
                      }
                    });
                  });
                  console.log($scope.childrenList);
                });            

              });
            });
          });
        });
      });
      console.log('logged in');
      // console.log(`list in realtime listener: ${$scope.childrenList}`);
    } else {
      // TODO add redirect here
      console.log('not logged in');      
    }
  });
});