// section -1 id and classes
const choices = document.querySelectorAll('.choice')

var userScore = document.querySelector('#user-score')
var computerScore = document.querySelector('#computer-score')

var restart = document.getElementById('restart')

var model = document.querySelector('.model')

var username = prompt('Enter Name');

// scoreboard

var scoreBoard = {
    user: 0,
    computer: 0,
}


// section 2 - functions


function play(e) {

    var userChoice = e.target.id;
    var computerChoice = getComputerChoice();

    console.log(userChoice, computerChoice);

    // get winner
    const winner = getWinner(userChoice, computerChoice);

    console.log(winner)

    showWinner(winner, userChoice, computerChoice)

}


function getComputerChoice() {
    var number = Math.floor(Math.random() * 3)

    if (number == 0) return 'rock';
    else if (number == 1) return 'paper';
    else if (number == 2) return 'scissors';
    else return 0;
}

function getWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return 'draw'
    }
    else if ((userChoice == 'rock' && computerChoice == 'scissors') || (userChoice == 'paper' && computerChoice == 'rock') || (userChoice == 'scissors' && computerChoice == 'paper')) {
        return 'user'
    }
    else return 'computer'
}


function showWinner(winner, userChoice, computerChoice) {

    if (winner == 'computer') {
        scoreBoard.computer++;
        document.getElementById('exampleModalLabel').innerHTML = `<h5 class="bg-danger"> ${winner} Win !</h5>`

    } else if (winner == 'user') {
        scoreBoard.user++;
        document.getElementById('exampleModalLabel').innerHTML = `<h5 class="bg-success"> ${username} Win !</h5>`
    } else {
        document.getElementById('exampleModalLabel').innerHTML = `<h5 class="bg-warning"> Draw !</h5>`
    }


    document.getElementById('computerchoicemodel').innerHTML = `
                                                                    <h5>${username} Chooses : ${userChoice}</h5>
                                                                    <h5>Computer Chooses : ${computerChoice}</h5>
                                                                    `
    document.getElementById('user-score-board').innerHTML = `${username} : ${scoreBoard.user}`
    document.getElementById('computer-score-board').innerHTML = `Computer : ${scoreBoard.computer}`

}

// section 3 - eventListners


choices.forEach(choice => choice.addEventListener("click", play));

// restart
restart.addEventListener('click', event => {

    username = prompt('Enter Name');

    scoreBoard.user = 0;
    scoreBoard.computer = 0;
    document.getElementById('user-score-board').innerHTML = `${username} : ${scoreBoard.user}`
    document.getElementById('computer-score-board').innerHTML = `Computer : ${scoreBoard.computer}`
})






