class Mammal {
  constructor(name) {
    this.name = name;
    this.offspring = [];
  }
  sayHello() {
    return "My name is " + this.name + ", I'm a " + this.constructor.name;
  }
  haveBaby() {
    const baby = new Mammal("Baby " + this.name);
    this.offspring.push(baby);
    return baby;
  }
}

class Cat extends Mammal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  meow() {
    return "meow";
  }

  haveBaby(color) {
    let newCat = new Cat("Baby " + this.name, color);
    this.offspring.push(newCat);
    return newCat;
  }
  //while doing this.color, I was actually calling the parent's color not own cat's
}
class Dog extends Mammal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    return "RUFF RUFF";
  }

  haveBaby(breed) {
    let newDog = new Dog("Baby " + this.name, breed);
    this.offspring.push(newDog);
    return newDog;
  }
}
