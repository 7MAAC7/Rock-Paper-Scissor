//console.log("Hola mundo");
function getComputerChoice(){
    let number = Math.floor(Math.random()*3) +1 ; 
    if(number === 1){
        return ("rock");
    }
    else if (number === 2){
        return ("paper");
    }
    else{
        return("scissors");
    }
}
function getHumanchoice(){
    let choice = prompt("haz una eleccion / make your choice:");
    return choice.toLowerCase();
}
function playRound(hChoice, cChoice){
    if(hChoice === cChoice){
        let result = "Draw!"
        return result;
    }
    else if(hChoice ==="scissors" && cChoice==="rock"){
        result = "Computer Win, Rock beats scissors";
        computerScore++;
        return result;
    }
    else if(hChoice ==="paper" && cChoice==="rock"){
        let result = "Human win, Paper beats rock!"
        humanScore++;
        return result;
    }
    else if(hChoice ==="paper" && cChoice==="scissors"){
        let result = "Computer win, Scissors beats paper!"
        computerScore++;
        return result;
    }
    else if (hChoice ==="rock" && cChoice==="scissors"){
        let result = "Human win, Rock beats Scissors!"
        humanScore++;
        return result;
    }
    else if(hChoice ==="rock" && cChoice==="paper"){
        let result = "Computer win, Paper beats rock!"
        computerScore++;
        return result;
    }
    else if(hChoice ==="scissors" && cChoice==="paper"){
        let result = "Human win, Scissors beats Paper!"
        humanScore++;
        return result;
    }
    
}
let humanScore = 0, computerScore = 0;


//console.log(getComputerChoice());
//console.log(getHumanchoice());


function playGame(){
    
    console.log(playRound(getHumanchoice(), getComputerChoice()));
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log(playRound(getHumanchoice(), getComputerChoice()));
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log(playRound(getHumanchoice(), getComputerChoice()));
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log(playRound(getHumanchoice(), getComputerChoice()));
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    console.log(playRound(getHumanchoice(), getComputerChoice()));
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    if(computerScore > humanScore){
        return console.log("Computer win : ",computerScore);

    }
    else if(computerScore< humanScore){
        return console.log("Human win : ",humanScore)

    }
    else{
        return console.log("Draw? or something else");
    }
}
playGame();