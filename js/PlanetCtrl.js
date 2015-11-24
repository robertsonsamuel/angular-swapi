'use strict';

// var myapp = angular.module('myapp', [])

myapp.controller("PlanetCtrl", ($scope, SwapiService) => {


  $scope.planets = () => {
	console.log('check');
    SwapiService.getPlanets()
    .then(res => {
    	console.log(res)
      // SwapiService.parsePlanets();
    }).catch(error => console.error(error.status));
  }

});