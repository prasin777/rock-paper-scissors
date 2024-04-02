const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const refresh = document.querySelector("#refresh");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

let userScore = 0;
let compScore = 0;

const getCompChoice = () => {
    const options = ["rock","paper","scissors"];
    let choice = Math.floor(Math.random()*3);
    return options[choice];
}

refresh.addEventListener("click", () => {
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#00171f";
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
});

let showWinner = (userWin,compChoice,userChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("YOU WON !!");
        msg.innerText = `You won !. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("YOU LOSE");
        msg.innerText = `You lost.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

let playGame = (userChoice) => {
    console.log("choice of user is ", userChoice);
    const compChoice = getCompChoice();
    console.log("choice of computer is", compChoice);

    if(compChoice === userChoice){
        console.log("game was draw.");
        msg.innerText = "Game was draw";
        msg.style.backgroundColor = "#00171f";
    } 
    
    let userWin = true;
    if(userChoice === "rock"){
        //paper,scissors.
        userWin = compChoice === "paper" ? true : false;
    } else if(userChoice === "paper"){
        //rock,scissrors.
        userWin = compChoice === "rock" ? true : false;
    } else{
        //rock,paper
        userWin = compChoice === "paper" ? true : false;
    }

    if(compChoice != userChoice) showWinner(userWin,compChoice,userChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});