function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

let intervalId = null;

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
  

startBtn.addEventListener('click', () => {
    if (!intervalId) {
      startBtn.disabled = true;
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 500);
    }
});

stopBtn.addEventListener('click', () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      startBtn.disabled = false;
    }
});