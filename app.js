function computerPlay () {
    let Array= ["rock","paper","scissors"];
    function rndmInt(min,max)   {
         return Math.floor(Math.random()*(max - min + 1)+min)
        }
    let randomValue = rndmInt(0,2);
    let computerchoice = Array[randomValue];
return computerchoice;
    }
let computerselect = computerPlay();
const btn = document.querySelector(".rock");
const btn1 = document.querySelector(".paper");
const btn3 = document.querySelector(".scissors");

btn.addEventListener("click", button => {
    let playerSelection = "rock";
        let countP = 0;
        let countC = 0;
        playerSelection;
        let text= playerSelection;
        let computerSelection = computerPlay();
        let Player= Boolean();
        let Computer= Boolean();

        if (playerSelection == "rock" && computerSelection == "scissors")
            {
                Player = true;
                Computer = false;
            }
        else if (playerSelection == "rock" && computerSelection =="paper")
            {
                Computer = true;
                Player = false;
            }
        else if (playerSelection == "scissors" && computerSelection =="rock")
            {
                Computer = true;
                Player = false;
            }
        else if (playerSelection == "scissors" && computerSelection == "paper")
                {
                    Player = true;
                    Computer = false;
                }
        else if (playerSelection == "paper" && computerSelection == "rock")
                {
                    Player = true;
                    Computer = false;
                }
        else if (playerSelection == "paper" && computerSelection == "scissors")
                {
                    Computer = true;
                    Player = false;
                }
        else {
            Player = false;
            Computer = false;
            console.log("no result, they are equal");
            }
       
            if( Player == true && Computer == false)
                {
                    countP = countP + 1 ;
                }
            else if ( Computer == true && Player == false )
             {
                    countC = countC + 1 ;
            }
            else
            {
                    countC = countC;
                    countP = countP;
            }

    let Playerstate = "";
    if (countP > countC)
        {
            Playerstate = "winner";
        }
    else if (countP == countC)
        {
            Playerstate = "NoWinner"
        }
        else {
            Playerstate = "Looser";
        }
    computerSelection = computerselect;
    let scoreP = countP;
    let scoreC = countC;
    document.getElementById("displaywin").textContent = "Your choice was " + playerSelection + " \n meanwhile Computer chose: "+ computerSelection;
    if (Playerstate == "Looser" )
        {
            document.getElementById("scores").textContent = "You lost :( ! with scores: "+ scoreP + "and " + scoreC;
        }
    else if (Playerstate == "winner") {
        document.getElementById("scores").textContent = "You won :) ! with scores: "+ scoreP + "and " + scoreC;
    }
    else{
        document.getElementById("scores").textContent = "No Winner ! with scores: "+ scoreP + "and " + scoreC;
    }


  });

btn1.addEventListener("click", button => {
    let playerSelection = "paper";
        let countP = 0;
        let countC = 0;
        playerSelection;
        let text= playerSelection;
        let computerSelection = computerPlay();
        let Player= Boolean();
        let Computer= Boolean();

        if (playerSelection == "rock" && computerSelection == "scissors")
            {
                Player = true;
                Computer = false;
            }
        else if (playerSelection == "rock" && computerSelection =="paper")
            {
                Computer = true;
                Player = false;
            }
        else if (playerSelection == "scissors" && computerSelection =="rock")
            {
                Computer = true;
                Player = false;
            }
        else if (playerSelection == "scissors" && computerSelection == "paper")
                {
                    Player = true;
                    Computer = false;
                }
        else if (playerSelection == "paper" && computerSelection == "rock")
                {
                    Player = true;
                    Computer = false;
                }
        else if (playerSelection == "paper" && computerSelection == "scissors")
                {
                    Computer = true;
                    Player = false;
                }
        else {
            Player = false;
            Computer = false;
            console.log("no result, they are equal");
            }
       
            if( Player == true && Computer == false)
                {
                    countP = countP + 1 ;
                }
            else if ( Computer == true && Player == false )
             {
                    countC = countC + 1 ;
            }
            else
            {
                    countC = countC;
                    countP = countP;
            }

    let Playerstate = "";
    if (countP > countC)
        {
            Playerstate = "winner";
        }
    else if (countP == countC)
        {
            Playerstate = "NoWinner"
        }
        else {
            Playerstate = "Looser";
        }
    computerSelection = computerselect;
    let scoreP = countP;
    let scoreC = countC;
    document.getElementById("displaywin").textContent = "Your choice was: "+ playerSelection + " \n meanwhile Computer chose: "+ computerSelection;
    if (Playerstate == "Looser" )
        {
            document.getElementById("scores").textContent = "You lost :( ! with scores: "+ scoreP + "and " + scoreC;
        }
    else if (Playerstate == "winner") {
        document.getElementById("scores").textContent = "You won :) ! with scores: "+ scoreP + "and " + scoreC;
    }
    else{
        document.getElementById("scores").textContent = "No Winner ! with scores: "+ scoreP + "and " + scoreC;
    }


  });
  btn3.addEventListener("click", button => {
    let playerSelection = "scissors";
        let countP = 0;
        let countC = 0;
        playerSelection;
        let text= playerSelection;
        let computerSelection = computerPlay();
        let Player= Boolean();
        let Computer= Boolean();

        if (playerSelection == "rock" && computerSelection == "scissors")
            {
                Player = true;
                Computer = false;
            }
        else if (playerSelection == "rock" && computerSelection =="paper")
            {
                Computer = true;
                Player = false;
            }
        else if (playerSelection == "scissors" && computerSelection =="rock")
            {
                Computer = true;
                Player = false;
            }
        else if (playerSelection == "scissors" && computerSelection == "paper")
                {
                    Player = true;
                    Computer = false;
                }
        else if (playerSelection == "paper" && computerSelection == "rock")
                {
                    Player = true;
                    Computer = false;
                }
        else if (playerSelection == "paper" && computerSelection == "scissors")
                {
                    Computer = true;
                    Player = false;
                }
        else {
            Player = false;
            Computer = false;
            console.log("no result, they are equal");
            }
       
            if( Player == true && Computer == false)
                {
                    countP = countP + 1 ;
                }
            else if ( Computer == true && Player == false )
             {
                    countC = countC + 1 ;
            }
            else
            {
                    countC = countC;
                    countP = countP;
            }

    let Playerstate = "";
    if (countP > countC)
        {
            Playerstate = "winner";
        }
    else if (countP == countC)
        {
            Playerstate = "NoWinner"
        }
        else {
            Playerstate = "Looser";
        }
    computerSelection = computerselect;
    let scoreP = countP;
    let scoreC = countC;
    document.getElementById("displaywin").textContent = "Your choice was: "+ playerSelection + " \n meanwhile Computer chose: "+ computerSelection;
    if (Playerstate == "Looser" )
        {
            document.getElementById("scores").textContent = "You lost :( ! with scores: "+ scoreP + "and " + scoreC;
        }
    else if (Playerstate == "winner") {
        document.getElementById("scores").textContent = "You won :) ! with scores: "+ scoreP + "and " + scoreC;
    }
    else{
        document.getElementById("scores").textContent = "No Winner ! with scores: "+ scoreP + "and " + scoreC;
    }


  });