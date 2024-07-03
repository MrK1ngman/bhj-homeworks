let timer = document.getElementById("timer").textContent;
function formatTime(time) {
    const hours = Math.floor(time / 3600).toString();
    const minutes = Math.floor((time % 3600) / 60).toString();
    const seconds = (time % 60).toString();
    return `${hours.padStart(2,'0')}:${minutes.padStart(2,'0')}:${seconds.padStart(2,'0')}`;
}

let intervalId = setInterval(() => {
  if (timer > 0) {
    timer--;
    document.getElementById("timer").textContent = formatTime(timer);
  } else {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
}, 1000);