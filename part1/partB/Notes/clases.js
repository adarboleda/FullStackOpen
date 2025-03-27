class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const juan = new Person("Juan", 25);
juan.sayHi();

const pepe = new Person("Pepe", 30);
pepe.sayHi();
