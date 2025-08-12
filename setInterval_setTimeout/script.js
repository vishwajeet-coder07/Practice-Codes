document.writeln("Hello, World!");

let a = setTimeout(function sum(a , b) {
    alert(a + b);
}, 1000 , 5 , 10);
// syntax is setTimeout(function, delay, arg1, arg2, ...)
let b = prompt("do you want to run the setTimeout?");
if('no' == b){
    clearTimeout(a); // This will cancel the timeout before it executes
}

let c = setInterval(function() {
    console.log("Hello, World!");
}, 3000);
let d = prompt("do you want to run the setInterval?");
if('no' == d){ clearInterval(c); // This will stop the interval from executing further
    alert("setInterval has been cleared");
}
// how we introduce no of iterations in setInterval
    let e = setInterval(function() {
        console.log("Hello, World!");
    }, 3000);
    let f = prompt("How many times do you want to run the setInterval?");
    if (f) {
        let count = 0;
        let maxCount = parseInt(f);
        e = setInterval(function() {
            if (count < maxCount) {
                console.log("Hello, World!");
                count++;
            } else {
                clearInterval(e);
            }
        }, 3000);
    }