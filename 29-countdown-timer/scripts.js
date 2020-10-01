let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown)
  const initial = Date.now();
  const then = initial + (seconds * 1000);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
};

function displayTimeLeft(seconds) {
  let minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  let hour;
  if (minutes >= 60) {
    hour = ('0' + Math.floor(minutes / 60)).slice(-2) + ':';
    minutes = minutes % 60;
  } else {
    hour = false;
  }
  const display = `${hour ? hour : ''}${('0' + minutes).slice(-2)}:${('0' + remainderSeconds).slice(-2)}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${('0' + (hour > 12 ? hour - 12 : hour)).slice(-2)}:${('0' + minutes).slice(-2)}`;
};

function startTime() {
  timer(parseInt(this.dataset.time));
}

buttons.forEach(button => { button.addEventListener('click', startTime) });
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();
  timer(this.minutes.value * 60);
  this.reset();
});