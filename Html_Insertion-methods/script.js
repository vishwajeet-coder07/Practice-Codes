let a = document.getElementsByTagName('div')[1];
a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>"

let div = document.createElement('div');
div.innerHTML = "<p>This is a new div 1</p>";// creating a new div element

document.body.appendChild(div).setAttribute("class", "new-class"); // appending(ending mai) the new div to the body

let div1 = document.createElement('div');
div1.innerHTML = "<p>This is another new div 2</p>";// creating another new div element

document.body.prepend(div1);
div1.setAttribute("class", "new-class-2"); // prepending the new div to the body


let div2 = document.createElement('div');
div2.innerHTML = "<p>This is new div3</p>";// creating another new div element

a.before(div2)
div2.setAttribute("class", "new-class-3"); // appending the new div to the first element with class

// let div3 = document.createElement('div');
// div3.setAttribute('class' ,'new-class-4');
// div3.innerHTML = "<p>This is new div4</p>";// creating another new div element

// a.replaceWith(div3);// replacing the "class" = first with new-class-4