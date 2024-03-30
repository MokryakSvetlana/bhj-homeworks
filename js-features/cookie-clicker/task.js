const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = function() {
    counter.textContent = String(Number(counter.textContent) + 1);
    if (cookie.width === 200) {
        cookie.width *= 1.2;
        cookie.height *= 1.2;
    } else {
        cookie.width /= 1.2;
        cookie.height /= 1.2;
    }
}