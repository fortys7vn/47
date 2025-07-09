document.addEventListener("DOMContentLoaded", function () {
  const checkboxRegras = document.getElementById("aceiteRegras");
  const checkboxTermos = document.getElementById("aceiteTermos");
  const missionButtons = document.querySelectorAll(".mission");

  function toggleButtons() {
    const enable = checkboxRegras.checked && checkboxTermos.checked;
    missionButtons.forEach(btn => {
      if (btn.href.includes("missao")) {
        btn.style.pointerEvents = enable ? "auto" : "none";
        btn.style.opacity = enable ? "1" : "0.5";
      }
    });
  }

  checkboxRegras.addEventListener("change", toggleButtons);
  checkboxTermos.addEventListener("change", toggleButtons);

  toggleButtons(); // Inicial
});
