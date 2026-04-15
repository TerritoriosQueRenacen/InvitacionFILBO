const stage = document.getElementById("stage");
const letter = document.getElementById("letter");
let step = 0;

const hints = ["toca el sobre para abrir", "toca para sacar la invitación", ""];

function advance() {
  step++;

  // Paso 1: Abre la solapa
  if (step === 1) {
    stage.classList.add("s-open");
  }

  // Paso 2: La carta sale, el sobre desaparece y la carta crece
  if (step === 2) {
    stage.classList.add("s-risen");

    // Pequeño ajuste para asegurar que la carta quede al frente de todo al final
    setTimeout(() => {
      letter.style.zIndex = "1000";
    }, 600);
  }

  const h = document.getElementById("hint");
  h.style.opacity = step >= 2 ? "0" : "1";
  h.textContent = hints[Math.min(step, hints.length - 1)];
}
