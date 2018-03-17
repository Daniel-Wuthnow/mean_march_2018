class Bike{
    constructor(
        public price: Number,
        public max_speed: Number,
        public miles: number = 0
    ) { }

    displayInfo() {
        console.log(`Price ${this.price}, max speed ${this.max_speed}, miles ${this.miles}`)
        return this
    }

    ride() {
        console.log("Riding")
        var miles = miles + 10;
        return this
    }

    reverse() {
        console.log("Reversing")
        if (miles <= 5) {
            miles = 0;
            console.log("cant reverse no more")
        } else {
            var miles = miles -5
        }
        return this
    }
}

var bike1 = new Bike(10, 70);
var bike2 = new Bike(20, 60);
var bike3 = new Bike(30, 50);
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();