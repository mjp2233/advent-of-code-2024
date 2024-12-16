import { findBestPath } from './day16'; // Update with the actual file name and function

describe('findBestPath', () => {
  const parseInput = () => {
    const grid = [
      '###############',
      '#.......#....E#',
      '#.#.###.#.###.#',
      '#.....#.#...#.#',
      '#.###.#####.#.#',
      '#.#.#.......#.#',
      '#.#.#####.###.#',
      '#...........#.#',
      '###.#.#####.#.#',
      '#...#.....#.#.#',
      '#.#.#.###.#.#.#',
      '#.....#...#.#.#',
      '#.###.#.#.#.#.#',
      '#S..#.....#...#',
      '###############',
    ].map((line) => line.split(''));
    return grid;
  };

  const STARTING_POSITION = [13, 1];

  it('finds the shortest path to the goal', () => {
    const grid = parseInput();
    const result = findBestPath(grid, STARTING_POSITION[0], STARTING_POSITION[1]);
    expect(result).toBe(7036);
  });

  it('returns Infinity for a blocked start', () => {
    const grid = [
      '#####',
      '#S###',
      '#####',
    ].map((line) => line.split(''));
    const visited = new Set<string>();
    const result = findBestPath(grid, 1, 1);
    expect(result).toBe(Infinity);
  });

  it('returns Infinity when no path exists', () => {
    const grid = [
      '#########',
      '#S.....#E',
      '#########',
    ].map((line) => line.split(''));
    const visited = new Set<string>();
    const result = findBestPath(grid, 1, 1);
    expect(result).toBe(Infinity);
  });

  it('handles a simple straight path', () => {
    const grid = [
      '#####',
      '#S..E',
      '#####',
    ].map((line) => line.split(''));
    const visited = new Set<string>();
    const result = findBestPath(grid, 1, 1);
    expect(result).toBe(3); // 3 steps forward
  });
  it('handles a simple turning path', () => {
    const grid = [
      '#####',
      '#E..#',
      '###.#',
      '#S..#',
      '#####',
    ].map((line) => line.split(''));
    const visited = new Set<string>();
    const result = findBestPath(grid, 3, 1);
    expect(result).toBe(2006); // 3 steps forward
  });
  it('handles a simple reversed turning path', () => {
    const grid = [
      '#####',
      '#S..#',
      '###.#',
      '#E..#',
      '#####',
    ].map((line) => line.split(''));
    const visited = new Set<string>();
    const result = findBestPath(grid, 1, 1);
    expect(result).toBe(2006); // 3 steps forward
  });
});

