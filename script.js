const totalPuzzles = 20;
let unlocked = 1;

function createPuzzles() {
  const container = document.getElementById('puzzle-container');
  for (let i = 1; i <= totalPuzzles; i++) {
    const div = document.createElement('div');
    div.className = 'puzzle' + (i > unlocked ? ' locked' : '');
    div.dataset.id = i;
    div.onclick = () => playPuzzle(i);

    const img = document.createElement('img');
    img.src = `puzzles/${String(i).padStart(2, '0')}.jpg`;

    div.appendChild(img);

    if (i > unlocked) {
      const lockIcon = document.createElement('img');
      lockIcon.src = 'assets/lock-icon.png';
      lockIcon.className = 'lock';
      div.appendChild(lockIcon);
    }

    container.appendChild(div);
  }
}

function playPuzzle(id) {
  // Simulate puzzle completion
  setTimeout(() => {
    showMessage(`Puzzle ${id} completed! 🎉`);
    unlockNext(id);
  }, 500);
}

function unlockNext(id) {
  if (id < totalPuzzles) {
    unlocked = id + 1;
    document.getElementById('puzzle-container').innerHTML = '';
    createPuzzles();
  }
}

function showMessage(msg) {
  document.getElementById('message-text').textContent = msg;
  document.getElementById('message-box').classList.remove('hidden');
}

function closeMessage() {
  document.getElementById('message-box').classList.add('hidden');
}

window.onload = createPuzzles;
