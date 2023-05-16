//Q1.
let marks= {
    mohit:90 ,
    mudit:78 ,
    sachin:67 ,
    aloo:93 
}
// for(let i=0 ;i<Object.keys(marks).length;i++){
//      console.log("the marks of " + Object.keys(marks)[i] +"are " + marks[Object.keys(marks)[i]]);
// }

//Q2.
// for in loop
// for (let key in marks){
//     console.log(key) ;
//     console.log("the marks of " + key + " are" + marks[key]) ;
// }

//Q3.
// let cn=4 ;
// let i ;
// while(i != cn){
//  i = prompt("enter the number") ;
//  console.log("try again ")
// }
// console.log("you have entered a correct number") ;

// Q4.
const mean =  (a,b,c,d)=>{
return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))