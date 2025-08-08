console.log(document.body.firstChild); // Logs the first child of the document
//node name is text node
console.log(document.body.querySelector('.highlight')); // Logs the first element with class 'highlight'
console.log(typeof(document.body.firstChild)); // Logs the type of the element with class 'highlight'
console.log(document.body.lastChild); // Logs the last child of the document
console.log(document.body.firstElementChild); // Logs the first element child of the body
console.log(document.body.lastElementChild); // Logs the last element child of the body
console.log(document.body.children); // Logs all child elements of the body
console.log(document.body.childNodes); // Logs all child nodes of the body, including text nodes

//element.childNodes[0] === element.firstChild
let a  = document.body.childNodes[0] === document.body.firstChild; // Checks if the first child node is the same as the first element child
//element.childNodes[element.childNodes.length - 1] === element.lastChild
let b = document.body.childNodes[document.body.childNodes.length - 1] === document.body.lastChild; // Checks if the last child node is the same as the last element child
console.log(a, b); // Logs the results of the checks
console.log(document.body.childElementCount); // Logs the number of child elements in the body

let arr = Array.from(document.body.childNodes); // Converts the HTMLCollection of child elements into an array
console.log(arr); // Logs the array of child elements
