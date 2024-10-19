import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('Add: ', add(5, 3)); // Test add function
console.log('Subtract: ', subtract(5, 3)); // Test subtract function


console.log('Uppercase: ', toUpperCase('hello')); // Test string manipulation A
console.log('Lowercase: ', toLowerCase('HELLO')); // Test string manipulation B

console.log('Multiply: ', multiply(4, 5)); // Test multiply function


console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray


addAndLogUpper(10, 20);  // Logs: "30"


function maxAndMultiply(arr, multiplier) {
    const maxVal = findMax(arr);
    const product = multiply(maxVal, multiplier);
    console.log(toUpperCase(product.toString()));
}

maxAndMultiply([1, 2, 3, 4, 5], 10);