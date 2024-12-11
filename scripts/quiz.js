const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Which is a primary color?",
        options: ["Green", "Purple", "Orange", "Blue"],
        correctAnswer: "Blue"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestion >= questions.length) {
        showFinalScore();
        return;
    }

    const questionData = questions[currentQuestion];
    const questionDisplay = document.getElementById('question-display');
    const optionsDisplay = document.getElementById('options-display');

    questionDisplay.innerHTML = `<h2>Question ${currentQuestion + 1}:</h2>
                               <p>${questionData.question}</p>`;

    optionsDisplay.innerHTML = questionData.options
        .map(option => `<div class="option">${option}</div>`)
        .join('');

    // Add click handlers to options
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => checkAnswer(option.textContent));
    });
}

function checkAnswer(selectedAnswer) {
    const correct = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (correct) score++;
    
    currentQuestion++;
    displayQuestion();
}

function showFinalScore() {
    document.getElementById('question-display').style.display = 'none';
    document.getElementById('options-display').style.display = 'none';
    document.getElementById('score-display').style.display = 'block';
    document.getElementById('score').textContent = `${score} out of ${questions.length}`;
}

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
});
