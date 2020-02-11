// Nesting arrays
// Nesting and accessing arrays within each other
const arr = [
  [2, 3, 4],
  [533, 53],
  [345, 56, 6]
];
// 111 222 333 444
console.log(arr[1][1]);
console.log(arr[2][1]);
for (let i = 0; i < arr.length; i++) {
  // o
  for (let j = 0; j < arr[i].length; j++) {
    // o
    console.log(arr[i][j]); // 2 0
  }
}
let arrayNew = [];
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 2; j++) {
    arrayNew.push([i, j, i, 44]); // pushing an array
  }
}
let names = ["Ali", "Olga", "Nancy"];
names.forEach(name => console.log(name)); // just an ex
names.map(name => console.log(name)); //
let family = [
  ["Ali", 22, "teacher"],
  ["Olga", 40, "chef"]
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
family.forEach;
// console.log(arrayNew);
// Nesting objects
// Nesting and accessing objects in objects

// Nesting and accessing arrays in objects

// Nesting and iterating over objects in arrays

// Destructuring assignment
// Extracting values from arrays: Array destructuring assignment

// Extracting values from objects: Object destructuring assignment
