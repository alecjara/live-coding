let x; // declaring a variable named x
x = 4; // assigning 4 to the variable x
let q = 3;
let w = "This is sum "; // assigning a sting to w
let e = "The first value";
let t = "The second value";
let result = x + q;
// using backtick to have more control on my output
console.log(`${e} ${x} + ${t} ${q} = ${w} ${result}`);

// parameter
function sum(value1, value2) {
  // function definition

  let result = value1 + value2;
  return result; // every function will return one value
}
//sum(); // function call
console.log(sum(10, 33)); // calling function sum with 10 and 33

