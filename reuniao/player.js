
const audio = document.getElementById('radioPlayer');

function playAudio() {
  audio.play();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}

function changeVolume(amount) {
  audio.volume = Math.min(1, Math.max(0, audio.volume + amount));
}
