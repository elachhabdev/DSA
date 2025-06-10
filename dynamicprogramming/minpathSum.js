var minPathSumToContinue = function (grid) {
  return minPathSumRecToContinue(grid, 0, 0, 0, {});
};

var minPathSumRecToContinue = function (grid, row, col, currentSum, memo) {
  let key = `${row},${col}`;

  if (key in memo) {
    if (row == 1 && col == 1) {
      console.log(memo);
      console.log(`${row},${col},${currentSum},`);
      return memo[key][0] - memo[key][1];
    }
  }

  if (row == grid.length - 1 && col == grid[0].length - 1)
    return currentSum + grid[row][col];

  let right = Number.POSITIVE_INFINITY;
  let bottom = Number.POSITIVE_INFINITY;

  currentSum += grid[row][col];

  if (col + 1 < grid[0].length) {
    right = minPathSumRecToContinue(grid, row, col + 1, currentSum, memo);
  }

  if (row + 1 < grid.length) {
    bottom = minPathSumRecToContinue(grid, row + 1, col, currentSum, memo);
  }

  memo[key] = [Math.min(right, bottom), currentSum];

  return memo[key][0];
};

var minPathSum = function (grid) {
  return minPathSumRec(grid, 0, 0, {});
};

var minPathSumRec = function (grid, row, col, memo) {
  let key = `${row},${col}`;

  if (key in memo) return memo[key];

  if (row == grid.length - 1 && col == grid[0].length - 1)
    return grid[row][col];

  let right = Number.POSITIVE_INFINITY;
  let bottom = Number.POSITIVE_INFINITY;

  if (col + 1 < grid[0].length) {
    right = minPathSumRec(grid, row, col + 1, memo) + grid[row][col];
  }

  if (row + 1 < grid.length) {
    bottom = minPathSumRec(grid, row + 1, col, memo) + grid[row][col];
  }

  memo[key] = Math.min(right, bottom);

  return memo[key];
};

var minPathSumTabulation = function (grid) {
  const dp = Array(grid.length)
    .fill(0)
    .map(() => Array(grid[0].length).fill(0));

  dp[grid.length - 1][grid[0].length - 1] =
    grid[grid.length - 1][grid[0].length - 1];

  for (let row = grid.length - 1; row >= 0; row--) {
    for (let col = grid[0].length - 1; col >= 0; col--) {
      if (row == grid.length - 1 && col == grid[0].length - 1) continue;

      let right =
        col + 1 >= grid[0].length
          ? Number.POSITIVE_INFINITY
          : dp[row][col + 1] + grid[row][col];
      let bottom =
        row + 1 >= grid.length
          ? Number.POSITIVE_INFINITY
          : dp[row + 1][col] + grid[row][col];

      dp[row][col] = Math.min(right, bottom);
    }
  }

  return dp[0][0];
};

console.log(
  minPathSumTabulation([
    [1, 3, 1],
    [1, 5, 1],
  ])
);

console.log(
  minPathSumTabulation([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

console.log(
  minPathSumTabulation([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

console.log(
  minPathSumTabulation([
    [1, 4, 8, 6, 2, 2, 1, 7],
    [4, 7, 3, 1, 4, 5, 5, 1],
    [8, 8, 2, 1, 1, 8, 0, 1],
    [8, 9, 2, 9, 8, 0, 8, 9],
    [5, 7, 5, 7, 1, 8, 5, 5],
    [7, 0, 9, 4, 5, 6, 5, 6],
    [4, 9, 9, 7, 9, 1, 9, 0],
  ])
);
