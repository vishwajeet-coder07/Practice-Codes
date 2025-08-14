//Call_Function => it is function which can pass as an argument to another function

const calculate = (a , b , operation) => {
    return operation(a , b);
}
// Method 1:
const addition = calculate (4, 3 ,function (num1, num2)// callback function for addition
 {
    return (num1 + num2);
});
console.log(addition);

// Method 2:
const subtraction = (a , b) => a-b;
const SubResult = calculate(4, 3, subtraction);
console.log(SubResult);

//Method 3:
function multiplication (a , b) {
    return a*b;
}
const MulResult = calculate(4, 3, multiplication);
console.log(MulResult); 