'use strict';

myapp.service('SwapiService', ($http, $stateParams) => {
	this.planets = [];

	this.getPlanets = () => {
		return $http.get("http://swapi.co/api/planets/?format=json");
	}

	this.parsePlanets = res => {
		planets = res.data.results.map(planet => {
			planet.residents = planet.residents.map(resident => {
				var resident = { url: resident };
				resident.id = resident.url.match(/\d+/)[0];
				return resident;
			});
			return planet;
		});
	}

	this.getResidents = () => {
		return $http.get("http://swapi.co/api/people/" + $stateParams.id + "/?format=json");
	}






})