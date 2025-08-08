//prompt_alert_confirm & document
// This script demonstrates the use of prompt, alert, and confirm in JavaScript

alert("Enter the value of  a!");
let a = prompt("Enter the value here", "578"); // Default value is 578
a = Number.parseInt(a); // Convert string to integer
alert("you entered a of type " + (typeof (a)) + " and value " + a);

let write = confirm("Do you want to write the value of a in the document?");
// Confirm whether the user wants to write the value in the document
if (write) // If user confirms
{
    document.write("The value of a is " + a);// Write the value of a in the document
    document.write("<br> The type of a is " + typeof (a)); // Write the type of a in the document
}   else {
    document.write
    ("You choose not to write the value of a in the document.");
}