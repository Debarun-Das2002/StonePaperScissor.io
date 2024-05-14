let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    // console.log("Game is draw");
    msg.innerText="Game was Draw,Try again!"
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`You won, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("you lose");
        msg.innerText=`You lost, ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}

const genCompChoice=()=>{
    const optins=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return optins[randIdx];
}

const playGame=(userChoice)=>{
    // console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    // console.log("Comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?false:true;
        }else{
            userWin=compChoice==="scissor"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})