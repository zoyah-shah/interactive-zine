// define our first variable 
// when someone clicks on the red circle, background changes to red


// define first variable, red-circle


    let redCircle = document.querySelector(".red-circle");
  



// what happens when someone interacts with the red circle
function turnRed(){
    document.body.style.background = "red";
}

// add an event listener
// when someone clicks on the red circle, change the background red 

redCircle.addEventListener("click", turnRed);