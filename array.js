let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist

console.log("The length of marks_class_12 is", marks_class_12.length)

//array can be changed:
marks_class_12[0] = 95
console.log("After changing the first element:", marks_class_12)

console.log(typeof marks_class_12) // This will print "object" because arrays are objects in JavaScript


//print using for loop:
let marks = [91, 82, 63, 84, false, "Not Present"]
for (let i=0 ;i<6 ;i++){
    console.log(marks[i])
}