let gamePattern = [];
let userClickedPattern = [];
let buttonColours =["red", "blue", "green", "yellow"];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}
nextSequence()


$(".btn").on("click", function(){
    var userChoosenColor = $(this).attr("id");
    $(this).fadeOut(100).fadeIn(100);
    var audio = new Audio("/sounds/" + userChoosenColor + ".mp3");
    audio.play();
    userClickedPattern.push(userChoosenColor);
    console.log(userClickedPattern);
});

function playSound(name){
    
}


