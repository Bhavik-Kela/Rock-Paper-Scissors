let userScoreCount = 0;
let compScoreCount = 0;

const images = document.querySelectorAll(".image");
const userScore = document.querySelector(".user-score1");
const compScore = document.querySelector(".comp-score1");
const mssgBtn = document.querySelector(".play")

const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors","rock", "paper", "scissors","rock", "paper", "scissors","rock", "paper", "scissors","rock", "paper", "scissors","rock", "paper", "scissors",];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];

}

const showWinner = (userWin) =>{
    if(userWin === false){
        mssgBtn.style.backgroundColor = "green";
        mssgBtn.innerText = "YOU WIN"
        userScoreCount++;
        userScore.innerText = userScoreCount;
        mssgBtn.style.color = "white";
       
       

    }

    else{
        mssgBtn.style.backgroundColor = "red";
        mssgBtn.innerText = "YOU LOSE";
        compScoreCount++;
        compScore.innerText = compScoreCount;
        mssgBtn.style.color = "white";
        
    }
}
    



const playGame = (userChoice) => {
    const compChoice = generateCompChoice();
    let userWin;
    if (userChoice === "rock image" && compChoice === "rock") {
        mssgBtn.innerText = "It'S A DRAW";
        mssgBtn.style.backgroundColor = "yellow";
        mssgBtn.style.color = "black";
        console.log(userChoice,compChoice);
        return;
    }
    else if(userChoice === "paper image" && compChoice === "paper"){
        mssgBtn.innerText = "It'S A DRAW";
        mssgBtn.style.backgroundColor = "yellow";
        mssgBtn.style.color = "black";
        console.log(userChoice,compChoice);
        return;

    }
    else if(userChoice === "scissors image" && compChoice === "scissors"){
        mssgBtn.innerText = "It'S A DRAW";
        mssgBtn.style.backgroundColor = "yellow";
        mssgBtn.style.color = "black";
        console.log(userChoice,compChoice);
        return;
        
    }

    else {
        if (userChoice === "rock image") {
            userWin = compChoice === "paper" && userWin === compChoice !== "rock";
            
        }
        else if(userChoice === "paper image"){
            userWin = compChoice === "scissors" && userWin === compChoice !== "paper";

        }
        else if(userChoice === "scissors image"){
            userWin = compChoice === "rock" && userWin === compChoice !== "scissors";
        }
    }
    showWinner(userWin);


    console.log("userChoice-",userChoice,"compChoice-",compChoice);

}

images.forEach((image) => {
    image.addEventListener("click", () => {
        const userChoice = image.getAttribute("class");
        playGame(userChoice);
    })

})


