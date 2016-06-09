var app = angular.module("myApp", []);
		app.controller("MyController", function() {
			this.name = "name";
			this.jobTitle = "job title";
			this.tediousTask = "tedious task";
			this.dirtyTask = "dirty task";
			this.celebrity = "celebrity";
			this.uselessSkill = "useless skill";
			this.adjective = "adjective";
			this.obnoxiousCelebrity = "obnoxious celebrity";
			this.hugeNumber = 10000;


	// select gender	
		this.gender = "";
		this.assignGender = function(gender) {
			this.gender = gender;
		};


	// on form submit, do this
		this.showTextSection = false;

		this.displayMadLib = function () {
			this.showTextSection = true;
		};
});