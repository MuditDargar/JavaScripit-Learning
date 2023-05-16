console.log("expressions and operators in javascript");
let a=50 ,b= 2 ;
//Arithematic and increment and decrement operator
console.log("a+b = ",a+b)
console.log("a-b = ",a-b)
console.log("a*b = ",a*b)
console.log("a/b = ",a/b)
console.log("a%b = ",a%b)
console.log("a**b = ",a**b) // a ki power b
// console.log("a++ = ",a++)
// console.log("++a = ",++a)
// console.log("--a = ",--a)
// console.log("a-- = ",a--)

// assignment operator
a += 5 // same as a=a+5
console.log(a);
a -= 5 // same as a=a-5
console.log(a);
a /= 5 // same as a=a/5
console.log(a);
a %= 5 // same as a=a%5
console.log(a);
a *= 5 // same as a=a*5
console.log(a);

// comparision operator
let comp1= 6;
let comp2= 8 ;
console.log(comp1==comp2)//== this is for equal to // if both are in the same type then answer is  true
console.log(comp1===comp2)// if one in string and another in value then give the flase answer
console.log(comp1!=comp2) //!= this is for not equal to
console.log(comp1!==comp2)  // if one in string and another in value then give the flase answer


// logical operator
let x=5 ;
let y= 6;
console.log("logical and",x<y && x==5)//and operator
console.log("logical orr",x<y || x==5)//orr operator
console.log(!true)// not operator
console.log(!false)// not operator