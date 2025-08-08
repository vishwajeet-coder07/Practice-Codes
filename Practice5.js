//problem 1:
let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr1.push(a)
console.log(arr1)

//problem 2:
let arr = [1, 2, 3, 4, 5 ,6 ,76 ,5];
b = arr.length;
while (true) {
    a = Number.parseInt(a);
    if (a != 0) {
        arr.push(a);
    }
    else{
        console.log("You have entered correct number");
        break;
    }
}
console.log("you have entered worng number " + (arr.length - b) + " times");

//problem 3:
let arr2 = [1, 20, 3, 40, 5, 60, 7, 80];
let NewArray = arr2.filter((element) => {
 return element % 10 === 0;
});
console.log(NewArray);

// Practice Problem 4
let arr3 = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n = arr3.map((x)=>{
  return x*x
})
console.log(n);

// Practice Problem 5
let arr4 = [1, 2, 3, 4, 5, 6, 7];
let factorial = arr4.reduce((x1 , x2) => {
    return x1 * x2;
})
console.log(factorial);