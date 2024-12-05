import { readFileSync } from 'fs';

function calculateTotalDistanceFromFile(filePath: string): number {
  // Read the file and split lines


    const fileContent = readFileSync(filePath, 'utf-8');
  const lines = fileContent.trim().split(/\r?\n/);

  // Initialize arrays for left and right lists
  const leftList: number[] = [];
  const rightList: number[] = [];

  // Populate the lists by parsing each line
  lines.forEach(line => {
    const [left, right] = line.split('   ').map(Number);
    leftList.push(left);
    rightList.push(right);
  });

  // Sort both lists
  const sortedLeft = leftList.sort((a, b) => a - b);
  const sortedRight = rightList.sort((a, b) => a - b);

  // Calculate the total distance
  let totalDistance = 0;
  for (let i = 0; i < sortedLeft.length; i++) {
    totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
  }

  return totalDistance;
}

// Example Usage
const filePath = './input.txt'; // Replace with your file path
const filePathArg = process.argv.at(2) ?? './challenges/day1/day1Input.txt'; // Skip the first two default arguments
let totalDistance = calculateTotalDistanceFromFile(filePathArg);
console.log('Total Distance:', totalDistance);

// ------ Part two ----------

function calculateSimilarity(filePath: string): number {
    // Read the file and split lines
  
  
      const fileContent = readFileSync(filePath, 'utf-8');
    const lines = fileContent.trim().split(/\r?\n/);
  
    // Initialize arrays for left and right lists
    const leftList: number[] = [];
    const rightList: number[] = [];
  
    // Populate the lists by parsing each line
    lines.forEach(line => {
      const [left, right] = line.split('   ').map(Number);
      leftList.push(left);
      rightList.push(right);
    });
  
    // Calculate the total distance
    let similarity = 0;
    for (let i = 0; i < leftList.length; i++) {
        
        similarity += leftList[i] * rightList.reduce((count, current) => count + (current === leftList[i] ? 1 : 0), 0);
    }
    return similarity;
  }
  
  // Example Usage 
  let similarity = calculateSimilarity(filePathArg);
  console.log('Similarity:', similarity);
  
// ~~~~~~~ Answers (for current input
//Total Distance: 1970720
//Similarity: 17191599