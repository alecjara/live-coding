// Events:
// User Events (interaction) and Browser Events (loading, etc...)

// Listening:
// Higher order functions aka functions that accept function (callbacks)
let divText = document.querySelector(".text");
const print = () => {
  divText.innerText = "Hi I am onclick from Html";
};
let btn = document.getElementById("more");
btn.onclick = function () {
  divText.innerText = "Hi I am onclick method from js";
};
// - Listening to user actions
//   `EventTarget.addEventListener(<namespace>, <callback>)`

// - Mouse Events:
// `click`, `mouseenter`, `mouseleave`

// - Keyboard Events:
// `keydown`, `keyup`
