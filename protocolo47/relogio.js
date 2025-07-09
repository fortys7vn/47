const timerElement = document.getElementById("timer");
let totalTime = 10 * 60; // 10 minutos em segundos

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}

function updateTimer() {
  timerElement.textContent = formatTime(totalTime);
  if (totalTime > 0) {
    totalTime--;
    setTimeout(updateTimer, 1000);
  } else {
    timerElement.textContent = "00:00";
    timerElement.classList.add("finalizado");
  }
}

updateTimer();
