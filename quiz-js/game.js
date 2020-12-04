var question = document.getElementById('question');
var choices = Array.from(document.querySelectorAll('.choice-text'));

var progressText = document.getElementById('progressText');
var progressBarFull = document.getElementById('progressBarFull');
var scoreText = document.getElementById('score');


var currentQuestions = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var avaliableQuestions = [];

let questions = [{
        question: 'JavaScript is a ___ -side programming language.',
        choice1: 'Client',
        choice2: 'Server',
        choice3: 'Both',
        choice4: 'None',
        answer: 3,
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        choice1: "Alternative to if-else",
        choice2: "Switch Statement",
        choice3: "if-then-else Statement",
        choice4: "immediate if",
        answer: 4,
    },
    {
        question: "In JavaScript, what is a block of statement?",
        choice1: "Conditional block",
        choice2: "block that combines a number of statements into a single compound statement",
        choice3: "both conditional block and a single statement",
        choice4: "block that contains a single statement",
        answer: 2,
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        choice1: "Shows a warning",
        choice2: "Prompts to complete the statement",
        choice3: "Throws an error",
        choice4: "Ignores the statements",
        answer: 4,
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        choice1: "Global variable",
        choice2: "The local element",
        choice3: "The two of the above",
        choice4: "None",
        answer: 2,
    }
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;


startGame = () => {
    questionCounter = 0;
    score = 0;
    avaliableQuestions = [...questions];
    getNewQuestion();

}

getNewQuestion = () => {
    if (avaliableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');

    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;

    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    var questionIndex = Math.floor(Math.random() * avaliableQuestions.length);

    // console.log(questionIndex)
    currentQuestions = avaliableQuestions[questionIndex];

    question.innerText = currentQuestions.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestions['choice' + number];
    })

    // console.log(avaliableQuestions);
    avaliableQuestions.splice(questionIndex, 1);
    // console.log(avaliableQuestions);



    acceptingAnswers = true;

}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestions.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion()
        }, 1000)
    })
})


incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}


startGame();