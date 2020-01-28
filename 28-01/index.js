// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".

// Create a function that calculates the user age e.g. 2000 -> 20.

// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twofer = who => {
  return `Two for me and one for ${who}`;
};

console.log(twofer("Ali")); // -> "Two for me and one for Ali"
console.log(twofer()); // -> "Two for me and one for you"
// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 8 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).

const exponent = (num, exp) => {
  let result = 1;

  for (let i = 0; i < exp; i++) {
    result *= num;
  }

  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9

// Create a function will calculate a student degrees for 6 subjects,
//if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "you are cool".
