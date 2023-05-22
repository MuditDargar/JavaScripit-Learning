
//  Events in javaScript


// clicked events in JS
function clicked(){
    console.log("the button was clicked")
}

window.onload =function (){
    console.log('the document was loaded')
}

// on click on something
firstContainer.addEventListener('click',function(){
    console.log("clicked on container")
})

// mouse  over the container
firstContainer.addEventListener('mouseover',function(){
console.log("mouse on container")
})

//mouse out the container
firstContainer.addEventListener('mouseout',function(){
    console.log("mouse out of container")
})
 
// //mouseup the container
// firstContainer.addEventListener('mouseup',function(){
//     console.log("mouse up when clicked on of container")
// })

// //mousedown the container
// firstContainer.addEventListener('mousedown',function(){
//     console.log("mouse down when clicked on of container")
// })

let prevHTML=document.querySelectorALL('.container')[1].innerHTML ;
firstContainer.addEventListener('mouseup',function(){
 document.querySelectorALL('.container')[1].innerHTML=prevHTML ;
 console.log("mouse up when clicked on of container")
})


firstContainer.addEventListener('mousedown',function(){
    
    document.querySelectorAll('.container')[0].innerHTML = "<p>We have clicked</p>";

    console.log("mouse down when clicked on of container")
})
