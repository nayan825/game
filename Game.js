let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
   const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() * 3 );
    return options[randIdx];
};

const drawGame= () => {
    // console.log("Game is draw.");
    msg.innerText="THE GAME WAS DRAW";
    msg.style.backgroundColor="aqua"
};



const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText=`YOU WIN ! YOUR ${userChoice}  beats ${compChoice}`;
        msg.style.backgroundColor="Green"
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you loose");
        msg.innerText=`YOU LOOSE ! ${compChoice}  beats  YOUR ${userChoice}`;
        msg.style.backgroundColor="red"
    }

};
    



const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    // Genarate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=", compChoice);


    if(userChoice===compChoice){
        drawGame();
    } else {
        let userWin=true;
        if(userChoice==="rock"){
            // scissor,paper
            userWin = compChoice==="paper" ? false:true;
        } else if(userChoice ==="paper") {
            // rock,scissor
            userWin = compChoice ==="scissor"?false:true;
        }else{
            // rock,paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};




choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id")
       playGame(userChoice);
    });
});