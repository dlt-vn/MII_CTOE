// Selecionar elementos
const videoOverlay = document.getElementById("video-overlay");
const introVideo = document.getElementById("intro-video");
const skipBtn = document.getElementById("skip-btn");

// Remover o vídeo após terminar
introVideo.addEventListener("ended", () => {
    videoOverlay.style.display = "none"; // Oculta o contêiner do vídeo
});

// Botão de Pular
skipBtn.addEventListener("click", () => {
    videoOverlay.style.display = "none"; // Oculta o contêiner do vídeo
    introVideo.pause(); // Pausa o vídeo
    introVideo.currentTime = 0; // Reinicia o tempo do vídeo
});

function navigateTo(url) {
    window.location.href = url;
  }