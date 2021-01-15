class Parent {
    constructor(){
        this.fatherName = "Farhad Ahmed";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this .name + " " + this.fatherName ;
    }
}

const baby = new Child ("Evan Ahmed ");
const baby2 = new Child ("Fahana Moni");

console.log(baby.getFullName());
console.log(baby2.getFullName());