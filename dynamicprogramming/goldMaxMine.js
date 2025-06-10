var getMaximumGold = function (grid) {
  let max = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      max = Math.max(getMaximumGoldRec(grid, row, col, new Set(), {}), max);
    }
  }

  return max;
};

var getMaximumGoldRec = function (grid, row, col, visited, memo) {
  let key = `${row},${col}`;

  if (visited.has(key)) return 0;

  if (row >= grid.length || row < 0 || col >= grid[0].length || col < 0) {
    return 0;
  }
  if (grid[row][col] == 0) return 0;

  visited.add(key);

  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let max = 0;

  for (let direction of directions) {
    let moveVertical = row + direction[1];
    let moveHorizontal = col + direction[0];

    max = Math.max(
      max,
      getMaximumGoldRec(grid, moveVertical, moveHorizontal, visited, memo) +
        grid[row][col]
    );
  }

  visited.delete(key);

  return max;
};

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
);
/* console.log(
  getMaximumGold([
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20],
  ])
);
console.log(
  getMaximumGold([
    [1, 0, 7, 0, 0, 0],
    [2, 0, 6, 0, 1, 0],
    [3, 5, 6, 7, 4, 2],
    [4, 3, 1, 0, 2, 0],
    [3, 0, 5, 0, 20, 0],
  ])
);

console.log(
  getMaximumGold([
    [0, 0, 34, 0, 5, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 21, 0, 0, 0, 0, 0],
    [0, 18, 0, 0, 8, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [15, 0, 0, 0, 0, 22, 0, 0, 0, 21],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 0, 0, 0, 0, 38, 0],
  ])
);
 */
