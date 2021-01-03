var timer = 60;
var timerelem = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var scoreelem = document.querySelector('#scoreelem');
var btmpnl = document.querySelector('#btmpnl');
var guessNumber;
var score = 0;

setInterval(function(){
    if(timer > 0){
        --timer;
        timerelem.textContent = timer;
    }
    else{
        btmpnl.innerHTML = '<h1 id="center">Game Over !<h1>';
    }
} , 1000);

function makeBubbles(){
    for(var i = 0; i<160; i++){
        var randomNumber = Math.floor(Math.random()*10);
        var template = `<div class="bubble">${randomNumber}</div>`;
        btmpnl.innerHTML += template;
    }
}

makeBubbles();

function getNewGuess(){
    guessNumber = Math.floor(Math.random()*10);
    hitelem.textContent = guessNumber;
}

btmpnl.addEventListener('click', function(details){
    var clickedBlbValue = details.target.textContent;
    if(clickedBlbValue == guessNumber){
        score = score + 10;
        scoreelem.textContent = score;
        getNewGuess();
        btmpnl.innerHTML = '';
        makeBubbles();
    } 
});

getNewGuess();