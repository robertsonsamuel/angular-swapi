'use strict';

myapp.controller("ResidentCtrl", function($scope, $http, $stateParams) { //when I bring in SwapiService in this function, I get the error message
  $http.get("http://swapi.co/api/people/" + $stateParams.id + "/?format=json").then(resp => {
    $scope.character = resp.data;
  });
})
