function solution(grid = []) {
  const serieLength = grid[0].length;

  // Validates if every serie has the same length
  if (!grid.every(serie => serie.length === serieLength)) return false;

  for (let i = 0; i < grid.length - 1; i++) {
    const current = grid[i];
    const next = grid[i + 1];
    for (let j = 0; j < current.length; j++) {
      // only will check next serie's nearest positions if there is a robot in the current position
      if (current[j] !== 1) continue;
      // check nearest positions, taking into account validations for first and last ones.
      if (next[j] === 1) continue;
      if (j < serieLength - 1 && next[j + 1] === 1) continue;
      if (j > 0 && next[j - 1] === 1) continue;

      // if the robot is not in any of the nearest positions, the grid is incorrect.
      return false;
    }
  }

  return true;
}


console.log(solution([[1, 0, 0, 1], [0, 1, 1, 0]]), true);
console.log(solution([[1, 0, 0, 1], [0, 1, 1, 0, 0]]), false);
console.log(solution([[1, 0, 0, 0, 1], [1, 0, 1, 0, 0]]), false);
