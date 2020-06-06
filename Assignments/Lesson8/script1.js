class Bike {
    constructor(speed) {
        this._speed = speed;
    }

    applyBrake(value) {
        this._speed -= value;
    }

   getSpeed() {
        return this._speed;
    }


}