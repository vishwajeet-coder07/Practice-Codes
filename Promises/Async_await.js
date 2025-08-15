// async function is used to handle asynchronous operations
// It allows us to write asynchronous code in a more synchronous manner

async function hello() {
    let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Temperature of delhi 27 deg");
    },2000);
})
let ghaziabadWeather = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Temperature of ghaziabad 24 deg");
    },6000);
})

// delhiWeather.then(alert);
// ghaziabadWeather.then(alert);

console.log("Fetching weather data...");
console.log("Fetching Delhi weather Please wait...");
let delhiW = await delhiWeather; //wait to resolve delhiWeather
console.log("Delhi weather fetched successfully :\n" + delhiW);

console.log("Fetching Ghaziabad weather Please wait...");
let ghaziabadW = await ghaziabadWeather; //wait to resolve ghaziabadWeather
console.log("Ghaziabad weather fetched successfully :\n" + ghaziabadW);
return{ delhiW , ghaziabadW };
}
const hye = async () => {
     console.log("Hey I am not waiting for anything");
} 
const SabseBada = async () => {
    console.log("Welcome to weather control room");

    let a = await hello(); // returns { delhiW, ghaziabadW }
    let b = await hye(); // returns undefined because hye doesn't return anything
    console.log(a); // { delhiW, ghaziabadW }
    console.log(b); // undefined because hye doesn't return anything
}
SabseBada(); // calling the main function

// different different async execute parallelly in javascript