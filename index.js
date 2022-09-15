const PAPER = "paper";
const ROCK = "rock";
const SCISSORS = "scissors";

const TIE = 1;
const WIN = 2;
const LOSE = 3;


const paperbtn  = document.getElementById("paper");
const rockbtn  = document.getElementById("rock");
const scissorsbtn  = document.getElementById("scissors");
const machineImg =  document.getElementById("cpu-image");
const scoreUser = document.getElementById("scoreuser");
const scoreMachine = document.getElementById("scorecpu");
const textResult  =document.getElementById("text-result");

var numwinMachine = 0;
var numwinUser = 0;


paperbtn.addEventListener("click", ()=>{
    play(PAPER);
});
rockbtn.addEventListener("click", ()=>{
    play(ROCK);
});
scissorsbtn.addEventListener("click", ()=>{
    play(SCISSORS);
});

function play(userOption){
    
    const machineOption = machineResult();
    const result = userResult(userOption, machineOption);

    machineImg.src = machineOption + "neon.png";
    

    switch(result){
        case TIE:
            textResult.innerHTML = "Empate";
            break;
        case WIN:
            textResult.innerHtml = "Ganaste";
            scoreUser.innerHTML = numwinUser++;
            break;
        case LOSE:
            textResult.innerHTML = "Perdiste";
            scoreMachine.innerHTML = numwinMachine++;
            break;
    }
}

function machineResult(){
    const num = Math.floor(Math.random() * 3);

    switch(num){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function userResult(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;
    }else if(userOption === ROCK){
        if(machineOption === PAPER) return LOSE;
        if(machineOption === SCISSORS) return WIN;
    }else if(userOption === PAPER){
        if(machineOption === ROCK) return WIN;
        if(machineOption ===SCISSORS) return LOSE;
    }else if(userOption === SCISSORS){
        if(machineOption === ROCK) return LOSE;
        if(machineOption === PAPER) return WIN;
    }
}