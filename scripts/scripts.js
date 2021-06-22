'use strict';

let compScore = document.getElementById('comp-score')
let userScore = document.getElementById('user-score')

let cScore = 0;
let uScore = 0;

let startBtn = document.getElementById("startbtn");

let cChoice=document.getElementById("comp-choice");
let uChoice=document.getElementById("user-choice");
let results=document.getElementById('result');

let resBlock = document.getElementById('res');
let winners = document.getElementById('winners');

let winorlose = document.getElementById('winorlose');

function gameStart(){
    compScore.innerText=cScore;
    userScore.innerText=uScore;

    const gameStarter = document.getElementById("game-start");
    const gameStarted = document.getElementById("game-started");
    const hands = document.getElementById('hands');

    gameStarter.classList.add("hidden");
    gameStarted.classList.remove('hidden');
    hands.classList.remove('hidden');
}


function check(userChoice){
    const tab=['rock','paper','scissors'];
    let num=Math.trunc(Math.random()*3);
    let compchoice = tab[num];

    cChoice.innerText=compchoice;
    uChoice.innerText=userChoice;

    game(userChoice,compchoice)

}

function game(userChoice,compchoice){
    
    if(userChoice==compchoice){
        results.innerText="IT'S A DRAW" ;
        return;
    }

    if(userChoice=='rock'){
        if(compchoice=='scissors'){
            uScore++;
            update();
            results.innerText='YOU WIN';
            return;
        }
        else{
            cScore++;
            update();
            results.innerText='YOU LOSE';
            return;
        }
    }

    if(userChoice=='paper'){
        if(compchoice=='rock'){
            uScore++;
            update();
            results.innerText='YOU WIN';
            return;
        }
        else{
            cScore++;
            update();
            results.innerText='YOU LOSE';
            return;
        }
    }

    if(userChoice=='scissors'){
        if(compchoice=='paper'){
            uScore++;
            update();
            results.innerText='YOU WIN';
            return;
        }
        else{
            cScore++;
            update();
            results.innerText='YOU LOSE';
            return;
        }
    }
}

function update(){
    userScore.innerText=uScore;
    compScore.innerText=cScore;

    if(uScore>=10 || cScore>=10){
        hands.classList.add('hidden');
        resBlock.classList.add('hidden');
        winners.classList.remove('hidden');
        if(uScore==10){
            userScore.innerText=10;
            alert('You have won the game !!!!');
            winorlose.innerText='YOU WON THE GAME!!!!';
        }
        else{
            compScore.innerText=10;
            alert('You have lost the game');
            winorlose.innerText='YOU LOST THE GAME';
        }
    }
}

startBtn.addEventListener('click',gameStart);