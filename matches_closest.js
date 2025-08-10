let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))// matches used to check if id1 has class
console.log(id1.matches(".box")) // matches used to check if id1 has box class
console.log(sp1.closest("#sp1")) // closest used to find the closest ancestor matching the selector
console.log(id1.contains(sp1)) // contains used to check if id1 contains sp1
console.log(sp1.contains(sp1)) // contains used to check if sp1 contains itself
console.log(sp1.contains(id1)) // contains used to check if sp1 contains id1