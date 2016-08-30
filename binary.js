

"use strict"
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

var test_array_a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var test_array_b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


function indexPosition (test_array,listArray) {

  for(var i=0;i<listArray.length;i++){
    if (test_array == listArray[i]) {
      return i;

    }
  }
  return -1;
}


var splitArray = function (arr) {

  var arrayLength = arr.length/2;
  console.log(arrayLength);

  var arr2 = arr.slice(0),
  arrays = [];

  while (arr2.length > 0) {
    arrays.push(arr2.splice(0, arrayLength));
  }


  return arrays;

}





let binarySearch = (i,arr) => {

  let low =0;
  let high = arr.length-1;
  let divide ;
  let arrDivide;


  while (low<= high) {
     divide = Math.floor((low+high)/2);
     arrDivide = arr[divide];

     if ( arrDivide < i ){
       low = divide+1;

     }
     else if ( arrDivide > i){
       high = divide -1;
     }
     else {
       return divide;
     }


  }
  return -1



}




/*
function binarySearch (i,arr) {
  var low = 0;
  var high = arr.length -1 ;
  var divide = Math.floor((low+high)/2);
  var arrDivide = arr[divide];
  while(low <= high) {
    if (arrDivide < i) {
      low = divide+1;
    }else if (arrDivide > i)
    {
      high = divide-1;
    }else {
      return divide
    }
  }
  return -1;

}*/


console.log(binarySearch(7, test_array_a))



console.log(binary_search(5, test_array_a))
console.log(binary_search(6, test_array_b))

console.log(binary_search(10, test_array_a))
console.log(binary_search(11, test_array_b))
console.log(binary_search(2, test_array_a))
console.log(binary_search(2, test_array_b))
