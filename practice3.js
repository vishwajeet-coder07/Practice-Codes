// Problem No 1
let marks = {
  harry: 90,
  shubham: 9,
  lovish: 56,
  Monika: 4
}
// for(let i=0 ; i<Object.keys(marks).length; i++){

//     console.log(" The marks of "
// + Object.keys(marks)[i]+ " are : " + marks[Object.keys(marks)[i]]
//     )
// }

for(let key in marks){

    console.log(" The marks of "
+key+ " are : " + marks[key])
}

// Problem No 3
let correctnumber = 43
let i = 0;;
while (i != correctnumber){
i = Number(prompt("Enter a number")); 
// Prompting user to enter a number
// If the user enters a number, it will be stored in variable i
// user cannot enter a string or any other type of data
// If the user enters a string, it will be converted to NaN (Not a Number

if (i == correctnumber) {
  console.log("You have entered a correct number");
} else {
  console.log("Try again");
}
}

// Problem No 4
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4
}

console.log(mean(4, 5, 6, 7))