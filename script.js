let timerInterval;
let stopwatchInterval;

function startTimer() {
  const timeInput = document.getElementById('timerInput').value;
  const timeInSeconds = parseInt(timeInput);

  if (isNaN(timeInSeconds)) {
    alert('Please enter a valid number');
    return;
  }

  let remainingTime = timeInSeconds;

  timerInterval = setInterval(() => {
    remainingTime--;
    document.getElementById('timerDisplay').textContent = remainingTime;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      document.getElementById('timerDisplay').textContent = 'Timer Complete!';
    }
  }, 1000);
}

function startStopwatch() {
  let elapsedTime = 0;

  stopwatchInterval = setInterval(() => {
    elapsedTime++;
    document.getElementById('stopwatchDisplay').textContent = elapsedTime;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}
