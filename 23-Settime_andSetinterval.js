// // // Arrow functions
// function sum(a,b){
//     return a+b;
// }
// // both are same 
// // but written syntax is different
// summ = (a,b)=>{
//     return a+b;
// }

// console.log(sum(30,20));
// console.log(summ(20,30));



//Set_Time_Out
logkaro = ()=>{
    document.querySelectorAll('.container')[0].innerHTML = "<b>set interval is fired</b>";
    console.log("logkaro join bae :-)")

}
setTimeout(logkaro,2000); // mean logkaro function work after 2000 milisecond
//mean after 2sec logkaro function work then print jai shree ram


// setInterval(logkaro,2000); // mean yeah hota rahega har 2 second ke baad
clr = setInterval(logkaro,2000);
// clearInterval(clr)
// clearTimeout(clr)

//use clear interval / clear timeout to cancel setInterval / set Time out 