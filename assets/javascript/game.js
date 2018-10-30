alert('Press any letter on the keyboard to begin playing');

var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;

var letter = alpha[Math.floor(Math.random() * alpha.length)];

document.onkeypress = function(event) {
    var guess = event.key;
    
    if (guess === letter) {
        wins++;
    } else {
        guesses--;
    }
    
    if (guess === letter) {
        guesses = 10;
    }

    if (guesses === 0) {
        losses++;
    }
    
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses-left').innerHTML = "Guesses Left: " + guesses;
    document.getElementById('guessed').innerHTML = "Your Guesses so Far: " + guess;
};