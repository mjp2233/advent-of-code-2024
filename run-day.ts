#!/usr/bin/env bun
import { execSync } from "child_process";

// Access command-line arguments
const args = process.argv.slice(2); // Skip the first two default arguments

// Print all arguments
console.log('Arguments:', args);
const day: any = args.at(0); //Default to invalid day 0
console.log(day);

// Validate day input
const dayNumber = parseInt(day);
if (isNaN(dayNumber) || dayNumber < 0) {
  console.error("Error: Input must be a number: ", dayNumber);
  process.exit(1);
}

// Construct the file path
const filePath = `./challenges/day${dayNumber}/day${dayNumber}.ts`;

// Execute the file with Bun
try {
    execSync(`bun run ${filePath}`, { stdio: "inherit" });
  } catch (error) {
    console.error("Error running the specified file.");
    process.exit(1);
  }