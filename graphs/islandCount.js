/* const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
]; */

const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

let graph = {};

let total = grid.length * grid[0].length;

for (let i = 0; i < total; i++) {
  let col = i % grid[0].length;
  let row = Math.floor(i / grid[0].length);

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  if (grid[row][col] == "W") continue;

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
      if (grid[rowDir][colDir] == "W") continue;

      if (s in graph) {
        graph[s].push(dirS);
      }
    }
  }
}

const CountIsland = (graphs) => {
  let count = 0;
  let visited = new Set();

  for (let src in graphs) {
    if (!visited.has(src)) {
      count++;
      depthFirst(graphs, src, visited);
    }
  }

  return count;
};

const depthFirst = (graph, src, visited) => {
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (visited.has(neighbor)) continue;
    depthFirst(graph, neighbor, visited);
  }
};
console.log(graph);
console.log(CountIsland(graph));
