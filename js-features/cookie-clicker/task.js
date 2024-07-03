let image = document.getElementById('cookie');
const clickerStatus = document.querySelector('.clicker__status');
clickerStatus.innerHTML += '<br>Скорость кликов <span id="clicker__speed">0</span>';
const clickerSpeed = document.getElementById('clicker__speed');

let count = 0;
let start = 0;

image.onclick = function() {
    let end = new Date();
    if (image.width == 200) {
        image.width = 220;
    } else {
        image.width = 200;
    }

    count++; 
    let dif = end - start;
    let speed = (1/dif)*1000;
    clickerSpeed.textContent = speed.toFixed(2);
    document.getElementById('clicker__counter').textContent = count;
    start = end;
}

