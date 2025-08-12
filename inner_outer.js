// let x = document.getElementsByTagName('span')[0]
// console.log(x)
// let y = document.getElementsByTagName('span')[0]
// console.dir(y)
// console.log(document.body.firstChild.nodeName) 
// console.log(document.body.firstElementChild.nodeName)
let first = document.getElementById('first');
first.hidden = false// hidden is used to hide the element
console.log(first.innerHTML)
first.innerHTML = "<i>hey I am italic</i>"
console.log(first.innerHTML)
console.log(first.outerHTML)
first.outerHTML = "<div id='first'>hey</div>"
console.log(first.outerHTML)
document.body.firstChild.data
// using textContent
console.log(document.getElementById('id2').textContent)// removes all the text content
// hidden is used to hide the element
// also inner and outer HTML can be used to get or set the HTML content
