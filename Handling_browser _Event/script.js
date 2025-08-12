let x = function(event) {
  console.log(event.target)
  console.log(event)// shows pointer to the event
  console.log(event.type, event.clientX, event.clientY) //shows the type of event and mouse position
  console.log(event.currentTarget)//shows the current target of the event
  // alert("Hello World1!")
}

let y = function(e) {
  console.log(e)
  alert("Hello World2!")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)

 let a = prompt("What is your favorite number?");
 if (a == "2") {
   btn.removeEventListener('click', y)
 }
