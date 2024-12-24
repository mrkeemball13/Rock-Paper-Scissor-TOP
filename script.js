console.log("HELLOOOOOOO WORLD MF");

let humanScore = 0
let compScore = 0

function getCompChoice() {

    let comp = (Math.floor(Math.random() * 100) + 1) % 3

    switch (comp) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2: 
            return "Scissor"
    }
    
}

function getHumanChoice() {
    
    let human = prompt("Please choose: Rock or Paper or Scissor");
    human = human.toLowerCase()
    if (human == "rock" || human == "paper" || human == "scissor") {
        console.log(human);
        
    } else {
        console.log("False entry");
        getHumanChoice();
        
    }
    return human[0].toUpperCase() + human.slice(1).toLocaleLowerCase()
    
}



function playGame() {

    let i = 0

    function playRound(human, comp) {
        if (comp == "Rock") {
            if (human == "Paper") {
                humanScore += 1
            } 
            else if (human == "Scissor") { 
                compScore += 1
            }
            
        } 
        else if (comp == "Paper"){
            if (human == "Rock") {
                compScore += 1
            } 
            else if (human == "Scissor") {
                humanScore += 1
            }
            
        }
        else if (comp == "Scissor"){
            if (human == "Rock") {
                humanScore += 1
            } 
            else if (human == "Paper") {
                compScore += 1
            }
            
        }
        alert("MATCH #" + i + "\nHuman vs Comp\n" + human + " vs " + comp + "\nCurrent Score:\nH:  " + humanScore + " C: " + compScore);
        
      }

    while (i < 5) {
        i += 1
        const humanSelection = getHumanChoice();
        const computerSelection = getCompChoice();
  
        playRound(humanSelection, computerSelection);

    }
    alert("Final Score\nHuman Score :" + humanScore + "\nComputer Score: " + compScore)
}

playGame()
  



