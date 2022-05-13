// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe('contentShuffler', () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {
      expect(contentShuffler(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
      expect(contentShuffler(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
    })
})

// Output:
// FAIL  ./code-challenges.test.js
// contentShuffler
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content.
// ● contentShuffler › takes in an array, removes the first item from the array and shuffles the remaining content.
//   ReferenceError: contentShuffler is not defined


// b) Create the function that makes the test pass.

// Pseudocode:
// create a function named contentShuffler
// remove the first value in the array using .shift
// use Math.random and sort function from the new array that was created with a key value of sort to shuffle 

const contentShuffler = (array) => {
    array.shift()
    return array
      .map(value => ({value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value)
}

// console.log(contentShuffler(colors1));
// console.log(contentShuffler(colors2));
// output:
// [ 'pink', 'green', 'blue', 'yellow' ]
// [ 'saffron', 'indigo', 'ochre', 'periwinkle', 'aquamarine' ]
// PASS  ./code-challenges.test.js
// contentShuffler
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


describe('minMax', () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.",() => {
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
    })
})
// Output:
// FAIL  ./code-challenges.test.js
// minMax
//   ✕ takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
// ● minMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
//   ReferenceError: minMax is not defined

// b) Create the function that makes the test pass.
//Psuedocode
// Create a function called minMax
// takes in an array of numbers (array) parameter
// use Math.min/max to get the values needed
// return chosen values in new array

const minMax = (array) => {
    const smallNum = Math.min(...array);
    const highNum = Math.max(...array);
    return [smallNum, highNum]
}

//   console.log(minMax(nums1));
//   console.log(minMax(nums2))
// [ -8, 90 ]
// [ 5, 109 ]

// Output:
// PASS  ./code-challenges.test.js
// minMax
//   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (1 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe('noDups', () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
         expect(noDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// Output:
// FAIL  ./code-challenges.test.js
// noDups
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values.
// ● noDups › takes in two arrays as arguments and returns one array with no duplicate values.
//   ReferenceError: noDups is not defined

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]


// b) Create the function that makes the test pass.
//PseudoCode
//create a function named noDups
//pass in two arrays in the function
//use set to remove duplicates and a spread operator to create a new array

const noDups = (array1, array2) => {
    return [...new Set([...array1, ...array2])];
}
console.log(noDups(testArray1, testArray2));

// Output:
// PASS  ./code-challenges.test.js
// noDups
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values. (1 ms)
// [3, 7, 10, 5, 4, 8,  2, 1]