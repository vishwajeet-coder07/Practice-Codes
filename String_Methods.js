// other properties:
let string = "hello\""; // escape character consider as 1 length
console.log(string.length) // length of string
console.log(string[0]) // first character of string

// string methods:1
let song = "maand";
console.log(song.toUpperCase());
console.log(song.toLowerCase());

// string methods:2
console.log(song.slice(2,4));
console.log(song.slice(2));
console.log(song.slice(-3)); // negative index means from end of string

// string methods:3
console.log(song.substr(2, 3)); // substr takes starting index and length of string


// string methods:4
console.log(song.split("a")); // split string by a and return array

console.log(song.split("")); // split string by each character and return array

// string methods:5
console.log(song.indexOf("a")); // first index of a
console.log(song.indexOf("a", 2)); // index of a after 2nd index
console.log(song.lastIndexOf("a")); // last index of a

// string methods:6
console.log(song.replace("maand","parindey"));

// string methods:7
let Name = "nikhil";
let friend = "Me";
console.log(Name.concat(" is friend of ", friend, " ok."));

// string methods:8
let friend2 = "     Meena     ";
console.log(friend2.trim());// trim removes whitespace from both ends of string
console.log(friend2.trimStart()); // trimStart removes whitespace from start of string
console.log(friend2);

//string methods:9
console.log(friend2.startsWith("Me")); // check if string starts with Me
console.log(friend2.endsWith("ena")); // check if string ends with ena

// string methods:10
console.log(friend2.includes("Me")); // check if string includes Me
console.log(friend2.includes("Me", 3)); // check if string includes Me after 3rd index

// string methods:11
console.log(friend2.search("Me")); // search for Me in string and return index
console.log(friend2.search("Me", 3)); // search for Me in string after 3rd index

// string methods:12
console.log(friend2.match("Me")); // match Me in string and return array with index and input string
console.log(friend2.matchAll("Me")); // match all Me in string and return array with index and input string


// string methods:13
let friend3 = "";
// we can change string to array and then we can change it
let  fr = "pradeep";
for (let i=0 ; i<fr.length; i++){
    console.log(fr[i]);
    friend3 += fr[i];
}
console.log(friend3);
// we cant able to change string or we can say string is immutable
// but we can change the string by creating a new string
