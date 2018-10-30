alert('Press any letter on the keyboard to begin playing');

var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var won = 0;
var lost = 0;
var attempts = 10;
var guessed = [];

var letter = alpha[Math.floor(Math.random() * alpha.length)];

document.onkeypress = function(event) {
    var guess = event.key;

    if(guess === letter) {
        won++;
    } else {
        attempts--;
    }

    if(attempts === 0) {
        lost++;
    }

    document.getElementById('wins').innerHTML = "Wins: " + won;
    document.getElementById('losses').innerHTML = "Losses: " + lost;
    document.getElementById('guesses-left').innerHTML = "Guesses Left: " + attempts;
};