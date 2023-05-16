let number=[1,2,3,4,5]
let b= number.toString() // b is now in string
console.log(b,typeof b) 

let c=number.join("_") //join the element with each element in array
console.log(c,typeof c)
let r = number.pop(); // remove the last element from array
console.log(number,r)
number.push(88) // add the one element in the array from the last
let y =number.push("sachin is fab")

console.log(number,y)

let w = number.shift()
console.log(w,number); // remove the first element from starting part

let z= number.unshift(81)
console.log(z,number) // adding  the  element from starting