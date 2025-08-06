// This method creates a new array populated with the results of calling a provided function on every element in the calling array.
//different in forEach and map is that forEach changes the original array and returns undefined,
//while map creates a new array and doesn't change the original array.
//map, filter, reduce are higher order functions in JavaScript
let arr = [1, 2, 3, 4, 5];
let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value*2;
});
console.log(a);

// This method creates a new array with all elements that pass the test implemented by the provided function.
let a1 = arr.filter((item) => {
    return item > 2;
});
console.log(a1);
console.log(arr); // Original array remains unchanged

// This method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let a3 = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value for the accumulator
console.log(a3);

// If you want to use reduce without an initial value, it will take the first element of the array as the initial accumulator.
// This will return an array of sums at each step, not a single sum.
let a4 = arr.map((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(a4);