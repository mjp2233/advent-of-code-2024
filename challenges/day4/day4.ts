import { readFileSync } from 'fs';

function countWordOccurrences(grid: string[][], word: string): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const wordLength = word.length;
  
    // Directions for row and column movements
    const directions = [
      [0, 1], // Right
      [1, 0], // Down
      [1, 1], // Down-Right Diagonal
      [1, -1], // Down-Left Diagonal
      [0, -1], // Left
      [-1, 0], // Up
      [-1, -1], // Up-Left Diagonal
      [-1, 1], // Up-Right Diagonal
    ];
  
    let count = 0;
  
    // Helper function to check if the word exists starting from (r, c) in a given direction
    const isWordAt = (r: number, c: number, dir: number[]): boolean => {
      for (let i = 0; i < wordLength; i++) {
        const newRow = r + dir[0] * i;
        const newCol = c + dir[1] * i;
  
        if (
          newRow < 0 ||
          newRow >= rows ||
          newCol < 0 ||
          newCol >= cols ||
          grid[newRow][newCol] !== word[i]
        ) {
          return false;
        }
      }
      return true;
    };
  
    // Loop through every cell in the grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Check in all directions for the word starting at (r, c)
        for (const dir of directions) {
          if (isWordAt(r, c, dir)) {
            count++;
          }
        }
      }
    }
  
    return count;
  }
  
  // Example Usage
  const grid = [
    "MMMSXXMASM".split(""),
    "MSAMXMSMSA".split(""),
    "AMXSXMAAMM".split(""),
    "MSAMASMSMX".split(""),
    "XMASAMXAMM".split(""),
    "XXAMMXXAMA".split(""),
    "SMSMSASXSS".split(""),
    "SAXAMASAAA".split(""),
    "MAMMMXMMMM".split(""),
    "MXMXAXMASX".split(""),
  ];
  const inputGrid: string[][] = [];

  function loadGridFromFile(): string[][] {
    // Read the file content and split it into lines
    const fileContent = readFileSync('./input/day4Input.txt', 'utf-8');

    const lines = fileContent.trim().split(/\r?\n/);
  
    // Convert each line into an array of characters
    return lines.map(line => line.split(''));
  }

  const word = "XMAS";
  const occurrences = countWordOccurrences(loadGridFromFile(), word);
  console.log(`The word '${word}' appears ${occurrences} times.`);
  

  // ~~~~~~~ Part two

// Part two is "hardcoded" to look for MAS in an X shape

function countXmasOccurrences(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
  
    // Directions for row and column movements
    const directionsOne = [
      [1, 1], // Down-Right Diagonal
      [-1, -1], // Up-Left Diagonal
    ];
    const directionsTwo = [
        [1, -1], // Down-Left Diagonal
        [-1, 1], // Up-Right Diagonal
      ];
  
    let count = 0;
  
    // Helper function to check if the word exists starting from (r, c) in a given direction
    const isWordAt = (r: number, c: number, dirOne: number[], dirTwo: number[]): boolean => {
        const newRow = r + dirOne[0];
        const newCol = c + dirOne[1];
        const newRowTwo = r + dirTwo[0];
        const newColTwo = c + dirTwo[1];
  
        //Check if either diagonal value is out of bounds
        if (
          newRow < 0 ||
          newRow >= rows ||
          newCol < 0 ||
          newCol >= cols ||
          newRowTwo < 0 ||
          newRowTwo >= rows ||
          newColTwo < 0 ||
          newColTwo >= cols
        ) {
          return false;
        }
        if((grid[newRow][newCol] === "M" && grid[newRowTwo][newColTwo] === "S") || (grid[newRow][newCol] === "S" && grid[newRowTwo][newColTwo] === "M")){
            return true
        }
      return false;
    };
  
    // Loop through every cell in the grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        //Find possible centers
        if(grid[r][c] == "A") {
            //Check diagonal, if it matches in both directions then count it as an X
                if (isWordAt(r, c, directionsOne[0],directionsOne[1]) &&
                    isWordAt(r, c, directionsTwo[0],directionsTwo[1])) {
                    count++;
                }
            }
        }       
      }
  
    return count;
  }
 
  const xmas = countXmasOccurrences(loadGridFromFile());
  console.log(`The word '${word}' appears ${xmas} times.`);
  


    //Answers
    //The word 'XMAS' appears 2573 times.
    //The word 'XMAS' appears 1850 times.