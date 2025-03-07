const prompt = require ("prompt-sync") ( {sigint : true});

let output = parseInt(prompt("Please enter a number that you would like to FizzBuzz up to: "));

for(let i = 1; i <= output; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if(i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}