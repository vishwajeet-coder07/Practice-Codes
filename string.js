let name = "Harry";
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
let friend = 'Prakash';
console.log(friend);

// Template literals uses backticks to define strings
let myName = `Vishwajeet Singh`;
console.log(myName);

// Template literals can span multiple lines
let myBio = `My name is ${myName}.
I am a web developer.`;
console.log(myBio);

// Template literals can include expressions
let a = 5;
let b = 10;
let sum = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sum);

// Template literals can include variables
let age = 20;
let greeting = `Hello, my name is ${myName} and I am ${age} years old.`;
console.log(greeting);

// Template literals can include function calls
function greet(name) {
    return `Hello, ${name}!`;
}  
console.log(greet(myName));

// Template literals can include nested expressions
let x = 2;
let y = 3;
let product = `The product of ${x} and ${y} is ${x * y}.`;
console.log(product);

// Template literals can include objects
let person = {
    name: "Alice",
    age: 30
};
let personInfo = `Name: ${person.name}, Age: ${person.age}`;
console.log(personInfo);

let boy1 = "Pramod";
let boy2 = "Nikhil";
// Nikhil is a friend of Pramod
let sentence = `${boy2} is a friend of ${boy1}`;
console.log(sentence);

// Escape Sequence Characters

// Using backslash to escape characters
let quote = "He said, \"Hello!\"";
console.log(quote);

// Using backslash to escape single quotes
let singleQuote = 'It\'s a beautiful day!'; 
console.log(singleQuote);

// Using backslash to escape backslashes
let path = "C:\\Users\\Vishwajeet\\Documents";
console.log(path);

// Using backslash to escape newlines
let multiline = "This is a string\nthat spans multiple lines.";
console.log(multiline);

// Using backslash to escape tabs
let tabbed = "This is a string\twith a tab.";
console.log(tabbed);

// Using backslash to escape carriage returns
let carriageReturn = "This is a string\rwith a carriage return.";
console.log(carriageReturn);

// Using backslash to escape form feeds
let formFeed = "This is a string\fwith a form feed.";
console.log(formFeed);

// Using backslash to escape Unicode characters
let unicodeChar = "This is a Unicode character: \u03A9"; // Omega
console.log(unicodeChar);

// Using backslash to escape hexadecimal characters
let hexChar = "This is a hexadecimal character: \xA9"; // Copyright symbol
console.log(hexChar);
