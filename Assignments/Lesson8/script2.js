(function () {
    'use strict'

    function extend(Child, Parent) {
        Child.prototype = Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
    }

    function Bike() {
        this.speed = 0;
    }

    Bike.prototype.applyBrake = function (value) {
        this.speed -= value;
    };
    Bike.prototype.speedup = function (value) {
        this.speed += value;
    };


    function MountainBike() {

        this.gear = 1;
    }

    extend(MountainBike, Bike);

    MountainBike.prototype.setGear = function (gear) {
        this.gear = gear;
    };

    let start = function () {
        let tourBike = new Bike();
        let MountainBike = new MountainBike();
        console.log()
    }

start();

})();