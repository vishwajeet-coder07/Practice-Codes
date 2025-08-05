console.log("this code for the ulimate js course")
let a= 67 ;
console.log(a);
 a = ("Vishwajeet")
 console.log(a); // this shows dynamic process and it can be changed during the code execution

// LET ,VAR and CONST -:
  a = 45; //privously safe as the let
 let b = 30;
 const c = "vishwajeet Singh chauhan";// const does not change throughtout the code
 console.log(c);
{
    let b = "this"; // this is block scope variable**
      console.log(a); // this will print the global value of a
    console.log(b) //block value print first then global value
 }
console.log (b)

// var is global scope variable***
for (let i = 0; i < 5; i++) {
    var d = "this is var"; // this will be available outside the loop
}
console.log(d);