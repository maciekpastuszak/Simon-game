let gamePattern = [];
let buttonColours =["red", "blue", "green", "yellow"];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}
nextSequence()


$(".btn").on("click", function(){
    var userSelectedColor = $(this).attr("id");
    console.log(userSelectedColor);
    $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
})

