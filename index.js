// Your code here

class Cat { 
    constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    }
speak() {
   return `${this.name} says meow!`;
}
}
class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
        }
speak() {
    console.log(`${this.name} says woof!`);
  }
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    } 
}

let Bird2 = new Bird("harry", "male");
console.log(Bird2);

Bird2.speak = function(){
  if (this.sex == "male") 
  console.log( `It's me! ${this.name}, the parrot!`);
 else 
  console.log( `${this.name} says squawk!`);
}
  console.log(Bird2.speak());