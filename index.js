


// 1. ways to print in Js
// 1. Ways to print in javaScript
//console.log("hello World")

// alert("me");
//document.write("this is your honey singh");



// 2.  javascript console API

// console.log("jai shree ram", 4 + 6, "another log");
// console.warn("dikkat hai");
// console.error("bhai error hai yeah toh");
// console.clear();
// console.assert();


// 3. JavaScript Variable
// what are variables ? => container to store the data values
var number1=44 ;
var number2=56 ;
//console.log(number1+number2);

//4.  Data types in JavaScript


// this is the numbers
var n1= 45 ;
var n2= 444 ;
//console.log(n1+n2);
//thhis is the string
var str1="this is the string" ;
var str2=' this is the string ' ;

//console.log(str1 + str2 );

//Objects
var marks ={
    ravi:34 ,
    shubham :78 ,
    harry : 99.7 ,
    
}
// console.log(marks);

//Booleans
var a=true ;
var b=false ;
//console.log(a);
//console.log(b);
//console.log(a+b);
//console.log(a*b);

var und = undefined ;
//console.log(undefined);
var holaa ;
//console.log(holaa);

var n= null ;
//console.log(n);


// At a very high level ,there are two types of data types in java script
// 1.primitive: undefined,null,number,string,boolean,symbol
// 2. reference data type :Arrays ,Objects.

var arr =[1,2,3,"jai shree ram ",4,5];
// console.log(arr);
// console.log(arr[3]);


// &&& Oerators in JavaScript &&&/
var z1= 100;
var z2= 10 ;

// var Z = z1+z2 ;
// console.log("the sum of z1 and z2 is",Z);
// Arithematic operator
// console.log("the sum of z1 and z2 is",z1+z2);
// console.log("the product of z1 and z2 is",z1*z2);
// console.log("the divide of z1 and z2 is",z1/z2);
// console.log("the remainder of z1 and z2 is",z1%z2);
// console.log("the substraction of z1 and z2 is",z1-z2);

//Assignment operators
var c =z2;
c +=90 ;// c= c+90
c -=20 ;// c= c-20
c *=12 ;// c=c*12 
// console.log(c);
//comparision operators
var a1 = 10 ;
var a2 = 20 ;
// console.log(a1==a2); 
// console.log(a1!=a2); 
// console.log(a1<=a2); 
// console.log(a1>=a2); 
// console.log(a1>a2); 
// console.log(a1<a2); 

// logical operators

// logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// // logical  orr
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// //logical not
// console.log(!true);
// console.log(!false);


// functions  in javascripit 
// DRY = Do not repeat yourself
// function sum(a,b){
//     return a+b ;
// }

// c= sum (10,90);
// c1=sum(20,40);
// console.log("the sum of 2 number is",c,c1);


// function simint(p,r,t){
//     return p*r*t/100 ;
// }

// interest = simint(10,20,30);
// interest1 = simint(10,70,40);
// console.log("the simple interst is",interest,interest1);

// Conditional in java script
// var age= 2;
// if(age>18){
//     console.log("you are eligible for votes");
// }
// else{
//     console.log("nahi de sakhte vote");
// }

// if  ladder
// no =12 
// if(no>5){
//     console.log("you are champ")
// }
//  if ( no>10){
//     console.log("jsdd")
//  }
//  else{
//     console.log("fenefl");
//  }

// if  else ladder
// no =12 
// if(no>5){
//     console.log("you are champ")
// }
//   else if ( no>10){
//     console.log("jsdd")
//  }
//  else{
//     console.log("fenefl");
//  }



// loop in javascript 
// var arr =[1,2,3,4,5,6,7,8,9,10] 
// console.log(arr)
// for(var i=0 ;i<arr.length ;i++){
//     if(i==2){
//         // break ;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element)
// })

// const ac =0 ;
// ac++ ;
// ac=ac+1 ;
let j=0 ;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++ ;
// }

// do{
//     console.log(arr[j]);
//     j++ ;
// }while(j<arr.length)

// let myARR = ["fan","camera",34 , null,undefined,true]
// //array methods
// console.log(myARR)
// myARR.pop()
// myARR.push("jsk")
// // myARR.shift()
// let newLen = myARR.unshift("mudit")
// console.log(newLen)
// console.log(myARR)
// console.log(myARR.length)
// console.log(myARR.sort())
// console.log(myARR.toString())


// String Method In javascript
let mystring = "mudit is a good boy good";

// console.log(mystring.length)

// console.log(mystring.indexOf("boy"))
// console.log(mystring.lastIndexOf("good"))


// // slicing of string
// console.log(mystring.slice(0,5))
// console.log(mystring.slice(9,16))

// // replacing the string
// let d =mystring.replace("good","bad")
// console.log(d,mystring)



let myDate = new Date();
console.log(myDate); 
console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getMonth())
console.log(myDate.getDate())
console.log(myDate.getDay()) // sun mon tue wed thrus fri sat
console.log(myDate.getHours()) 

// DOM (Document object model)Manupulation
let elem= document.getElementsByClassName('dd');
console.log(elem);

let elemclass=document.getElementsByClassName("dd");
console.log(elemclass);
document.body.style.color = "red";
