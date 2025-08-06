// array method 1:
let num = [1, 2 , 34 , 5 ,3]
let b = num.toString() // b is converted to string
console.log(b , typeof(b))

// array method 2:
// The join() method creates and returns a new string by concatenating all of the elements in an array, separated by the specified separator string.
// If no separator is provided, the array elements are separated with a comma.
// If an empty string is provided, the array elements are concatenated without any separator.
let c = num.join(":")
let d = num.join("-")
console.log( d , typeof (d))
console.log( c , typeof (c))

// array method 3:
// The pop() method removes the last element from an array and returns that element.
// This method changes the length of the array.
// also pop changes the original array by removing the last element

let poppedElement = num.pop() // pop does not take any argument
console.log(poppedElement , typeof(poppedElement))
console.log(num , typeof(num))

// array method 4:
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// also push changes the original array by adding the new element at the end
// The push() method can take multiple arguments, allowing you to add several elements at once.
// The new length of the array is returned.
let newLength = num.push(6)
console.log(newLength , typeof(newLength))
console.log(num , typeof(num))

// array method 5:
// The shift() method removes the first element from an array and returns that removed element.
let shiftedElement = num.shift()
console.log(shiftedElement , typeof(shiftedElement))
console.log(num , typeof(num))

// array method 6:
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// also unshift changes the original array by adding the new element at the beginning
// The unshift() method can take multiple arguments, allowing you to add several elements at once.
// The new length of the array is returned.
let newLength2 = num.unshift(0)
console.log(newLength2 , typeof(newLength2))
console.log(num , typeof(num))

// array method 7:
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The first argument specifies the index at which to start changing the array.
// The second argument specifies the number of elements to remove.
// the third argument and any subsequent arguments specify the elements to add to the array.
let removedElements = num.splice(1, 2 , 10 , 20) // removes 2 elements starting from index 1 and adds 10 and 20
console.log(removedElements , typeof(removedElements))// removedElements is an array containing the removed elements
console.log(num , typeof(num))

// array method 8:
// delete operator removes the element at the specified index from an array, but it does not change the length of the array.
let deletedElement = delete num[2] // deletes the element at index 2
console.log(deletedElement , typeof(deletedElement))// deletedElement is always true because delete operator returns true if the property was successfully deleted
console.log(num , typeof(num))

// array method 9:
// concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// You can concatenate multiple arrays at once by passing them as arguments to the concat() method.
let mergedArray = array1.concat(array2);
console.log(mergedArray);
// The concat() method can also be used to concatenate arrays with nested arrays.
let nestedArray = [7, 8, [9, 10]];
mergedArray = mergedArray.concat(nestedArray);
console.log(mergedArray);
// You can also concatenate arrays with other data types, such as strings or numbers.
mergedArray = mergedArray.concat("Hello", 11);
console.log(mergedArray);

// array method 10:
// The slice() method returns a shallow copy of a portion of an array into a new array
// The first argument specifies the starting index (inclusive), and the second argument specifies the ending index (exclusive).
let slicedArray = mergedArray.slice(2, 5);
console.log(slicedArray);

// The slice() method does not modify the original array, but instead returns a new array containing the selected elements.
slicedArray = mergedArray.slice(3);
console.log(slicedArray);

// The slice() method can also be used with negative indices, which count from the end of the array.
slicedArray = mergedArray.slice(-3);
console.log(slicedArray);
// The slice() method can also be used to create a shallow copy of the entire array by omitting both arguments.
slicedArray = mergedArray.slice();
console.log(slicedArray);
// The slice() method does not modify the original array, but instead returns a new array containing the selected elements.

// array method 11:
// sort() method is used to sort the elements of an array in place and returns the sorted array.
let unsortedArray = [533, 2, 9, 1, 5, 6];
let sortedArray = unsortedArray.sort(); // sorts the array in ascending order
console.log(sortedArray); // Output: [1, 2, 5, 533, 6, 9]
// The sort() method sorts the elements of an array in place and returns the sorted array.
// By default, the sort() method sorts the elements as strings in alphabetical and ascending order.
// If you want to sort the elements as numbers, you need to provide a comparison function.
sortedArray = unsortedArray.sort((a, b) => a - b); // sorts the array in ascending order numerically
console.log(sortedArray);  // Output: [1, 2, 5, 6, 9, 533]
// The comparison function takes two arguments (a and b) and returns a negative, zero, or positive value depending on the order of the elements.
// If the function returns a negative value, a is sorted before b.
// If the function returns a positive value, b is sorted before a.
// If the function returns zero, the order of a and b remains unchanged.
// The sort() method modifies the original array and returns the sorted array.

// array method 12:
// reverse() method is used to reverse the order of the elements in an array in place and returns the reversed array.
let arrayToReverse = [1, 2, 3, 4, 5];
let reversedArray = arrayToReverse.reverse(); // reverses the array in place
console.log(reversedArray); 
// The reverse() method modifies the original array and returns the reversed array.

// array method 13:
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let arrayWithDuplicates = [1, 2, 3, 2, 4, 5];
let index = arrayWithDuplicates.indexOf(2); // returns the first index of 2
console.log(index);
// The indexOf() method performs a strict equality comparison (===) to find the element.
// If you want to find the last index of an element, you can use the lastIndexOf() method.
index = arrayWithDuplicates.lastIndexOf(2); // returns the last index of 2
console.log(index);

// array method 14:
// The includes() method determines whether an array includes a certain element, returning true or false as appropriate.
let arrayWithValues = [1, 2, 3, 4, 5];
let includesValue = arrayWithValues.includes(3); // returns true
console.log(includesValue);
