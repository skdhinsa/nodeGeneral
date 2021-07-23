// exported modules are applied to const
const abc = require('./randomObjects');

// can access each exported module
console.log("=== All modules exported ===")
console.log(abc);
console.log(abc.authors);
console.log(abc.titles);

console.log("\n=== One module exported ===")
// import single module - can access them as their var name
const { authors } = require('./randomObjects');
console.log(authors);

