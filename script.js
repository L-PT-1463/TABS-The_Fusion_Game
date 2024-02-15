let score1 = 0;
let score2 = 0;

function updateScoreDisplay(score, elementId) {
  const formattedScore = score.toString().padStart(2, '0');
  const element = document.getElementById(elementId);
  element.textContent = formattedScore;

  // Flash effect on score change
  element.style.transition = 'color 0.3s';
  element.style.color = '#ffffff'; // Flash to white
  setTimeout(() => {
    element.style.color = ''; // Reset to original color
  }, 500);
}

document.getElementById('plus1').addEventListener('click', function () {
  score1++;
  updateScoreDisplay(score1, 'score1');
});

document.getElementById('minus1').addEventListener('click', function () {
  score1 = Math.max(0, score1 - 1);
  updateScoreDisplay(score1, 'score1');
});

document.getElementById('plus2').addEventListener('click', function () {
  score2++;
  updateScoreDisplay(score2, 'score2');
});

document.getElementById('minus2').addEventListener('click', function () {
  score2 = Math.max(0, score2 - 1);
  updateScoreDisplay(score2, 'score2');
});

document.getElementById('reset').addEventListener('click', function () {
  // Flash to white before resetting
  flashText('score1');
  flashText('score2');

  score1 = 0;
  score2 = 0;
  updateScoreDisplay(score1, 'score1');
  updateScoreDisplay(score2, 'score2');
});

// Event listener for "b" key released
document.addEventListener('keyup', function (event) {
  if (event.key === 'b') {
    score2++;
    updateScoreDisplay(score2, 'score2');
  }
});

// Event listener for "r" key released
document.addEventListener('keyup', function (event) {
  if (event.key === 'r') {
    score1++;
    updateScoreDisplay(score1, 'score1');
  }
});

// Function to flash text to white
function flashText(elementId) {
  const element = document.getElementById(elementId);
  element.style.transition = 'color 0.5s';
  element.style.color = '#ffffff'; // Flash to white
  setTimeout(() => {
    element.style.color = ''; // Reset to original color
  }, 500);
}