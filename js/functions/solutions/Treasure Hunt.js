const gridSize = 10;
let playerPosition = { x: 0, y: 0 };
let playerScore = 0;
let movesLeft = 20;
let grid = initializeGrid(gridSize);

function initializeGrid(size) {
    let grid = [];
    for (let i = 0; i < size; i++) {
        grid[i] = [];
        for (let j = 0; j < size; j++) {
            grid[i][j] = null; // Initialize all cells as empty
        }
    }
    placeItems(grid, 'treasure', 5);
    placeItems(grid, 'trap', 3);
    return grid;
}

function placeItems(grid, item, count) {
    for (let i = 0; i < count; i++) {
        let placed = false;
        while (!placed) {
            let row = Math.floor(Math.random() * gridSize);
            let col = Math.floor(Math.random() * gridSize);
            if (grid[row][col] === null) {
                grid[row][col] = item;
                placed = true;
            }
        }
    }
}

function printGrid() {
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (i === playerPosition.x && j === playerPosition.y) {
                cell.classList.add('player');
            } else if (grid[i][j] === 'treasure') {
                cell.classList.add('treasure');
            } else if (grid[i][j] === 'trap') {
                cell.classList.add('trap');
            }
            gridContainer.appendChild(cell);
        }
    }
}

function updateStatus() {
    document.getElementById('score').textContent = playerScore;
    document.getElementById('moves').textContent = movesLeft;
}

function movePlayer(direction) {
    if (movesLeft === 0) {
        alert("No more moves left!");
        return;
    }

    let newX = playerPosition.x;
    let newY = playerPosition.y;

    if (direction === 'up' && playerPosition.x > 0) newX--;
    if (direction === 'down' && playerPosition.x < gridSize - 1) newX++;
    if (direction === 'left' && playerPosition.y > 0) newY--;
    if (direction === 'right' && playerPosition.y < gridSize - 1) newY++;

    playerPosition.x = newX;
    playerPosition.y = newY;
    movesLeft--;
    checkCell(newX, newY);
    printGrid();
    updateStatus();
}

function checkCell(x, y) {
    const cell = grid[x][y];
    if (cell === 'treasure') {
        alert("Treasure found!");
        playerScore += 10;
    } else if (cell === 'trap') {
        alert("Fell into a trap!");
        movesLeft -= 2; // Extra penalty
    }
}

// Initial rendering of the game
printGrid();
updateStatus();
