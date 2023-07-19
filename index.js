const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId = 0;
  return (seconds) => {
    clearInterval(intervalId);

    let remainingSeconds = seconds;

    const updateTimer = () => {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;

      const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      timerEl.textContent = formattedTime;

      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
      } else {
        remainingSeconds++;
      }
    };

    updateTimer();

    intervalId = setInterval(updateTimer, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
