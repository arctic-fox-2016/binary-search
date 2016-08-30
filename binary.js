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

let test_array_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let test_array_b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function binary_search(search, array) {

  // Your code here

let lowest = 0;
let highest = array.length-1;
let mid;
let arraymid;

  while(lowest <= highest){
    mid = Math.floor((highest + lowest) / 2);
    arraymid = array[mid];

    if(arraymid < search){
      lowest = mid + 1;
    }else if(arraymid > search){
      highest = mid - 1;
    }else{
      return mid;
    }
  }
  return -1;
}


/*
  let lowest = 0;
  let highest = array.length-1;

    while(highest <= array[]){
      let mid = lowest + (highest - lowest) / 2;

      if(highest < lowest){
        hasil = "Hasil tak ditemukan";
      }else if(array[mid] < search){
        lowest = mid + 1;
      }else if(array[mid] > search){
        highest = mid - 1;
      }else if(array[mid] == search){
        hasil = "Hasil ditemukan pada index ke-" + array[mid];
      }
    }
  }
  return hasil;
*/



// Driver code


console.log(binary_search(7, test_array_a))

console.log(binary_search(5, test_array_a))
console.log(binary_search(6, test_array_b))

console.log(binary_search(10, test_array_a))
console.log(binary_search(11, test_array_b))
console.log(binary_search(2, test_array_a))
console.log(binary_search(2, test_array_b))
