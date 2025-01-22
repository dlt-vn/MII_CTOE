const easyQuestions = [
    {
      question: "Onde está localizado o CTOE?",
      options: ["Lisboa", "Porto", "Lamego", "Coimbra"],
      correctAnswer: "Lamego",
      image: "../assets/imgs/CTOE_Lamego.png"
    },
    {
      question: "O que significa a sigla CTOE?",
      options: [
        "Centro de Treino de Operações Especiais",
        "Centro de Tropas de Operações Especiais",
        "Comando Técnico de Operações Especiais",
        "Corpo de Tropa de Operações Estratégicas"
      ],
      correctAnswer: "Centro de Tropas de Operações Especiais"
    },
    {
      question: "Qual a cor característica do boina usada pelos militares do CTOE?",
      options: [
        "Verde Escuro – Tropas Páraquedistas",
        "Vermelho – Comandos",
        "Azul – Fuzileiros Navais",
        "Verde Claro – Rangers / CTOE"
      ],
      correctAnswer: "Verde Claro – Rangers / CTOE"
    },
    {
      question: "Os membros do CTOE são também conhecidos por que nome?",
      options: ["Rangers", "Comandos", "Forças Especiais", "Operacionais"],
      correctAnswer: "Rangers"
    },
    {
      question: "O CTOE é uma unidade pertencente a que ramo das Forças Armadas Portuguesas?",
      options: ["Marinha", "Exército", "Força Aérea", "GNR"],
      correctAnswer: "Exército"
    }
  ];

const mediumQuestions = [
    {
      question: "Qual é o nome do curso que os militares têm de completar para se tornarem membros do CTOE?",
      options: [
        "Curso de Resistência e Sobrevivência",
        "Curso de Combate Urbano",
        "Curso de Táticas Especiais",
        "Curso de Ranger"
      ],
      correctAnswer: "Curso de Ranger"
    },
    {
      question: "Qual é a principal missão do CTOE?",
      options: [
        "Defender as fronteiras portuguesas",
        "Realizar operações especiais em condições extremas",
        "Coordenar logística militar",
        "Treinar recrutas para missões de paz"
      ],
      correctAnswer: "Realizar operações especiais em condições extremas"
    },
    {
      question: "Em que ano foi criado o CTOE?",
      options: ["1960", "1955", "1974", "1980"],
      correctAnswer: "1960"
    },
    {
      question: "Que tipo de operações são frequentemente associadas ao CTOE?",
      options: [
        "Operações médicas de emergência",
        "Operações de resgate de reféns",
        "Operações navais de patrulha",
        "Operações de defesa cibernética"
      ],
      correctAnswer: "Operações de resgate de reféns"
    },
    {
      question: "Quantos meses dura o Curso de Ranger?",
      options: ["3 meses", "5 meses", "6 meses", "9 meses"],
      correctAnswer: "5 meses"
    }
  ];

const hardQuestions = [
    {
      question: "Qual é o lema oficial do CTOE?",
      options: [
        "Força e Honra",
        "Audaces Fortuna Juvat",
        "Que os muitos por ser poucos não temamos",
        "Treinados para vencer"
      ],
      correctAnswer: "Que os muitos por ser poucos não temamos"
    },
    {
      question: "Que tipo de ambiente não é uma especialidade para treino do CTOE?",
      options: ["Montanhoso", "Urbano", "Desértico", "Florestal"],
      correctAnswer: "Desértico"
    },
    {
      question: "O CTOE participa frequentemente em missões de cooperação internacional. Qual destas organizações está mais associada a estas missões?",
      options: ["NATO (OTAN)", "União Europeia", "ONU", "Organização dos Estados Ibero-Americanos"],
      correctAnswer: "NATO (OTAN)"
    },
    {
      question: "Qual é o símbolo do CTOE?",
      options: [
        "Um leão com uma espada",
        "Uma cobra enrolada numa espada",
        "Uma águia com asas abertas",
        "Um leopardo em posição de ataque"
      ],
      correctAnswer: "Um leopardo em posição de ataque"
    },
    {
      question: "Durante o treino no Curso de Ranger, qual destas situações faz parte do programa?",
      options: [
        "Saltos de paraquedas",
        "Prova de Aptidão Física e Psicológica",
        "Missões em águas internacionais",
        "Operações de helicóptero noturnas"
      ],
      correctAnswer: "Prova de Aptidão Física e Psicológica"
    }
  ];

const veryHardQuestions = [
    {
      question: "Qual é o nome da unidade que precedeu a criação do CTOE em Lamego?",
      options: [
        "Centro de Formação de Comandos",
        "Batalhão de Caçadores Especiais",
        "Grupo de Operações Especiais",
        "Unidade de Reconhecimento Estratégico"
      ],
      correctAnswer: "Batalhão de Caçadores Especiais"
    },
    {
      question: "Quantos quilómetros, em média, percorrem os candidatos ao Curso de Ranger durante o treino físico de resistência?",
      options: ["50 km", "70 km", "90 km", "110 km"],
      correctAnswer: "110 km"
    },
    {
      question: "Que nome é dado ao exercício final do Curso de Ranger, que testa todas as competências aprendidas?",
      options: [
        "Missão Fantasma",
        "Operação Última Prova",
        "Sobrevivência Extrema",
        "Exercício Camaleão"
      ],
      correctAnswer: "Exercício Camaleão"
    },
    {
      question: "Qual destes países já recebeu colaboração direta do CTOE em operações militares?",
      options: ["Afeganistão", "Moçambique", "Timor-Leste", "Todos os anteriores"],
      correctAnswer: "Todos os anteriores"
    },
    {
      question: "Durante a cerimónia de entrega do brevet de Ranger, o que é tradicionalmente usado para simbolizar a conclusão do curso?",
      options: [
        "Uma moeda comemorativa",
        "Um bastão de madeira com um leopardo gravado",
        "Uma boina verde clara",
        "Uma insígnia com o símbolo do leopardo"
      ],
      correctAnswer: "Um bastão de madeira com um leopardo gravado"
    }
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
    const imageContainer = document.getElementById('quiz-image'); 

    questionDisplay.textContent = `Q${currentQuestion + 1}: ${questionData.question}`;

    optionsDisplay.innerHTML = questionData.options
        .map((option, index) => `
            <button class="quiz-option">
                <span class="option-letter">${String.fromCharCode(65 + index)}</span> ${option}
            </button>
        `)
        .join('');

    if (questionData.image) {
        imageContainer.innerHTML = `<img src="${questionData.image}" alt="Question Image" style="max-width: 100%; height: auto; border-radius: 10px;">`;
    } else {
        imageContainer.innerHTML = `<p>Imagem<br>(Caso Haja)</p>`;
    }

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

    questionDisplay.textContent = "Quiz Completo!";
    optionsDisplay.innerHTML = "";

    scoreDisplay.style.display = "block";
    scoreElement.textContent = `${score} de ${questions.length}`;
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