// Arrays in JavaScript
let arr = new Array();
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

console.log(arr); // [1, 2, 3]

let arr2 = [4, 5, 6];
console.log(arr2); // [4, 5, 6]

// Accessing array elements
console.log(arr[0]); // 1
console.log(arr2[1]); // 5
console.log(arr[3]); // undefined (out of bounds) -> No error, just returns undefined

// Array length
console.log(arr.length); // 3
console.log(arr2.length); // 3  

// Iterating over arrays
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let num of arr2) {
    console.log(num);
}   

// Array methods
arr.push(4); // Adds 4 to the end of arr
console.log(arr); // [1, 2, 3, 4]

arr.pop(); // Removes the last element from arr
console.log(arr); // [1, 2, 3]

arr.unshift(0); // Adds 0 to the beginning of arr
console.log(arr); // [0, 1, 2, 3]

arr.shift(); // Removes the first element from arr
console.log(arr); // [1, 2, 3]

arr.splice(1, 1); // Removes 1 element at index 1
console.log(arr); // [1, 3]
arr.splice(1, 0, 2); // Inserts 2 at index 1 without removing any element
console.log(arr); // [1, 2, 3]
arr.splice(1, 1, [4,5,2]); // Replaces 1 element at index 1 with [4, 5, 2]
console.log(arr); // [1, [4, 5, 2], 3]


//Diffrent data types in array
let mixedArr = [1, "two", true, null, undefined, { name: "Alice" }, [3, 4], function() {return true}];
console.log(mixedArr); // [1, "two", true, null, undefined, { name: "Alice" }, [3, 4], [Function: function]]
console.log(mixedArr[7]()); // true

// Sparse arrays
let arr_new = [1, 2, 3];
arr[5] = 6; // Adding an element at index 5, leaving index 3 and 4 undefined
console.log(arr); // [1, 2, 3, undefined, undefined, 6]
console.log(arr.length); // 6 (length is based on the highest index + 1)

//for of loop
let a = new Array()
a[0]=4
a[5]=6
for (let i of a){
    console.log(i); // 4, undefined, undefined, undefined, undefined, 6
}

// Array destructuring
let arr3 = [4, 5, 6];
let [x, y, z] = arr3;
console.log(x); // 4
console.log(y); // 5
console.log(z); // 6

let [first, ...rest] = arr3;
console.log(first); // 4
console.log(rest); // [5, 6]

