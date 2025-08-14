document.getElementById("btn_1").onclick = function() {
    alert('Button 1 clicked!');
}

document.getElementById("btn_2").onclick = function() {
    alert('Button 2 clicked!');
}
document.querySelectorAll('a').forEach(function(a) { // what is a here in function?
    // a is the current anchor element in the iteration
    a.addEventListener('click', function() {
        alert('You clicked on a link to ' + this.href);
    });
});
    
const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json()
  return a;
}

setInterval(async function() {
  let url = "https://jsonplaceholder.typicode.com/todos/1"
  console.log(await fetchContent(url))
}, 3000)



setInterval(function() {
  document.querySelector(".bulbcontainer").classList.toggle("bulb")
}, 300);