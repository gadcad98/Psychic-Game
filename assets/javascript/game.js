alert('Press any letter on the keyboard to begin playing');

var won = 0;
var lost = 0;
var attempts = 9;
var guessedSoFar = [];

function randLetter() {

    var letters = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    
    var letter = letters[Math.floor(Math.random() * letters.length)];
    
    for(var i = 0; i < letters.length; i++) {
        if(i == letter) {
            alert("You guessed the letter I was thinking of!");
            won++;
        } else {
            alert("You failed to guess the correct letter. Try again!");
            lost++;
        }
    }
};