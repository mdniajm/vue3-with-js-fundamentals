// function Person(name, mobile, dob){
//     this.name = name;
//     this.mobile = mobile;
//     this.dob = new Date(dob);
//     this.ageCalculation = () => {
//         const diff = Date.now() - this.dob.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// /* Simple*/
// class Car {
//     constructor(name, model, weight, color){
//         this.name = name;
//         this.model = model;
//         this.weight = weight;
//         this.color = color;
            
//     }
//     getFullModel(){
//         return this.name + " " + this.model;
//     }
//     setName(newName){
//         this.name = newName;
//     }
// }

// const mazda = new Car("Mazda", "RX-8", "1200kg", "red");
// mazda.setName("Mazda 2")

// console.log(mazda.getFullModel());

// const per1 = new Person("Niaj", "01711111111", "1999-01-01");

// console.log(per1.ageCalculation()); 

class Person {
    constructor(fname,lname, mobile, dob, yearlySalary){
        this.fname = fname;
        this.lname = lname;
        this.mobile = mobile;
        this.dob = new Date(dob);
        this.yearlySalary = yearlySalary;
    }
    getFullName = () => {
        return this.fname + " " + this.lname;
    }
    getAge = () => {
        const diff = Date.now() - this.dob.getTime();
        const ageDate = new Date(diff);
        return age.getUTCFullYear() - 1970;
    }
    getTaxAmount = () => {
        if(this.yearlySalary > 1000000){
            return this.yearlySalary * 0.2;
        }else if(this.yearlySalary > 500000){
            return this.yearlySalary * 0.1;
    }

}
}

const khan = new Person("Khan", "Niaj", "01711111111", "1999-01-01", 1000000);

console.log(khan.getAge());