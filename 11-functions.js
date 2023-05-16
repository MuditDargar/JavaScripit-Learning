// The one way of making the function
function one_plus_avg(a,b){
    return 1+(a+b)/2 ;
}
// The  second way of making the function
const sum = (p,q)=>{
    return p+q;
}

//void function
const hello=()=>{
    console.log("Hello World");
    return "jai ram ji ki";
}
console.log("the one plus average is",one_plus_avg(16,12));
console.log("the one plus average is",one_plus_avg(20,32));
let v=hello();
console.log(v);
hello();