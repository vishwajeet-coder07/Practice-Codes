class Animal {
    constructor(name , color){
        this.name = name;
        this.color = color;
    }
    run(){
        console.log(this.name + " is running.");
    }
    eat(){
        console.log(this.name + " is eating.");
    }
    sleep(){
        console.log(this.name + " is sleeping.");
    }
}

class Monkey extends Animal {
    climb(){
        console.log(this.name + " is climbing on a tree.");
    }
    sleep(){
        console.log(this.name + " is sleeping on a branch.");
    }
}
let animal = new Animal("Bruno" , "white");
let monkey = new Monkey("George" , "brown" , "Capuchin");

animal.run();
monkey.run();
monkey.sleep();
animal.sleep();