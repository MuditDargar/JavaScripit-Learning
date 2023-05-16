// for(let i=0 ;i<5 ;i++){
//     console.log(i);
// }

// program to sum n natural numbers;
// let sum=0 ;
// let a=prompt("enter the number");
// a=Number.parseInt(a);
// for(let i=1 ;i<=a ;i++){
//     sum=sum+i ;
// }
// console.log(sum);

// program to factorial lof a number ;
// let fact=1 ;
// let num = prompt("enter the number");
// num=Number.parseInt(num);
// for(let j=1 ; j<=num ;j++){
//     fact=fact*j ;
// }
// console.log(fact);


let obj ={
    harry: 90,
    lion:45 ,
    shiv : 44 ,
    rolex: 76,
}

//for in loop
for(let a in obj){
    // console.log(a)
    console.log("marks of " +a +"are " + obj[a])
}

// for of loop
for(let b of "lion"){
    console.log(b);
}

