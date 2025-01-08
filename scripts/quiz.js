const easyQuestions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
    { question: "Which is a primary color?", options: ["Green", "Purple", "Orange", "Blue"], correctAnswer: "Blue" },
    { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correctAnswer: "Paris" },
    { question: "What is 5 + 3?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], correctAnswer: "Mars" }
];

const mediumQuestions = [
    { question: "What is the largest ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], correctAnswer: "Pacific" },
    { question: "Which is not a mammal?", options: ["Whale", "Dolphin", "Shark", "Bat"], correctAnswer: "Shark" },
    { question: "What is the square root of 16?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
    { question: "Which country is in South America?", options: ["Canada", "Brazil", "Spain", "Japan"], correctAnswer: "Brazil" },
    { question: "What is the capital of Italy?", options: ["Rome", "Paris", "Berlin", "Lisbon"], correctAnswer: "Rome" }
];

const hardQuestions = [
    { question: "What is 12 x 12?", options: ["124", "144", "154", "164"], correctAnswer: "144" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correctAnswer: "Leonardo da Vinci" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Go"], correctAnswer: "Au" },
    { question: "What is the speed of light?", options: ["299,792 km/s", "300,000 km/s", "150,000 km/s", "250,000 km/s"], correctAnswer: "299,792 km/s" },
    { question: "What is the Pythagorean theorem?", options: ["a^2 + b^2 = c^2", "E = mc^2", "F = ma", "V = IR"], correctAnswer: "a^2 + b^2 = c^2" }
];

const veryHardQuestions = [
    { question: "What is the smallest country in the world?", options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"], correctAnswer: "Vatican City" },
    { question: "What is the heaviest naturally occurring element?", options: ["Uranium", "Osmium", "Plutonium", "Gold"], correctAnswer: "Uranium" },
    { question: "What is the 10th digit of pi?", options: ["3", "5", "9", "7"], correctAnswer: "5" },
    { question: "Which year was the Declaration of Independence signed?", options: ["1775", "1776", "1781", "1783"], correctAnswer: "1776" },
    { question: "What is Schrödinger's Cat?", options: ["A paradox", "A formula", "A law of motion", "A chemical compound"], correctAnswer: "A paradox" }
];

let questions = [
    ...shuffleArray(easyQuestions),
    ...shuffleArray(mediumQuestions),
    ...shuffleArray(hardQuestions),
    ...shuffleArray(veryHardQuestions)
];

let currentQuestion = 0;
let score = 0;
let hints = 3; 
const sectorSize = 5; 
let hintUsedOnCurrentQuestion = false; 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion() {
    if (currentQuestion >= questions.length) {
        showFinalScore();
        return;
    }

    const questionData = questions[currentQuestion];
    const questionDisplay = document.getElementById('quiz-question');
    const optionsDisplay = document.querySelector('.quiz-options');

    questionDisplay.textContent = `Q${currentQuestion + 1}: ${questionData.question}`;

    optionsDisplay.innerHTML = questionData.options
        .map((option, index) => `
            <button class="quiz-option">
                <span class="option-letter">${String.fromCharCode(65 + index)}</span> ${option}
            </button>
        `)
        .join('');

    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => checkAnswer(option.textContent.trim().slice(2)));
    });

    hintUsedOnCurrentQuestion = false;
    updateHintButton();
}

function checkAnswer(selectedAnswer) {
    const correct = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (correct) score++;

    if ((currentQuestion + 1) % sectorSize === 0) {
        hints++;
    }

    currentQuestion++;
    displayQuestion();
}

function showFinalScore() {
    const questionDisplay = document.getElementById('quiz-question');
    const optionsDisplay = document.querySelector('.quiz-options');
    const scoreDisplay = document.getElementById('score-display');
    const scoreElement = document.getElementById('score');

    questionDisplay.textContent = "Quiz Complete!";
    optionsDisplay.innerHTML = "";

    scoreDisplay.style.display = "block";
    scoreElement.textContent = `${score} out of ${questions.length}`;
}

function useHint() {
    if (hints <= 0 || hintUsedOnCurrentQuestion) return;

    const questionData = questions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    let incorrectOptions = [];

    options.forEach(option => {
        if (option.textContent.trim().slice(2) !== questionData.correctAnswer) {
            incorrectOptions.push(option);
        }
    });

    incorrectOptions.slice(0, 2).forEach(option => {
        option.disabled = true;
        option.style.backgroundColor = "#ccc";
    });

    hints--;
    hintUsedOnCurrentQuestion = true;
    updateHintButton();
}

function updateHintButton() {
    const hintButton = document.getElementById('hint-btn');
    hintButton.textContent = `Hint (${hints})`;

    hintButton.disabled = hints <= 0 || hintUsedOnCurrentQuestion;
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();

    document.getElementById('hint-btn').addEventListener('click', useHint);

    document.getElementById('start-btn').addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        hints = 3; 
        document.getElementById('score-display').style.display = 'none';
        displayQuestion();
    });

    document.getElementById('home-btn').addEventListener('click', () => {
        window.location.reload();
    });
});