//What is promise api?
//Promise_Api is a built-in JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Value 1");
        }, 11000);
});

let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
                // resolve("Value 2");
                reject(new Error("Error"));
        }, 2000);
});

let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Value 3");
        }, 3000);
});

// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })

// <--Promise.all-->

// let Promise_all = Promise.all([p1, p2, p3])
// Promise_all.then((value) => {
//     console.log(value);
// })
// if there is any promise which is  rejected then Promise.all will not resolve other promises after rejected one and show the error


// let Promise_all = Promise.allSettled([p1, p2, p3])
// Promise.allSettled is used to get array of all promises either resolved or rejected


// let Promise_all = Promise.race([p1, p2, p3])
//Promise.race is used to get the first either resolved promise or rejected promise


// let Promise_all = Promise.any([p1, p2, p3])
// Promise.any is used to get the first resolved promise, if all promises are rejected it will reject with AggregateError


// let Promise_all = Promise.resolve([p1, p2 ,p3]);
//Promise.resolve is used to get a resolved promise


let Promise_all = Promise.resolve([p1, p2 ,p3]);
//Promise.resolve is used to get a resolved promise
Promise_all.then((value) => {
    console.log(value);
})
// api full form is Application Programming Interface