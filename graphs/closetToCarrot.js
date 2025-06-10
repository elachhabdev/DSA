let grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

const closestCarrot = (grid, rowRabbit, colRabbit) => {
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

    if (grid[row][col] == "X") continue;

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
        if (grid[rowDir][colDir] == "X") continue;

        if (s in graph) {
          graph[s].push(dirS.toString());
        }
      }
    }
  }

  let src = colRabbit + rowRabbit * grid[0].length;

  let short = breathFirst(src, graph);

  short = short == Number.POSITIVE_INFINITY ? -1 : short;

  console.log(short);

  return short;
};

const breathFirst = (source, graphs) => {
  let queue = [];
  let currentQueue = [];
  let visited = new Set();
  let shortMin = Number.POSITIVE_INFINITY;

  queue.push([source, 0]);
  /*   currentQueue.push(source);
   */
  while (queue.length > 0) {
    let [current, distance] = queue.shift();

    visited.add(current);

    let col = current % grid[0].length;
    let row = Math.floor(current / grid[0].length);

    if (grid[row][col] == "C") {
      shortMin = Math.min(distance, shortMin);
    }

    distance++;

    for (let neighbor of graphs[current]) {
      if (visited.has(neighbor)) continue;
      queue.push([neighbor, distance]);
    }

    /*  if (currentQueue.length == 0) {
      currentQueue = [...queue];
    } */
  }

  return shortMin;
};

closestCarrot(grid, 1, 2);
grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

closestCarrot(grid, 0, 0);
grid = [
  ["O", "O", "X", "X", "X"],
  ["O", "X", "X", "X", "C"],
  ["O", "X", "O", "X", "X"],
  ["O", "O", "O", "O", "O"],
  ["O", "X", "X", "X", "X"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "C", "O", "O"],
  ["O", "O", "O", "O", "O"],
];

closestCarrot(grid, 3, 4);
grid = [
  ["O", "O", "X", "O", "O"],
  ["O", "X", "X", "X", "O"],
  ["O", "X", "C", "C", "O"],
];

closestCarrot(grid, 1, 4);
grid = [
  ["O", "O", "X", "O", "O"],
  ["O", "X", "X", "X", "O"],
  ["O", "X", "C", "C", "O"],
];

closestCarrot(grid, 2, 0);

grid = [
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "X"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "C"],
];

closestCarrot(grid, 0, 0);

grid = [
  ["O", "O", "X", "C", "O"],
  ["O", "X", "X", "X", "O"],
  ["C", "X", "O", "O", "O"],
];

closestCarrot(grid, 2, 2);
