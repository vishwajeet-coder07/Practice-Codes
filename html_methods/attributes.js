// Id is unique on the other hand class is not unique
// class can be used to select multiple elements
let first = document.getElementById("first");
let a = first.hasAttribute("class");
// method to check for the existence of an attribute
console.log(a);
console.log(first.getAttribute("class"));
console.log(first.getAttribute("style"));
//method used to get the value of a specific attribute
console.log(first.getAttribute("data-game"));
console.log(first.getAttribute("data-player"));

first.setAttribute("hidden", "true");
first.removeAttribute("hidden"); // used to remove the attribute

first.setAttribute("class", "New class");// Syntax to set attribute is element.setAttribute(attributeName, value);
first.removeAttribute("class"); // Syntax to remove attribute is element.removeAttribute(attributeName);

// method to check all attributes
console.log(first.attributes);

// data attributes this is to access data attributes that are prefixed with "data-" which has declared by HTML and user with thier own choice
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);