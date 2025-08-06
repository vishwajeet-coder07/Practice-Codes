let arr = [ 1 ,2 ,3 ,4 ,5]
for( let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// forEach loop:
// This method executes a provided function once for each array element.
    arr.forEach((Element) => {
    console.log(Element*Element + " is the square of " + Element);
});

// new code using forEach
arr.forEach((item, index) => {
    console.log(`Item at index ${index} is ${item}`);
});
//another example that give factorial of each element
arr.forEach((item) => {
    let factorial = 1;
    for (let i = 1; i <= item; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${item} is ${factorial}`);
});

// Array.from 
let name = "Vishwajeet"
let arr1 = Array.from(name);
console.log(arr1);

// for...of 
for (let item of arr){
  console.log(item);
}

// for...in
for( let i in arr){
    console.log(i);
}