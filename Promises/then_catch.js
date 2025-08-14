// a promise is a " is a promise to code execution". The code executes or fails in both cases subscriber get notified subsequently.
// syntax
let p1 = new Promise((resolve, reject) => {
// console.log("Promise is pending");
setTimeout(() => {
  console.log("I am a promise and I am Fulfiled");// statement
  resolve("Promise is resolved");// give value

}, 4000);
})

let p2 = new Promise((resolve, reject) => {
// console.log("Promise is pending");
setTimeout(() => {
  console.log("I am a promise and I am Rejected");// statement

  reject("Promise is rejected " + new Error("I am an Error"));// give value
}, 4000);
})

p1.then((value) =>{
    console.log(value); 
}).catch((error) =>{
    console.log(error);// this catch is use less because p1 is resolved
})

p2.then((value) =>{
    console.log(value);
})// due this shows an uncatch error and notifies the user in the ending
p2.catch((error) =>{
    console.log("hey i am an error");
})// this will catch the error and give the error message

p1.then(alert);// this will alert the resolved value
p2.then(alert);//this will show nothing because p2 is rejected

p1.catch(alert);// this will show nothing because p1 is resolved
p2.catch(alert);// this will alert the error message

// error will be caught by the catch block
//resolved will be caught by the then block and give value