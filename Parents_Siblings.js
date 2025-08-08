// head is next or right sibling of body
// body is parent of p
// p is child of body
console.log(document.documentElement.parentElement); // Logs the parent element of the document element (html) = null

 a = console.log(document.documentElement.parentNode);
 console.log(typeof(a)) // undefined

console.log(document.body.nextElementSibling); // null

console.log(document.documentElement.firstChild); // Logs the first child of the document element

console.log(document.body.parentNode);//HTML

console.log(document.body.nextElementSibling); // no next sibling

console.log(document.body.previousSibling); // text because there is a space (text node) before body or after head.

console.log(document.body.previousElementSibling); // head 

console.log(document.body.firstChild); // text node

console.log(document.body.querySelector('.container').parentNode); // Logs the parent element of the first element with class 'container'

console.log(document.body.querySelector('.container').parentNode[0]); // undefined because parentNode is not an array and only has one parent.

// element only navigation

document.body.firstElementChild.style.backgroundColor = 'lightblue';

// Addition of two numbers:

document.querySelector('.firstNumber').value = prompt("Enter first number");
document.querySelector('.secondNumber').value = prompt("Enter second number");
document.querySelector('.calculate').addEventListener('click', () => {
    document.querySelector('.sum').innerHTML =
        Number(document.querySelector('.firstNumber').value) +
        Number(document.querySelector('.secondNumber').value);
});