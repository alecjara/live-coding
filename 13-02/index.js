// 3 types of errors (compilation aka compiler fails to compile, runtime, logic)

// `try { ... } catch (e) { ... }`
let userAge = 25;
if (userAge == 25) {
  console.log("something else");
}
console.log("Hi");
let userName = "";
cool();
// try --> to test a block of code
// catch --> to handel the error
// throw --> to create a custom errors
try {
  console.log("Hi his is trying phase");
  // cool();
  if (userName == "") throw " Sorry something went wrong ";
  // if there was an error this part will never run
  console.log("2nd phase");
} catch (err) {
  console.log("this error is" + err);
} finally {
  userName = "xxx";
  console.log("this will always run 😂");
}
