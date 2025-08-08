//Dom ,BOM & window object model
console.log(window);
//window object is the global object in browser environment

//Dom
//Document Object Model
//It represents the structure of the HTML document as a tree of objects

console.log(document);
// Your whole HTML becomes a javascript object called document
console.log(document.body);
//document.body gives you the body element of the HTML document
console.log(document.head);
//document.head gives you the head element of the HTML document
console.log(document.title);
//document.title gives you the title of the HTML document
console.log(document.URL);
//document.URL gives you the URL of the HTML document
document.body.style.backgroundColor = "green"; // not allowed in browser mostly
//Changing the background color of the body element to green
document.body.style.color = "white";
//Changing the text color of the body element to white

//Bom
//Browser Object Model

console.log(navigator.userAgent);
//navigator.userAgent gives you the user agent string of the browser
console.log(navigator.language);
//navigator.language gives you the preferred language of the browser
console.log(navigator.platform);
//navigator.platform gives you the platform of the browser
console.log(navigator.onLine);
//navigator.onLine gives you the online status of the browser
console.log(location.href);
//location.href gives you the current URL of the browser