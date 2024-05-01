// Define the size of the grid and initial player state
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
    for (let i = 0; i < gridSize; i++) {
        let row = '';
        for (let j = 0; j < gridSize; j++) {
            const cellContent = grid[i][j];
            row += cellContent ? cellContent[0].toUpperCase() : '.';
        }
        console.log(row);
    }
}

function movePlayer(direction) {
    if (movesLeft === 0) {
        console.log("No more moves left!");
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
    console.log(`Moved ${direction}. New Position: (${newX}, ${newY})`);
    checkCell(newX, newY);
    printGrid();
    console.log("Current Score:", playerScore);
    console.log("Moves Left:", movesLeft);
}

function checkCell(x, y) {
    const cell = grid[x][y];
    if (cell === 'treasure') {
        console.log("Treasure found!");
        playerScore += 10;
    } else if (cell === 'trap') {
        console.log("Fell into a trap!");
        movesLeft -= 2; // Extra penalty
    }
}

// Initialize and display the grid
console.log("Initial game setup:");
printGrid();

// Example commands to run in the console for playing the game:
// movePlayer('up');
// movePlayer('down');
// movePlayer('left');
// movePlayer('right');
