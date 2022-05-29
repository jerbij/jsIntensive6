export class Car {

    #brand = '';

    #model = '';

    #yearOfManufacturing = 0;

    #maxSpeed = 0;

    #maxFuelVolume = 0;

    #fuelConsumption = 0;

    #currentFuelVolume = 0;

    #isStarted = false;

    #mileage = 0;

    get brand() {
        return this.#brand;
    }

    set brand(value) {
        if(value === undefined || (value.length < 1 || value.length > 50)) {
            throw('Неверное значение');
        } else {
            this.#brand = value;
        }
    }

    get model() {
        return this.#model;
    }

    set model(value) {
        if(value === undefined || (value.length < 1 || value.length > 50)) {
            throw('Неверное значение');
        } else {
            this.#brand = value;
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(value) {
        const currentYear = new Date().getFullYear();

        if(value === undefined || isNaN(value) || (value < 1900 || value > currentYear)) {
            throw('Неверное значение');
        } else {
            this.#yearOfManufacturing = value;
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(value) {
        if(value === undefined || isNaN(value) || (value < 100 || value > 300)) {
            throw('Неверное значение');
        } else {
            this.#maxSpeed = value;
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(value) {
        if(value === undefined || isNaN(value) || (value < 5 || value > 20)) {
            throw('Неверное значение');
        } else {
            this.#maxFuelVolume = value;
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(value) {
        if(value === undefined || isNaN(value)) {
            throw('Неверное значение');
        } else {
            this.#fuelConsumption = value;
        }
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if(this.#isStarted) {
            throw('Машина уже заведена');
        } else {
            this.#isStarted = true;
        }
    }

    shutDownEngine() {
        if(!this.#isStarted) {
            throw('Машина ещё не заведена');
        } else {
            this.#isStarted = true;
        }
    }

    fillUpGasTank(amount) {
        if((amount === undefined || isNaN(amount)) || amount <= 0) {
            throw('Неверное количество топлива для заправки');
        } else if(amount + this.#currentFuelVolume  > this.#maxFuelVolume) {
            throw('Топливный бак переполнен');
        } else {
            this.#currentFuelVolume = this.#currentFuelVolume +  amount;
        }
    }

    drive(speed, hours) {
        if((speed === undefined || isNaN(speed)) || speed <= 0) {
            throw('Неверная скорость');
        } else if((hours === undefined || isNaN(hours)) || hours <= 0) {
            throw('Неверное количество часов');
        } else if(speed > this.#maxSpeed) {
            throw('Машина не может ехать так быстро');
        } else if(!this.#isStarted) {
            throw('Машина должна быть заведена, чтобы ехать');
        } else if(this.#currentFuelVolume <= 0) {
            throw('Недостаточно топлива');
        } else {

            const drove = speed * hours;

            this.#mileage = this.#mileage + drove;

            const consumed = ( this.#fuelConsumption / 100 ) * drove;

            this.#currentFuelVolume = this.#currentFuelVolume - consumed;

        }
    }
}
