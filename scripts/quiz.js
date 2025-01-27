let experienceLevel = 0;

const sectorOneQuestions = [
  {
    question: "Onde está localizado o CTOE?",
    options: ["Lisboa", "Porto", "Lamego", "Coimbra"],
    correctAnswer: "Lamego",
    image: "../assets/imgs/1.png",
    altText: "Mapa de localização de Lamego"
  },
  {
    question: "O que significa a sigla CTOE?",
    options: [
      "Centro de Treino de Operações Especiais",
      "Centro de Tropas de Operações Especiais",
      "Comando Técnico de Operações Especiais",
      "Corpo de Tropa de Operações Estratégicas"
    ],
    correctAnswer: "Centro de Tropas de Operações Especiais",
    image: "../assets/imgs/2.png"
  },
  {
    question: "Qual a cor característica do boina usada pelos militares do CTOE?",
    options: [
      "Verde Escuro",
      "Vermelho",
      "Azul",
      "Verde Claro"
    ],
    correctAnswer: "Verde Escuro",
    image: "../assets/imgs/3.png"
  }
];

const sectorTwoQuestions = [
  {
    question: "Qual é o nome do curso que os militares têm de completar para se tornarem membros do CTOE?",
    options: [
      "Curso de Resistência e Sobrevivência",
      "Curso de Combate Urbano",
      "Curso de Táticas Especiais",
      "Curso de Ranger"
    ],
    correctAnswer: "Curso de Ranger",
    image: "../assets/imgs/6.png"
  },
  {
    question: "Os membros do CTOE são também conhecidos por que nome?",
    options: ["Rangers", "Comandos", "Forças Especiais", "Operacionais"],
    correctAnswer: "Rangers",
    image: "../assets/imgs/4.png"
  },
  {
    question: "O CTOE é uma unidade pertencente a que ramo das Forças Armadas Portuguesas?",
    options: ["Marinha", "Exército", "Força Aérea", "GNR"],
    correctAnswer: "Exército",
    image: "../assets/imgs/5.png"
  }
]
const sectorThreeQuestions = [{
  question: "Em que ano foi criado o CTOE?",
  options: ["1960", "1955", "1974", "1980"],
  correctAnswer: "1960",
  image: "../assets/imgs/8.png"
},
{
  question: "Que tipo de operações são frequentemente associadas ao CTOE?",
  options: [
    "Operações médicas de emergência",
    "Operações de resgate de reféns",
    "Operações navais de patrulha",
    "Operações de defesa cibernética"
  ],
  correctAnswer: "Operações de resgate de reféns",
  image: "../assets/imgs/9.png"
},
{
  question: "Quantos meses dura o Curso de Ranger?",
  options: ["3 meses", "5 meses", "6 meses", "9 meses"],
  correctAnswer: "5 meses",
  image: "../assets/imgs/10.png"
}
];

const sectorFourQuestions = [
  {
    question: "Qual é o lema oficial do CTOE?",
    options: [
      "Força e Honra",
      "Audaces Fortuna Juvat",
      "Que os muitos por ser poucos não temamos",
      "Treinados para vencer"
    ],
    correctAnswer: "Que os muitos por ser poucos não temamos",
    image: "../assets/imgs/11.png"
  },
  {
    question: "Que tipo de ambiente não é uma especialidade para treino do CTOE?",
    options: ["Montanhoso", "Urbano", "Desértico", "Florestal"],
    correctAnswer: "Desértico",
    image: "../assets/imgs/12.png"
  },
  {
    question: "Qual é a principal missão do CTOE?",
    options: [
      "Defender as fronteiras portuguesas",
      "Realizar operações especiais em condições extremas",
      "Coordenar logística militar",
      "Treinar recrutas para missões de paz"
    ],
    correctAnswer: "Realizar operações especiais em condições extremas",
    image: "../assets/imgs/7.png"
  }
]
const sectorFiveQuestions = [
  {
    question: "O CTOE participa frequentemente em missões de cooperação internacional. Qual destas organizações está mais associada a estas missões?",
    options: ["NATO (OTAN)", "União Europeia", "ONU", "Organização dos Estados Ibero-Americanos"],
    correctAnswer: "NATO (OTAN)",
    image: "../assets/imgs/13.png"
  },
  {
    question: "Qual é o símbolo do CTOE?",
    options: [
      "Um leão com uma espada",
      "Uma cobra enrolada numa espada",
      "Uma águia com asas abertas",
      "Um leopardo em posição de ataque"
    ],
    correctAnswer: "Um leopardo em posição de ataque",
    image: "../assets/imgs/14.png"
  },
  {
    question: "Durante o treino no Curso de Ranger, qual destas situações faz parte do programa?",
    options: [
      "Saltos de paraquedas",
      "Prova de Aptidão Física e Psicológica",
      "Missões em águas internacionais",
      "Operações de helicóptero noturnas"
    ],
    correctAnswer: "Prova de Aptidão Física e Psicológica",
    image: "../assets/imgs/15.png"
  }
];

