let timerInterval;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');

function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}

function updateTimer() {
    seconds++;
    timerDisplay.textContent = formatTime(seconds);
    playBip();
}

function playBip() {
    const audio = new Audio('../beep.mp3'); // Certifique-se de adicionar um caminho de áudio válido
    audio.play();
}

document.getElementById('start').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
});

document.getElementById('resume').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    seconds = 0;
    timerDisplay.textContent = formatTime(seconds);
});
