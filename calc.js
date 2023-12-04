let pScore = 0; // Player's score
let cScore = 0; // Computer's score
const btns = document.querySelectorAll('input'); // Buttons

function compPlay() { // Computer's play function
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableBtns() { // Function to disable buttons
    btns.forEach(btn => {
        btn.disabled = true;
    });
}

function playRnd(playerSel) { // Play round function
    let compSel = compPlay();
    let res = "";

    if ((playerSel == 'rock' && compSel == 'scissors') ||
        (playerSel == 'scissors' && compSel == 'paper') ||
        (playerSel == 'paper' && compSel == 'rock')) {
        
        pScore += 1;
        res = ('You win! ' + playerSel + ' beats ' + compSel
            + "<br><br>Your score: " + pScore + "<br>CPU score: " + cScore);

        if (pScore == 5) {
            res += '<br><br>You won! Reloading...'
            disableBtns();
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }
    else if (playerSel == compSel) {
        res = ('It\'s a tie. You both chose ' + playerSel
            + "<br><br>Your score: " + pScore + "<br>CPU score: " + cScore);
    }
    else {
        cScore += 1;
        res = ('You lose! ' + compSel + ' beats ' + playerSel
            + "<br><br>Your score: " + pScore + "<br>CPU score: " + cScore);

        if (cScore == 5) {
            res += '<br><br>You lost! Reloading...'
            disableBtns();
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }

    document.getElementById('result').innerHTML = res;
}

btns.forEach(btn => {
    btn.addEventListener('click', function(){
        playRnd(btn.value);
    });
});
