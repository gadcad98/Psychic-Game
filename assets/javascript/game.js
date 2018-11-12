alert('Press any letter on the keyboard to begin playing');

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;

var letter = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeypress = function(event) {
    var guess = event.key;
    
    console.log(event.key);
    
    if (guess === letter) {
        wins++,
        guesses = 10;
    } else {
        guesses--;
    }
    
    if (guesses === 0) {
        losses++,
        guesses = 10;
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses-left').innerHTML = "Guesses Left: " + guesses;
    document.getElementById('guessed').innerHTML = "Your Guesses so Far: " + guess;
};


// So you can just put line 9 into the if statement to reset your letter.
// Or what you can do is put the variables inside a function, and just call it a reset function or something
// and put that function into the if statement, depending on what happen