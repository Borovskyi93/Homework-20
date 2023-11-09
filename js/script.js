class Human {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    showHumanInfo () {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

const newUser = new Human('Oleg', 31);
newUser.showHumanInfo();

class Car {

    constructor (make, model, year, number) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.number = number;
    }

    getCarOwner (owner) {
        if (owner.age > 18) {
            this.owner = owner;
            return owner;
        } else {
            console.log('Вам немає 18! Яка машина)')
        }
    }

    showCarInfo () {
        console.log(this)
        this.owner.showHumanInfo();
    }
}

const newUserWitchCar = new Car('BMW', '328i', 2011, 'BH3661TC');
newUserWitchCar.getCarOwner(newUser);
newUserWitchCar.showCarInfo();
