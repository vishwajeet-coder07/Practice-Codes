let fact = 1;
let a = prompt("give a number");
a = Number.parseInt(a);

for(let i=1 ; i<=a; i++){
    fact = fact*i;
}
console.log("Factorial of " + a + " = " + fact);

// for - in loop:
// for - in loop is used to iterate over the properties of an object**
// It gives the keys of the object one by one.
let marks = {
Suraj : 68,
Vishnu : 98,
Shivaji : 79,
Kishor :66,
Ganesh :56,
}
for ( let a in marks){
    console.log("Marks of " + a + " are : " + marks[a]);
    // a is the key of the object
    // marks[a] is the value of the key
}

// for -of loop:
for ( let b of "Rajput"){
    console.log(b);
}
// for -of loop is used to iterate over iterable objects like arrays, strings, etc.**
    
//while loop:

let n = prompt("  Enter the value of n :")
n = Number.parseInt(n);

let i= 0;
while(i<n){
    console.log(i)
    i++;
}
