import { readFileSync } from 'fs';

export function readLines(filePath: string): string[] {
  try {
    // Read file content
    const fileContent = readFileSync(filePath, 'utf-8');

    // Split content by newlines
    const lines = fileContent.split(/\r?\n/);

    return lines;
  } catch (error) {
    console.error(`Error reading file at ${filePath}:`, error);
    return [];
  }
}