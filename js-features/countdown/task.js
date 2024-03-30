const timer = document.getElementById('timer');
let counter = Number(timer.textContent);
let intervalId;

intervalId = setInterval(function() {
    if (counter <= 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
    }
    else {
        counter--;
        timer.textContent = String(counter);
    }
}, 1000)