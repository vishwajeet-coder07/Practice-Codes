// Primitive data type-:
// uploaded on github
// nn bb ss u
// null, number, boolean, bigint, string, symbol , undefined

let a = null;
let b = 324;
let c =  true;
let d = BigInt("567") + BigInt("3")
let e = "vishwajeet";
let f = Symbol(" i am a nice symbol");
let g 
console.log(a ,b ,c , d ,e ,f ,g)
console.log( typeof a)
console.log( typeof b)
console.log( typeof c)
console.log( typeof d)
console.log( typeof e)
console.log( typeof f)
console.log( typeof g)

// OBJECTS IN JS-:(non primitive data)
// objects is a collection of key value pairs
// like the nikhil work as a key and his age is a value(numeric value) and shubham work as a string
// object are equal to structure in c or c++

 const item = {
 "rohan" : true,
 "shubham" : "he is my friend",
 "nikhil" : 69,
 "pradeep" : undefined,
 }
 console.log(item["shubham"]);
 console.log(item["nikhil"]);

 // also we can change the add the elements in the object like this
item['harry'] = "youtuber";
item['rohan'] = "friend"; // now rohan is replace by friend(string)

const obj = {
  1: "one",
  true: "boolean",
  null: "null value"
};

console.log(Object.keys(obj));
console.log(Object.values(obj));