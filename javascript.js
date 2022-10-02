//Element Variables
const playerBtn = document.querySelectorAll(".playerBtn");
const roboBtn = document.querySelectorAll("roboBtn");
const announcer = document.querySelector(".announcer");
const rounds = document.querySelector(".round");
const playerPoints = document.querySelector(".playerScore");
const computerPoints = document.querySelector(".computerScore");
const scoreBlock = document.querySelector(".score");
const scoreBox = document.querySelector(".scoreBox");
const buttonBlock = document.querySelector(".buttonBlock");
const playerButtons = document.querySelector(".btnColumnOne");
const computerButtons = document.querySelector(".btnColumnTwo");
const roboRock = document.querySelector(".roboRock");
const roboPaper = document.querySelector(".roboPaper");
const roboScissors = document.querySelector(".roboScissors");

//audio
const cheer = document.getElementById("cheer");
cheer.volume = 0.1;
cheer.loop = true;
const bell = document.getElementById("bell")
bell.volume = 0.1;

function bellPlay() {
bell.currentTime = 0;
bell.play();}

//Global Variables
let playerScore = 0;
let computerScore = 0;
let round= 0;

//Game Functions
function playRound(e) {
    cheer.play();
    bellPlay();
    buttonReset();
    this.classList.add("borderChange");
    let choice = e.target.textContent;
    if (choice === "ROCK PUNCH") {
        play("ROCK")
    }
    else if (choice === "PAPER SMACK") {
        play("PAPER")
    }
    else if (choice === "SCISSOR CHOP") {
        play("SCISSORS")
    }
    round += 1;
    if (round == 10) {
        finalScore()
    }
    else{
    rounds.textContent = `ROUND ${round}`
    }  
}

function play(choice) {
    let player = choice;
    let computer = getComputerChoice();
    if (computer === player) {
        announcer.textContent ="TIE!" ;
    }
    else if (computer === "ROCK") {
        if (player === "PAPER"){
            playerScore += 1;  
            playerPoints.textContent = `${playerScore}`;
            announcer.textContent ="PLAYER WIN!";
   
        }
        else {
            computerScore += 1;
            computerPoints.textContent = `${computerScore}`
            announcer.textContent ="COMPUTER WIN!" 
        }
    }
    else if (computer === "PAPER") {
        if (player === "SCISSORS"){
            playerScore += 1; 
            playerPoints.textContent = `${playerScore}`; 
            announcer.textContent ="PLAYER WIN!";
   
        }
        else {
            computerScore += 1;
            computerPoints.textContent = `${computerScore}`;
            announcer.textContent ="COMPUTER WIN!" 
        }
    }
    else if (computer === "SCISSORS") {
        if (player === "ROCK"){
            playerScore += 1;  
            playerPoints.textContent = `${playerScore}`;
            announcer.textContent ="PLAYER WIN!";
   
        }
        else {
            computerScore += 1;
            computerPoints.textContent = `${computerScore}`;
            announcer.textContent ="COMPUTER WIN!" 
        }
    }
}

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        roboRock.classList.add("borderChange");
        return "ROCK";
        }
        else if (random === 1) {
            roboPaper.classList.add("borderChange");
            return "PAPER"
        }
        else if (random ===2) {
            roboScissors.classList.add("borderChange");
            return "SCISSORS"
        }
    }

function buttonReset() {
    playerBtn.forEach(btn => {btn.classList.remove("borderChange")});
    roboRock.classList.remove("borderChange");
    roboPaper.classList.remove("borderChange");
    roboScissors.classList.remove("borderChange");
}

//Play again button
const playAgain = document.createElement("button");
playAgain.classList.add("playAgain");
playAgain.textContent = "Fight Again?";
playAgain.addEventListener("click", reset)

//Post game function
function finalScore(){
    scoreBox.style.width= "350px";
    rounds.textContent = "FINAL SCORE";
    if (playerScore === computerScore){
        announcer.textContent = "TIED MATCH!"
    }
    if (playerScore > computerScore){
        announcer.textContent = "MAN WINS THE MATCH!"
    }
    if (playerScore < computerScore) {
        announcer.textContent = "ROBO WINS THE MATCH!"
    }
    buttonBlock.removeChild(playerButtons);
    buttonBlock.removeChild(computerButtons);
    buttonBlock.style.cssText = "justify-content: center; align-items:center";
    buttonBlock.appendChild(playAgain);
}

function reset() {
    location.reload()
}

//Event
playerBtn.forEach(btn => {btn.addEventListener("click", playRound)});