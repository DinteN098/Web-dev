var audio = new Audio("sounds/tom-1.mp3"); // new object with audio

var buttons = document.querySelectorAll(".drum"); //a list with all the buttons 

function playSound(){ //function that plays the sound when buttons are clicked

    var currentButton = this.innerHTML; //current button

    buttonAnimation(currentButton)

    console.log(currentButton) //printing that button name

    switch (currentButton){ // if currentButton has a specific value like "w" then it would run case w and play the audio for that
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();  // method that plays the audio
        break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;


        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;


        case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "k":
        var kbass = new Audio("sounds/kick-bass.mp3");
        kbass.play();
        break;


        case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        default: console.log(currentButton); //you never know when something could go wrong
    }
}
    

for (var i =0; i < (buttons.length); i++){ // loop that adds click eventlisteners to all the buttons in the list
    document.querySelectorAll(".drum")[i].addEventListener("click", playSound)
}

document.addEventListener("keydown", function(event){ //event that listens for key presses and calls a function if key is pressed
    
    buttonAnimation(event.key)

    switch (event.key){ //possible events in case key are wasdjkl to play a sound
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
        
        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;


        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;


        case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "k":
        var kbass = new Audio("sounds/kick-bass.mp3");
        kbass.play();
        break;


        case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        default: console.log(currentButton); //you just never know
    }
    console.log(event.key)
    }
)

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey); 
    activeButton.classList.add("pressed"); //adds pressed class to the current button classes
    setTimeout(function(){activeButton.classList.remove("pressed");}, 1000);
   
}

// document.queySelection(".class") this finds what html object has that class