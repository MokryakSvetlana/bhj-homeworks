const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;
const holeList = document.querySelectorAll('.hole');

let i;
for (i in holeList) {
    const hole = getHole(i);
    if (hole !== undefined) {
        hole.onclick = function () {
            if (hole.className.includes('hole_has-mole')) {
                counterDead ++;
            } else {
                counterLost ++;
            }

            if (counterDead === 10) {
                alert('Победа!');
                counterDead = 0;
                counterLost = 0;

            } else if (counterLost === 5) {
                alert('Вы проиграли!');
                counterDead = 0;
                counterLost = 0;
            }

            dead.textContent = String(counterDead);
            lost.textContent = String(counterLost);
        }
    }
}
function getHole(index) {
    if (holeList[index].className && holeList[index].className.includes('hole')) {
        return holeList[index];
    }
}