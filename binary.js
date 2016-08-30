// TESTS
// test_array_a = (100..200).to_a
// test_array_b = (100..201).to_a
// puts binary_search(135, test_array) == 35

// PSEUDOCODE
// create a method, binary_search, that takes an object and an array as an input.
// the object is the number we are testing for to find the index position
// the array is our data set which we will be comparing our object against to find the index position
//establish the index position of the element in our array which is the mid-way point in our array (probably by using array.length)
// make sure that this works for both even and odd array lengths
//create a method to cut our array length in half, and determine if our object is higher or lower than the array number at that "half array" index position
// if our number is exactly the same as the "half array" index number, return the index position of that number in the array.
// if our number is higher, discard the lower half of our array set and continue testing against the upper half of our array (taking the middle position each time).
// if lower, do the opposite of above.
//continue until "half_array" index is equal to number, at which point return the index position of number chosen.


"use strict"

var test_array_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test_array_b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function binary_search(search, array) {
    // Your code here
    var arrMin = 0;
    var arrMax = array.length - 1;

    while (1) {
        if (search == array[Math.floor(((arrMax - arrMin) / 2)) + arrMin]) {
            return Math.floor(((arrMax - arrMin) / 2)) + arrMin;
        } else if (search == array[Math.ceil(((arrMax - arrMin) / 2))+ arrMin]) {
            return Math.ceil(((arrMax - arrMin) / 2)) + arrMin;
        } else if (arrMax == arrMin) {
            return -1;
        } else if (search <= array[Math.ceil((arrMax - arrMin) / 2)]) {
            arrMax = Math.ceil((arrMax - arrMin) / 2);

            // Test to see arrMin arrMax changes
            // console.log("arrMin: " + arrMin + ", arrMax: " + arrMax);
        } else if (search > array[Math.ceil((arrMax - arrMin) / 2)]) {
            arrMin = Math.ceil((arrMax - arrMin) / 2) + arrMin;

            // Test to see arrMin arrMax changes
            // console.log("arrMin: " + arrMin + ", arrMax: " + arrMax);
        }
    }
}

// Driver code
console.log(binary_search(5, test_array_a))
console.log(binary_search(6, test_array_b))
console.log(binary_search(10, test_array_a))
console.log(binary_search(11, test_array_b))
console.log(binary_search(2, test_array_a))
console.log(binary_search(2, test_array_b))

// Test arrays
var test_array = [];

// Test 1
for (var i = 0; i <= 200; i++) {
    test_array.push(i);
}
console.log(binary_search(194, test_array));

// Test 2
test_array = [1, 2, 3, 4, 5];
console.log(binary_search(3, test_array));

// Test 3
test_array = [13, 19, 24, 29, 32, 37, 43];
console.log(binary_search(35, test_array));

// Test 4
test_array = [100, 120, 130, 135, 150, 170];
console.log(binary_search(135, test_array));
