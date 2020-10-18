function playGame(choice, comp) {
    "use strict";
    if ((choice === "rock") && (comp === 'scissor')) {
        return "User";
    }
    if ((choice === "paper") && (comp === 'rock')) {
        return "User";
    }
    if ((choice === "scissor") && (comp === 'paper')) {
        return "User";
    }

    if ((choice === "paper") && (comp === 'scissor')) {
        return "Computer";
    }
    if ((choice === "rock") && (comp === 'paper')) {
        return "Computer";
    }
    if ((choice === "scissor") && (comp === 'rock')) {
        return "Computer";
    }
}


function rockPaperScissor() {
    "use strict";
    
    var comp, choice, winner, options = ['rock', 'paper', 'scissor'];
    
    do {
            
        choice = window.prompt("Choose either rock, paper or scissor?").toLowerCase().trim();
        comp = options[Math.floor((Math.random()) * 3)];
           
        window.console.log("Computer's choice:" + comp);
        window.console.log("User's choice:" + choice);
            
    } while ((choice === comp) || (!options.includes(choice)));
    
    winner = playGame(choice, comp);
    window.alert("Winner : " + winner);
}

rockPaperScissor();