'use strict';

var myapp = angular.module('myapp', ["ui.router"])

myapp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/planets")

  $stateProvider
  .state('planets', {
    url: "/planets",
    templateUrl: "../partials/planets.html",
    controller: "PlanetCtrl"
  })
  .state('resident', {
    url: "/resident/:id",
    templateUrl: "../partials/resident.html",
    controller: "ResidentCtrl"
  })
})

