// DOM- Document Object Model
// DOM Manipulation
// With the help of DOM you manipulate the html dynamically 




// 1st method  
// get element by id
let elem = document.getElementById('click'); // you access the click id by this
 console.log(elem);


// get elements by class
let p1=document.getElementsByClassName('container');// you access the container class by this
console.log(p1); 
// p1[0].style.background ="purple"; // by this first container class color is change



p1[0].classList.add("bg-primary") // by this bg-primary is add in this class
p1[0].classList.add("text-success") // by this you add the class

// and you also remove the class

p1[0].classList.remove("text-success") // by this you can remove any class you need


console.log(elem.innerHTML) // to see the inner html this is used
console.log(elem.innerText) // to see the inner text of html this is  used
console.log(p1[0].innerHTML)
console.log(p1[0].innerText)


//get elements by tag name 
Tn=document.getElementsByTagName('h2');
console.log(Tn);
createdElement=document.createElement('div');
createdElement.innerText="this is created paragraph"; // by this you add the tag and content easily

Tn[0].appendChild(createdElement);
createdElement2=document.createElement('div');
createdElement2.innerText="this is boult";

Tn[0].replaceChild(createdElement2,createdElement); // by this you replace the tag and add new content easily


 // removeChild(Element); // this remove the element 

//selecting using the query
sel =document.querySelector('.container')
console.log(sel);
sel =document.querySelectorALL('.container')
console.log(sel);



 // any more DOM manipulation present...
