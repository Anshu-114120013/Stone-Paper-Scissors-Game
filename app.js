let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    // console.log("draw game");
    msg.innerText="Game was draw, Play again.";
    msg.style.backgroundColor="blue";
};

const winGame=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) =>{
    const compChoice=getCompChoice();
    // console.log(userChoice,compChoice);
    if(compChoice===userChoice){
        drawGame();
    }
    else if( (userChoice==="rock" && compChoice==="scissors")|| (userChoice==="paper" && compChoice==="rock") || (userChoice==="scissors" && compChoice==="paper")){
        winGame(true,userChoice,compChoice);
    }
    else{
        winGame(false,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});