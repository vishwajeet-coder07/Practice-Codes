let first = document.querySelector("#first");
first.className = "text-black red"
first.classList.add("red")// add the class
first.classList.remove("red")// remove the class
console.log(first.classList.contains("red"))// check if the class exists
first.classList.toggle("red")// toggle the class (if exists then remove and not exist then add)
// here red is class