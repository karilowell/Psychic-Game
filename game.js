var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guessLeft = 9;
var computerChoice = options[Math.floor(Math.random() * options.length)];
var userLetters = new Array();

//Reset values of user input array, guessleft and computer choose another letter
function resetScore() {
    userLetters.splice(0, userLetters.length);
    guessLeft = 9;
    computerChoice = options[Math.floor(Math.random() * options.length)];
}

//score
function updateScoreboard(win, loss, guessLeft, userLetters) {

    var score = "Wins: " + win + "<br>Loss: " + loss + "<br>Guess left: " + guessLeft + "<p>Your guess so far</p> ";

    //inner HTML
    document.getElementById("score").innerHTML = score;
    document.getElementById("user-letters").innerHTML = userLetters;
}

//functions and onkey events
document.onkeyup = function(event) {

    //If events
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var userGuess = event.key.toLowerCase();
        guessLeft--;
        //Append user input letter to the new array
        userLetters.push(userGuess);

        //If the user guess is correct
        if (userGuess === computerChoice) {
            win++;
            resetScore();
        }
        updateScoreboard(win, loss, guessLeft, userLetters);

        // if guess left is 0
        if (guessLeft < 1) {
            loss++;
            resetScore();
        }
        updateScoreboard(win, loss, guessLeft, userLetters);
    }
    //pop up alert if wrong key pressed
    else {
        alert("Enter a letter");
    }
};
