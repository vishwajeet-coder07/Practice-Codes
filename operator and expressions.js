77 // number
"harry bhai" // string
false // boolean
//(binod) // binod is a variable also it should be declared with let or var otherwise it will throw an error

// Operators and Expressions in JavaScript
console.log("Operators in Js")
// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a / b = ", a / b);
console.log("a ** b = ", a ** b);
console.log("a % b = ", a % b);
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("a-- = ", a--);

// Assignment Operators 
let assignment = 1;
assignment += 5 ;// same as assignment = assignment + 5
console.log("a is now = ", assignment)
assignment -= 5 ;// same as assignment = assignment - 5
console.log("a is now = ", assignment)
assignment *= 5 ;// same as assignment = assignment * 5
console.log("a is now = ", assignment)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", assignment);

// Comparison Operators 
let comp1 = 6;
let comp2= "6";
console.log("comp1 == comp2 is : " , comp1==comp2);// checks value equality only, not type

console.log("comp1 != comp2 is : ", comp1 != comp2);

console.log("comp1 === comp2 is : ",comp1 === comp2);// strict equality checks value and type

console.log("comp1 !== comp2 is : ", comp1 !== comp2);// strict inequality checks value and type

console.log("comp1 > comp2 is : ", comp1 > comp2);

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false);
console.log(!true);

// conditional operator:

let age = prompt("Enter your age");// like scanf in C
console.log(typeof age);
// The prompt function returns a string, so we need to convert it to a number

age = Number.parseInt(age) ;/*Converting the string to number*/

console.log(typeof age);
if(age>17){
    alert("This is a valid age");// like only one 67 time show
}
else if(age>13 && age<18){
    alert("you are teenager");
}
else
alert("this is not a valid age");

// ternary operator:

console.log( "you can",( age>18? "drive" :"not drive"));

// switch case statement: 
let day = prompt("Enter the day number (1-7):");
switch(day){
    case '1':
        console.log("Monday");
        break;
    case '2':
        console.log("Tuesday");
        break;
    case '3':
        console.log("Wednesday");
        break;
    case '4':
        console.log("Thursday");
        break;
    case '5':
        console.log("Friday");
        break;
    case '6':
        console.log("Saturday");
        break;
    case '7':
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}