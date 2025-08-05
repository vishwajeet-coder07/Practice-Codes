// this is a normal function
function onePlusAvg(x, y) {
  return 1 + (x + y) / 2
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a and b is ", onePlusAvg(a, b))
console.log("One plus Average of b and c is ", onePlusAvg(b, c))
console.log("One plus Average of a and c is ", onePlusAvg(a, c))

// this called arrow function with explicit return:
  const sum = (p ,q)=>{
    return (p + q);
}
console.log(sum(9,8))

// this is an arrow function with implicit return
const sum2 = (p, q) => p + q;
console.log(sum2(5, 6));

// this is an arrow function with no parameters
const sum3 = () => 42;
console.log(sum3());

// this is an arrow function with one parameter
const square = x => x * x;
console.log(square(5));

// function may or may not return a value
// if it does not return a value, it returns undefined
const hello =() =>{
  console.log("Hello World");
  return "hye";
}
console.log(hello());

// this is a function that takes a callback function as an argument
function doSomething(callback) {
  console.log("Doing something...");
  callback();
}
