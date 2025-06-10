const maxPathSum = (grid) => {
  let graph = {};

  let total = grid.length * grid[0].length;

  for (let i = 0; i < total; i++) {
    let col = i % grid[0].length;
    let row = Math.floor(i / grid[0].length);

    let dirs = [
      [1, 0],
      [0, 1],
    ];

    let s = i.toString();

    graph[s] = [];

    for (let dir of dirs) {
      let colDir = col + dir[0];
      let rowDir = row + dir[1];

      let dirS = colDir + rowDir * grid[0].length;

      if (
        colDir >= 0 &&
        colDir < grid[0].length &&
        rowDir >= 0 &&
        rowDir < grid.length
      ) {
        if (s in graph) {
          graph[s].push(dirS.toString());
        }
      }
    }
  }

  console.log(graph);

  let visited = new Set();

  return depthFirst(graph, grid, 0, total - 1, visited, {}, {});
};

const depthFirst = (graph, grid, src, dst, visited, distances, memo) => {
  if (visited.has(src)) return distances[src];
  let col = src % grid[0].length;
  let row = Math.floor(src / grid[0].length);

  if (src == dst) {
    return grid[row][col];
  }
  visited.add(src);

  let paths = 0;

  for (let neighbor of graph[src]) {
    paths = Math.max(
      paths,
      grid[row][col] +
        depthFirst(graph, grid, neighbor, dst, visited, distances, memo)
    );
  }

  distances[src] = paths;

  return paths;
};

let grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];
console.log(maxPathSum(grid));
grid = [
  [1, 2, 8, 1],
  [3, 1, 12, 10],
  [4, 0, 6, 3],
];
console.log(maxPathSum(grid));
