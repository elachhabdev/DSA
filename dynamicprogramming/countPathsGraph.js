const countPaths = (grid) => {
  let graph = {};

  let total = grid.length * grid[0].length;

  for (let i = 0; i < total; i++) {
    let col = i % grid[0].length;
    let row = Math.floor(i / grid[0].length);

    let dirs = [
      [1, 0],
      [0, 1],
    ];

    if (grid[row][col] == "X") continue;

    let s = i.toString();

    graph[s] = [];

    for (let dir of dirs) {
      let colDir = col + dir[0];
      let rowDir = row + dir[1];

      let dirS = (colDir + rowDir * grid[0].length).toString();

      if (
        colDir >= 0 &&
        colDir < grid[0].length &&
        rowDir >= 0 &&
        rowDir < grid.length
      ) {
        if (grid[rowDir][colDir] == "X") continue;

        if (s in graph) {
          graph[s].push(dirS);
        }
      }
    }
  }

  console.log(graph);

  let visited = new Set();

  return depthFirst(graph, "0", (total - 1).toString(), visited, {}, {});
};

const depthFirst = (graph, src, dst, visited, distances, memo) => {
  if (visited.has(src)) return distances[src];

  if (src == dst) {
    return 1;
  }

  let paths = 0;

  for (let neighbor of graph[src]) {
    visited.add(src);
    paths += depthFirst(graph, neighbor, dst, visited, distances, memo);
  }

  distances[src] = paths;

  return paths;
};

let grid = [
  ["O", "O", "X"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
grid = [
  ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
  ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
  ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
];

console.log(countPaths(grid));
