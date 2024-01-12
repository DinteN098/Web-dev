var buttonColors = ["red", "blue", "green", "yellow"]; 
var gamePattern = []; //machine's pattern
var userClickedPattern = [];// user's pattern
var counter = 0
var level = 0; //current level

//listen to when a button with the class .btn is clicked and call a function
$(".btn").click(function(){

    //gets the id "color" from the button pressed
    var userChosenColour = $(this).attr("id");
    //adds the pressed button to the userClickedPattern
    userClickedPattern.push(userChosenColour);
    
    //check if user doesn't click too many times before next color is chocen
    if (counter > gamePattern.length - 1){
        gameOver()
    }

    //comparing the user's pattern to the machine's pattern
    else if(userClickedPattern[counter] == gamePattern[counter]){
        //if user is gets the latest color right then machine choses next sequence
        if (counter == gamePattern.length -1){
            if (userClickedPattern[userClickedPattern.length -1] == gamePattern[gamePattern.length -1]){
                //resetting users pattern so he gets all the sequence from the beginning
                userClickedPattern = [];
                counter = 0;
                setTimeout(nextSequence, 1500);
            }
        }
    }
    
    else {
        gameOver()
    }

    counter++;
    playSound(userChosenColour);
    animatePress(userChosenColour);

})

//listen for a keydown in the website and call a function to start the game
$(document).keypress(function(event){

    // what to do when a key is pressed
    switch(event.key){
        //in case the key is 'a' then start the sequence

        case "a":
            if (level == 0){
                //change h1 when game starts
                $("h1").text("Level " + level);
                //get the next sequence
                nextSequence();
                //compare
            }

        break;

        default: 
        $("h1").text("Level " + level);
        //get the next sequence
        nextSequence();
    }

})

//function that selects a random color
function nextSequence(){

    counter = 0

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
    $("h1").text("Level " + level);
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

function gameOver(){
    //plays sound if user clicks incorrect color
    var gameOver = new Audio("./sounds/wrong.mp3")
    gameOver.play()

    //reseting levels, counters, and patterns
    counter = 0;
    level = 0;
    userClickedPattern = [];
    gamePattern = [];

    //changing text for game over and changing background color to red if user got answer wrong
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over")
    setTimeout(function(){$("body").removeClass("game-over")}, 200)
}