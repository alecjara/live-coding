// Module Basics:

//  Using modules in the browser: <script type="module" src="...">

//  Connecting files: The `import` and `export` keywords

//  defer attribute
// tells the browser that it should go on working with the page, and load the script “in background”, then run the script when it loads.
// https://javascript.info/script-async-defer#defer

// https://docs.npmjs.com/creating-a-package-json-file

//JavaScript Object Notation (JSON)
// It's a file format, and data interchange format, that uses human-readable text to store and transmit data objects
const recipes = [
  {
    id: 1,
    title: "Sourdough",
    ingredients: ["water", "flour", "salt", "yeast"],
    image:
      "https://amyinthekitchen.com/wp-content/uploads/2018/11/Beginners-Sourdough-Bread-AITK.jpg",
  },
  {
    id: 2,
    title: "Baguettes",
    ingredients: ["water", "flour", "salt", "yeast"],
    image:
      "https://www.thespruceeats.com/thmb/mCTU2pQ6A-WZ7qQqxH4C8gSbR9E=/1428x1428/smart/filters:no_upscale()/GettyImages-636741221-e5442b2f0b3a4d33a26ebf7deb237fed.jpg",
  },
  {
    id: 3,
    title: "Sliced bread",
    ingredients: ["water", "flour"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdfaG5Cv4oOjewDMyFitnCpsOBH3ifA5fkycKUy0_y_4Vv2P4IkA",
  },
];
