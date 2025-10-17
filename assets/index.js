const canvas = document.getElementById('dna-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = ['A', 'T', 'C', 'G'];
const colors = {
  'A': '#81000020', 
  'T': '#011c7620', 
  'C': '#00742120', 
  'G': '#9e570020'  
};
const gridSize = 16; // size of each letter
let letterGrid = [];

// Initialize grid with random letters
for (let y = 0; y < canvas.height; y += gridSize) {
  let row = [];
  for (let x = 0; x < canvas.width; x += gridSize) {
    row.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  letterGrid.push(row);
}

// Draw letters with colors in Courier
function drawLetters() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${gridSize}px Courier`; // Courier font
  for (let y = 0; y < letterGrid.length; y++) {
    for (let x = 0; x < letterGrid[y].length; x++) {
      const letter = letterGrid[y][x];
      ctx.fillStyle = colors[letter] || '#ffffff';
      ctx.fillText(letter, x * gridSize, (y + 1) * gridSize);
    }
  }
}

// Randomly update letters
function updateLetters() {
  for (let y = 0; y < letterGrid.length; y++) {
    for (let x = 0; x < letterGrid[y].length; x++) {
      if (Math.random() < 0.01) { // slow change
        letterGrid[y][x] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }
}

// Animation loop
function animate() {
  updateLetters();
  drawLetters();
  requestAnimationFrame(animate);
}

animate();