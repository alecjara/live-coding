// Destructuring objects as function parameters
function fun(num, { name }) {
  console.log(num);
  let firstName = { name };
  console.log(firstName);
}
fun(22, { name: "Ali" });
const userData = {
  firstName: "Hadi",
  lastName: "Nsreeny",
  get fullName() {
    // this is getter method
    console.log(`${this.firstName} ${this.lastName}`);
  },
  set fullName(str) {
    // this is setter method
    let arr = str.split(" ");
    this.firstName = arr[0];
    this.lastName = arr[1];
  }
};

// getter
userData.fullName;
// userData.firstName = 'Ali';
// userData.lastName = 'Xxx';

// setter
userData.fullName = "Ali xxx";
userData.fullName; // getting new data
// constructor()

function Person(name, age, activities) {
  // (this) referencing an empty object
  // in js objects are dynamic so you can add property or change it
  this.name = name;
  this.age = age;
  this.activities = activities;
  this.printOut = function() {
    console.log(`Hey ${this.name}, you are too old  ${this.age}`);
  };
}
let ali = new Person("Ali", 22, ["party", "dance"]);
let olga = new Person("Olga", 40, ["sleeping", "dance"]);
console.log(ali);
ali.printOut();
const ojb = new Date();
console.log(ojb);
// class
class Animals {
  // setup
  constructor(_kind, _hometown) {
    this.kind = _kind;
    this.hometown = _hometown;
  }
  // method
  display() {
    console.log(
      `It is a very cute ${this.kind}, and lives in ${this.hometown} `
    );
  }
}
let casper = new Animals("Dog", "LA");
casper.display();
let sofi = new Animals("Fish", "Berlin");
const dyson = new Animals("Fish", "Berlin");
console.log(dyson);
// extends  and super()
// Array.filter()

// Array.map()

// Array.reduce()

// Array.sort()

// new Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
