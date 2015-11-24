'use strict';

myapp.service('SwapiService', function($http, $stateParams) {
	this.planets = [];

	console.log('after planets')

	this.getPlanets = () => {
		return $http.get("http://swapi.co/api/planets/?format=json");
	}

	this.parsePlanets = function(res) {
		planets = res.data.results.map(planet => {
			planet.residents = planet.residents.map(resident => {
				var resident = { url: resident };
				resident.id = resident.url.match(/\d+/)[0];
				return resident;
			});
			return planet;
		});
	}
})