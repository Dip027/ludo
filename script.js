const board = document.getElementById('board');
const rollBtn = document.getElementById('rollBtn');
const dice = document.getElementById('dice');
const status = document.getElementById('status');


let position = 0;
const totalCells = 49;


// Create board
for (let i = 0; i < totalCells; i++) {
const cell = document.createElement('div');
cell.classList.add('cell');
cell.id = `cell-${i}`;
board.appendChild(cell);
}


// Create token
const token = document.createElement('div');
token.classList.add('token');
document.getElementById('cell-0').appendChild(token);


rollBtn.addEventListener('click', () => {
const roll = Math.floor(Math.random() * 6) + 1;
dice.textContent = roll;


let newPosition = position + roll;
if (newPosition >= totalCells) {
status.textContent = "You reached the end! 🎉";
return;
}


document.getElementById(`cell-${position}`).removeChild(token);
document.getElementById(`cell-${newPosition}`).appendChild(token);


position = newPosition;
status.textContent = `Moved to cell ${position}`;
});
