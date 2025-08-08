document.getElementsByClassName("result")[0].style.color = "red"; 
document.getElementsByClassName("result")[0].style.backgroundColor = "yellow";
document.getElementsByClassName("result")[0].style.fontSize = "20px";
document.getElementsByClassName("result")[0].innerHTML  = "Hello! how are you";

console.log(typeof(document.title)); // string
console.log(typeof(document.body)); // object
console.log(typeof(document.getElementsByClassName("result"))); // object


// DOM (Document Object Model)
// The DOM is a tree structure that represents the HTML document.
    // In an HTML page, <html> is at the root and
    // <head> and <body> are its children, etc.
    // A text node is always a leaf of the tree
    // Auto correction
    // If an erroneous HTML is encountered by the browser
    // it tends to correct it for example, if we put
    // something after the body, it is automatically
    // moved inside the body. Another example is <table>
    // tag which must contain <tbody></tbody>