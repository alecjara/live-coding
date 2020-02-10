// Compound object
const objects = [
  {
    name: "Ali",
    lastName: "see"
  },
  {
    name: "Olga",
    lastName: "xs",
    printOut: function() {
      console.log("Hi");
    }
  },
  {
    name: "Nancy",
    lastName: "Aii"
  }
];
// dot.
objects[1].printOut();
// 2nd way to call bracket []
objects[1]["printOut"]();
// Clones vs. References

// Primitive  (Simple values are always clones)
// String, Number, Boolean
let str = "How are you";
let newStr = str; // cloning

str = "something else";
console.log(newStr);
console.log(str);
let num = 222;
let newNum = num;
console.log(newNum);
// Compound
// Object, Array, Function
const names = ["Ali", "Olga", "Nancy", "Zain"];
let newArr = names; //
console.log(newArr);
newArr[1] = "New";
console.log(names);
const car = {
  name: "Ford",
  year: "2020",
  color: "Red"
};

const newObject = car;
newObject.name = "BMW";
console.log(car.name);
// Objects are references by default: Array and object literals

// Shallow copy using ... (spread operator)
let namesArr = ["Ali", "Hadi"];
let newNamesArr = [...namesArr];
newNamesArr[0] = "Nancy";
console.log(newNamesArr);
console.log(namesArr);
// Shallow copy using .concat()
let newNames2 = [].concat(namesArr);

// Shallow copy using .slice()
let newNames3 = namesArr.slice(0);
console.log(newNames3);
// Shallow copy using .assign()
const newObject2 = Object.assign(car);
const mewObject3 = { ...car };
//  Recursion

// console.table()

// Object.getOwnPropertyNames
