const holes = document.querySelectorAll('.hole');
const killCounter = document.querySelector('#dead');
const missCounter = document.querySelector('#lost');
let killCount = Number(killCounter.textContent);
let missCount = Number(missCounter.textContent);

holes.forEach(hole => {
  hole.addEventListener('click', (e) => {
    if (e.target.className === 'hole hole_has-mole') {
      console.log('catch!');
      killCount += 1;
      if (killCount === 10) {
        alert('Победа!');
        killCount = 0;
        missCount = 0;
        missCounter.textContent = missCount;
      }
      killCounter.textContent = killCount;
    } else {
      console.log('miss!');
      missCount += 1;
      if (missCount === 5) {
        alert('Game over, dude!');
        killCount = 0;
        missCount = 0;
        killCounter.textContent = killCount;
      }
      missCounter.textContent = missCount;
    }
  });
});

