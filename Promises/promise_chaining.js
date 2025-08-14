// chaining promises by .then .then & it may contain setTimeout or not!

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I am a promise and I am Fulfiled");
        resolve(56);
    }, 2000);
}).then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2");
        }, 4000);
    })
    return p2;
}).then((value) => {
    console.log("we are done!");
}).catch((error) => {
    console.log(error);
}).then(() => {
    console.log("All done!");
});
