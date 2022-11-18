
let buttonColours =["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

var started = false;
var level = 0;

$(document).on("keypress", function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").on("click", function(){
    var userChoosenColor = $(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    
    playSound(userChoosenColor);
    
    animatePress(userChoosenColor);

    checkAnswer(userClickedPattern.length-1)
});


function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
       console.log("success");
       if (userClickedPattern.length === gamePattern.length){
           setTimeout(function () {
               nextSequence();
             }, 1000);
           }
         } else {
            playSound("wrong.mp3");
            $("body").addClass("game-over");
            setTimeout(function () {
                $("body").removeClass("game-over");
              }, 200);
            $("h1").text("Game Over, Press Any Key to Restart");
           console.log("wrong");
         }
    }
   

function nextSequence() {

    level++;
    
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}
nextSequence()

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}


