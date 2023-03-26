function Person(name, mobile, dob){
    this.name = name;
    this.mobile = mobile;
    this.dob = new Date(dob);
    this.ageCalculation = () => {
        const diff = Date.now() - this.dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

/* Simple*/
class Car {
    constructor(name, model, weight, color){
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.color = color;
            
    }
    getFullModel(){
        return this.name + " " + this.model;
    }
    setName(newName){
        this.name = newName;
    }
}

const mazda = new Car("Mazda", "RX-8", "1200kg", "red");
mazda.setName("Mazda 2")

console.log(mazda.getFullModel());

// const per1 = new Person("Niaj", "01711111111", "1999-01-01");

// console.log(per1.ageCalculation());  