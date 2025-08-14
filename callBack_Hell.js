function getCheese(callback){
    setTimeout(() => {
     const cheese = "🧀";
     console.log("getting cheese...");
     callback(cheese);// cheese is passed to the callback(yaha pr callback function niche vala cheese function ban jata hai)
}, 2000);
}

// In above function, we are simulating an asynchronous operation using setTimeout.

// The callback function is called once the cheese is "retrieved" after 2 seconds.

// Callback Hell -: In this scenario, we have multiple nested callbacks And it can lead to difficult-to-read code.

// pizza -- dough -- cheese 

function makeDough(cheese ,callback) {
    setTimeout(() => {
        const dough = cheese + "🍞";
        console.log("getting dough...",dough);
        callback(dough);
    }, 2000);
}
// In this function, we are simulating the process of making dough using the cheese received from the previous callback.
function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("getting pizza...",pizza);
        callback(pizza);
    }, 2000);
}



getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("Pizza Baked:", pizza);
        });
    });
});