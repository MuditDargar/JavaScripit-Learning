let num = [1, 2, 3, 4, 5, 67]
let num1=[20,30,40,70]
// delete num[5] //delete according to index number.
// console.log(num)
// console.log(num.length)  // the length of array is same after delete one element 

// let new_array= num.concat(num1) // concatination of two array
//    // join the two array

// console.log(new_array);
// console.log(num,num1); // the no change in the initial array after concatinate the two array

//  

//Sorting of the array
// let arr=[45,23,43,12,32,5,87,46,76,97,67]; 
//  arr.sort(compare) // yeah alphabatically sort karta hai array koo // yeah original array ko modify kar deta hai...
//  arr.reverse();
//  console.log(arr);

//splice and slice 
let arr=[32,54,78,56,45,24,75,345,766]
values = arr.splice(2,5,1,2,3,4,5,6,7);
// arr.splice(position to add,no. of elements to remove ,elements to be added)

console.log(values)