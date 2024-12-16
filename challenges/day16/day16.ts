import {readLines} from '../helpers'

var STARTING_POSITION = [0,0];
var TOTAL_SCORE = 0;

export function parseInput(): string[][] {

    var lines: string[] = readLines("./input/day16Input.txt");
    
    var grid: string[][] = lines.map(value => value.split(""));

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 'S') {
                STARTING_POSITION = [row, col];
            }
        }
    }
    console.log("Starting Position: " + STARTING_POSITION)
    return grid;
    
}

const EAST = 0;
const SOUTH = 1;
const WEST = 2;
const NORTH = 3;


const directions = [
    [0,1], //Right - East
    [1,0], //Down - South
    [0,-1], //Left - West
    [-1,0] //Up - North
]


export function findBestPath(grid: string[][], startRow: number, startCol: number): number {

    const rows = grid.length;
    const cols = grid[0].length;
  
    // BFS queue: [row, col, direction, totalScore]
    const queue: [number, number, number, number][] = [];
    const visited = new Set<string>();
  
    // Initialize queue for all possible starting directions
    queue.push([startRow, startCol, 0, 0]); // Start with an initial rotation cost
    visited.add(`${startRow},${startCol},0`);
  
    // Helper function to add states to the queue
    const addToQueue = (
      row: number,
      col: number,
      direction: number,
      score: number
    ) => {
      const stateKey = `${row},${col},${direction}`;
      if (!visited.has(stateKey)) {
        visited.add(stateKey);
        queue.push([row, col, direction, score]);
      }
    };
  
    while (queue.length > 0) {
      // Sort queue to prioritize lowest totalScore
      queue.sort((a, b) => a[3] - b[3]);
  
      const [currRow, currCol, directionIndex, totalScore] = queue.shift()!;
  
      // Check if we've reached the end
      if (grid[currRow][currCol] === 'E') {
        return totalScore;
      }
  
      // Move forward
      const [rowDelta, colDelta] = directions[directionIndex];
      const newRow = currRow + rowDelta;
      const newCol = currCol + colDelta;
  
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] !== '#'
      ) {
        addToQueue(newRow, newCol, directionIndex, totalScore + 1);
      }
  
      // Rotate clockwise
      const clockwise = (directionIndex + 1) % 4;
      addToQueue(currRow, currCol, clockwise, totalScore + 1000);
  
      // Rotate counterclockwise
      const counterClockwise = (directionIndex + 3) % 4; // Same as (directionIndex - 1 + 4) % 4
      addToQueue(currRow, currCol, counterClockwise, totalScore + 1000);
    }
  
    // If no path is found, return Infinity
    return Infinity;
  }


const grid: string[][] = parseInput();
const visited = new Set<string>();
const bestScore = findBestPath(
    grid,
    STARTING_POSITION[0],
    STARTING_POSITION[1]
);

console.log(`Best Score: ${bestScore}`);
