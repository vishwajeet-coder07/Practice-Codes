// Guess Number Game

console.log("Welcome to the Guess Number Game!");
console.log("Try to guess the number between 1 and 100.")
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Random number between 1 and 100
let attempts = 0;  
let a;
while (true){
    a = prompt("Enter Your Number : ");
    a = Number.parseInt(a);

     if(a < 1 || a > 100){
        console.log(" Hint : Please enter a number between 1 and 100");
        continue;
    }

    if(isNaN(a)){
        console.log(" Hint : Please enter a valid number");
        continue;
    }
        attempts++;

     if(a > randomNumber && a <= 100){
        console.log(" Hint : Gussed number is greater than random number");
    } else if(a < randomNumber && a >= 1 && a <= 100){
        console.log(" Hint : Gussed number is less than random number");
    } else {
        console.log("Number is Matched");
        console.log("Congrats You Win !");
        console.log("Random Number is : " + randomNumber);
        console.log("Your Score is = " + (100 - attempts));
        console.log("Number Of Attempts = " + attempts);
    break; 
    }
}
console.log("Thank you for playing the Guess Number Game!");
console.log("Have a great day!");