/* Object Inheritance */

class Car{
    constructor(brand){
        this.brand = brand;
    }
    getInfo = () => {
        return "This car brand name is " + this.brand;
    }
}

class CarModel extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
    printInfo = () => {
        console.log(this.getInfo() + 'and its model number is' + this.model);
    }
}

const mazda = new CarModel("Mazda", "RX-8");
const lancer = new CarModel('Lancer', 'Evo X');
const honda = new CarModel('Honda', 'Civic');

console.log(mazda.printInfo());
console.log(lancer.printInfo());
console.log(honda.printInfo());