const sectorSixQuestions = [ // REMOVER PERGUNTA
  {
    question: "Quantos quilómetros, em média, percorrem os candidatos ao Curso de Ranger durante o treino físico de resistência?",
    options: ["50 km", "70 km", "90 km", "110 km"],
    correctAnswer: "110 km",
    image: "../assets/imgs/17.png"
  }, // remover pergunta
  {
    question: "Qual destes países já recebeu colaboração direta do CTOE em operações militares?",
    options: ["Afeganistão", "Moçambique", "Timor-Leste", "Todos os anteriores"],
    correctAnswer: "Todos os anteriores",
    image: "../assets/imgs/19.png"
  },
  {
    question: "Durante a cerimónia de entrega do brevet de Ranger, o que é tradicionalmente usado para simbolizar a conclusão do curso?",
    options: [
      "Uma moeda comemorativa",
      "Um bastão de madeira com um leopardo gravado",
      "Uma boina verde clara",
      "Uma insígnia com o símbolo do leopardo"
    ],
    correctAnswer: "Um bastão de madeira com um leopardo gravado",
    image: "../assets/imgs/20.png"
  }
];

// Define a quantidade de questões para cada setor
let totalQuestions = sectorOneQuestions.length + sectorTwoQuestions.length + sectorThreeQuestions.length + sectorFourQuestions.length + sectorFiveQuestions.length + sectorSixQuestions.length;

// Função para atualizar a barra de progresso
function updateProgressBar(currentQuestionIndex) {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100; // Calcula a porcentagem
  document.getElementById("progress-bar").style.width = `${progress}%`; // Atualiza a barra de progresso
}

// Junta as questões de todos os setores, embaralhando as questões dentro de cada setor
let questions = [
  ...shuffleArray(sectorOneQuestions),
  ...shuffleArray(sectorTwoQuestions),
  ...shuffleArray(sectorThreeQuestions),
  ...shuffleArray(sectorFourQuestions),
  ...shuffleArray(sectorFiveQuestions),
  ...shuffleArray(sectorSixQuestions)
];

let currentQuestion = 0;
let score = 0;
let hints = 3;
const sectorSize = 3;
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

// Referências aos elementos do mapa
const mapBtn = document.getElementById('map-btn');
const mapContainer = document.getElementById('map-container');
const closeMap = document.getElementById('close-map');
const mapImage = document.getElementById('map-image');

// Função para abrir o mapa
mapBtn.addEventListener('click', () => {
  mapContainer.style.display = 'block';
});

// Função para fechar o mapa
closeMap.addEventListener('click', () => {
  mapContainer.style.display = 'none';
});

// Atualizar o mapa a cada 3 perguntas
function updateMapImage() {
  if (score % 3 === 0) {
    if (score === 3) {
      mapImage.src = "../assets/imgs/map2.png";
    } else if (score === 6) {
      mapImage.src = "../assets/imgs/map3.png";
    } else if (score === 9) {
      mapImage.src = "../assets/imgs/map4.png";
    } else if (score === 12) {
      mapImage.src = "../assets/imgs/map5.png";
    } else if (score === 15) {
      mapImage.src = "../assets/imgs/map6.png";
    }
    
  }
}

function checkAnswer(selectedAnswer) {
  const correct = selectedAnswer === questions[currentQuestion].correctAnswer;
  if (correct) {
    score++;
  }

  console.log("Selected Answer:", selectedAnswer);
  console.log("Correct Answer:", questions[currentQuestion].correctAnswer);

  // document.getElementById('score-display-text').textContent = score;

  updateMapImage();

  // Atualiza a imagem do header se a pontuação for múltipla de 3
  if (score % 3 === 0) {
    updateHeaderImage();
  }

  // Aumenta as dicas a cada setor completado
  if ((currentQuestion + 1) % sectorSize === 0) {
    hints++;
  }

  // Avança para a próxima pergunta
  currentQuestion++;
  updateProgressBar(currentQuestion);

  if (currentQuestion >= questions.length) {
    showFinalScore();
  } else {
    displayQuestion();
  }
}

function updateHeaderImage() {
  const headerImage = document.getElementById('header-image');

  if (score === 3) {
    headerImage.src = "../assets/imgs/insignia2.png";
  } else if (score === 6) {
    headerImage.src = "../assets/imgs/insignia3.png";
  } else if (score === 9) {
    headerImage.src = "../assets/imgs/insignia4.png";
  } else if (score === 12) {
    headerImage.src = "../assets/imgs/insignia5.png";
  } else if (score === 15) {
    headerImage.src = "../assets/imgs/insignia6.png";
  }
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

  const playerName = prompt("Digite seu nome para salvar o placar:");
  if (playerName) {
    saveToLeaderboard(playerName, score, elapsedTime);
  }
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

  hintButton.innerHTML = `
    <img src="../assets/imgs/mascot.png" alt="Avatar de Dicas" style="width: 40px; height: 40px; margin-right: 5px; vertical-align: middle;">
     (${hints})
  `;

  hintButton.disabled = hints <= 0 || hintUsedOnCurrentQuestion;
}

function saveToLeaderboard(name, score) {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name, correctAnswers: score });
  leaderboard.sort((a, b) => b.correctAnswers - a.correctAnswers);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  alert("Placar salvo com sucesso! Confira o placar de líderes.");
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-btn').addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    hints = 3;
    document.getElementById('score-display').style.display = 'none';
    displayQuestion();
  });

  document.getElementById('home-btn').addEventListener('click', () => {
    const confirmRedirect = confirm('Você realmente deseja voltar para a página inicial? Todo o progresso será perdido.');
    if (confirmRedirect) {
      window.location.href = '../index.html';
    }
  });

  displayQuestion();
});