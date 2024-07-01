let userScore=0;
let compScore=0;

let compChoice;
let userChoice;

const uScore= document.querySelector("#user-score");
const cScore= document.querySelector("#comp-score");

const btn = document.querySelector("#btn");



// let userWin= true;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const msgContainer = document.querySelector("msgcontainer");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        userChoice=choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

const gameDraw= ()=>{
    console.log("Game Was Draw");
    msg.innerText="Game Was Draw !!";
    msg.style.backgroundColor = "yellow";
    msg.style.color="#000080";
};

const showWinner = (userWin) =>{
    if(userWin == true)
      {
        console.log("user win");
        msg.innerText=`You Win. Your ${userChoice} Beats ${compChoice}`; 
        msg.style.backgroundColor = "green";
        msg.style.color="white";
        userScore++;
        uScore.innerText = userScore;

      }
      else{
        console.log("computer Win");
        msg.innerText=`You Lose. Computers ${compChoice} Beats ${userChoice}`; 
        msg.style.backgroundColor = "red";
        msg.style.color="white";
        compScore++;
        cScore.innerText = compScore;

      }

};

const playGame= (userChoice) =>{

    console.log("user choice= ",userChoice);

     compChoice=genCompChoice();
    console.log("Computer choice= ",compChoice);

   

    if(userChoice === compChoice)
    {
           gameDraw();
    }
    else{
        var userWin= true;

        if(userChoice==="rock")
        {
            //paper,scissors
 
            userWin = compChoice === "paper" ? false : true;
            
        }
        else if(userChoice === "paper")
        {
          //rock,scissors
           userWin = compChoice === "scissors" ? false : true; 
        }
        else 
           {
             //rock,paper

             userWin = compChoice === "rock" ? false : true;

           }

           showWinner(userWin);

    }


};

const rstBtn = () =>{
  userScore=0;
  compScore=0;
  uScore.innerText=userScore;
  cScore.innerText=compScore;
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor="#081b31";
  msg.style.color="white";
  
  // msgContainer.style.backgroundColor="black";
  // msg.style.textColor="black";

};

btn.addEventListener("click",rstBtn);