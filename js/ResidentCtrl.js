'use strict';

myapp.controller("ResidentCtrl", ($scope, SwapiService) => {
	$scope.getResidents = () => {
	  SwapiService.getResidents()
	  .then(resp => {
	  	console.log(resp);
	    // $scope.character = resp.data;
	  });
		
	}
})
