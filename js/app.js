
angular.module("myApp", [])
		.controller("MyController", function() {
			var vm = this;
			vm.name = "name";
			vm.jobTitle = "job title";
			vm.tediousTask = "tedious task";
			vm.dirtyTask = "dirty task";
			vm.celebrity = "celebrity";
			vm.uselessSkill = "useless skill";
			vm.adjective = "adjective";
			vm.obnoxiousCelebrity = "obnoxious celebrity";
			vm.hugeNumber = 10000;

	// select gender	
		vm.gender = "";
		vm.assignGender = function(gender) {
			vm.gender = gender;
		};

	// on form submit, do vm
		vm.showTextSection = false;

		vm.displayMadLib = function () {
			vm.showTextSection = true;
		};
});