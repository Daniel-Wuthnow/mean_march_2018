
function ninja(name) {

	const ninja = {};

	this.name = name;
	this.health = 100;


	ninja.sayName = function() {
		console.log("Hello my name is " + name);
	}

	ninja.showStats = function () {
		console.log("Name: " + name + ", Health: " + health)
	}



	return ninja;
}

const steve = ninja("steve")
steve.showStats()
