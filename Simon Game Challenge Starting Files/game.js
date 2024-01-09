var buttonColors = ["red", "blue", "green", "yellow"]; 
var gamePattern = []; //pattern that will be chosen by the machine
var userClickedPattern = [];
var level = 0; //current level

//listen to when a button with the class .btn is clicked and call a function
$(".btn").click(function(){

    //gets the id "color" from the button pressed
    var userChosenColour = $(this).attr("id");
    //adds the pressed button to the userClickedPattern
    userClickedPattern.push(userChosenColour)

    playSound(userChosenColour);
    animatePress(userChosenColour);
})

//listen for a keydown in the website and call a function to start the game
$(document).keydown(function(event){

    // what to do when a key is pressed
    switch(event.key){
        //in case the key is 'a' then start the sequence
        case "a":
            //if level is 0 then change the text on the h1
            if (level == 0){
                $("h1").text("Level " + level);
                //get the next sequence
                nextSequence();
            }

    }

})

//function that selects a random color
function nextSequence(){
    //random number from 0 - 3
    var randomNum = Math.floor(Math.random()*4);
    //assign a color from the list to the variable
    var randomChosenColour = buttonColors[randomNum];
    //add chosen color into the game pattern
    gamePattern.push(randomChosenColour);

    //flash animation when color is chosen
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    //increase level
    level++;
}


// play sound when a key is chosen or pressed
function playSound(name){
    //assign sound to a variable
    var sound =  new Audio("sounds/" + name + ".mp3");
    //play sound
    sound.play();
}

function animatePress(currentColor){
    //animates the pressed button
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){$("#" + currentColor).removeClass("pressed");}, 100)
}