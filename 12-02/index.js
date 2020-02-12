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
// constructor()

// class

// extends  and super()
// Array.filter()

// Array.map()

// Array.reduce()

// Array.sort()

// new Date()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
