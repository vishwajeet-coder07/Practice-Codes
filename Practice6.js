
//Question: 1

// while (true) {
//         let a = prompt(" Enter your Age : ");
//         a = Number.parseInt(a);

//         if (a >= 18) {
//             alert("You can vote");
//             break;
//         }
//         else if (a < 18 && a > 0) {
//             alert("You cannot vote");
//             break;
//         }
//         else {
//             alert("Invalid age " , "Please enter a valid age ");
//             continue;
//         }
//     }

  // Question: 2 & 3

// do {
//     while (true) {
//         let a = prompt(" Enter your Age : ");
//         a = Number.parseInt(a);

//         if (a >= 18) {
//             alert("You can vote");
//             break;
//         }
//         else if (a < 18 && a > 0) {
//             alert("You cannot vote");
//             break;
//         }
//         else {
//             alert("Invalid age " , "Please enter a valid age ");
//             continue;
//         }
//     }
//     let runAgain = confirm("Do you want to run again?");
// } while (runAgain);

// Question: 4

// while (true){
    
// let a = prompt("Enter a number : ");
// a = Number.parseInt(a);

//     if (a < 4) {
//     alert("Enter a correct Code");
//      } else {
//     alert("Code Is Correct and now we send too my web page");
//     location.href = "https://www.google.com";
//     break;
//      }
// }

// Question: 5

let color = prompt("Enter a color : ");
document.body.style.backgroundColor = color;