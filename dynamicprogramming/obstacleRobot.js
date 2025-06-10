var uniquePathsWithObstacles = function (obstacleGrid) {
  return uniquePathsWithObstaclesRec(obstacleGrid, 0, 0, new Set(), {});
};

var uniquePathsWithObstaclesRec = function (grid, row, col, visited, memo) {
  let key = `${row},${col}`;

  if (key in memo) {
    return memo[key];
  }

  if (grid[row][col] == 1) return 0;

  if (row == grid.length - 1 && col == grid[0].length - 1)
    return 1 - grid[row][col];

  if (visited.has(key)) return 0;

  let right = 0;
  let bottom = 0;

  visited.add(key);

  if (col + 1 < grid[0].length && grid[row][col + 1] == 0) {
    right = uniquePathsWithObstaclesRec(grid, row, col + 1, visited, memo);
  }

  if (row + 1 < grid.length && grid[row + 1][col] == 0) {
    bottom = uniquePathsWithObstaclesRec(grid, row + 1, col, visited, memo);
  }

  visited.delete(key);

  memo[key] = right + bottom;

  return memo[key];
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 1],
    [0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
  ])
);
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ])
);
console.log(uniquePathsWithObstacles([[0]]));
console.log(uniquePathsWithObstacles([[1]]));
