
let buttonColours =["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

var started = false;
var level = 0;

$(document).on("keypress", function() {
    if (!started) {

      nextSequence();
      started = true;
    }
  });

$(".btn").on("click", function(){
    var userChoosenColor = $(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);

  animatePress(userChoosenColor);
});

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


