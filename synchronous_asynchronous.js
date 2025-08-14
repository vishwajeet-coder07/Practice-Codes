// Synchronous vs Asynchronous

// Synchronous = but in this case, each operation waits for the previous one to complete
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous = in this case, operations can occur independently without waiting for others to complete
console.log("Start");
setTimeout(() => { // this is executed after 1 second of whole script execution
    console.log("Middle");
}, 1000);
console.log("End");