(function () {

    'use strict'
    let createBicyclePrototye = function () {

        return {
            speed: 0,
            applyBrake: function (value) {
                this.speed -= value;
            },
            speedup: function (value) {
                this.speed += value;
            }
        }
    }
    let createMountainBikeProtoype = function (prototype) {
        let bike = Object.create(prototype);
        bike.gear = 1;
        bike.setGear = function (gear) {
            this.gear = gear;
        }
        return bike;

    }

    let start = function () {
        let bicyclePrototype = createBicyclePrototye();
        let mountainBikeProtoype = createMountainBikeProtoype(bicyclePrototype);

        let tourBike = Object.create(bicyclePrototype);
        let mountainBike = Object.create(mountainBikeProtoype);


    }


})();

