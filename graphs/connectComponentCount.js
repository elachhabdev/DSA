let graphs = {
  0: [1, 2, 3],
  1: [0, 2],
  2: [0, 1],
  3: [1, 0],
};

const connectedComponentsCount = (graphs) => {
  let total = 0;
  let visited = new Set();

  for (let src in graphs) {
    let srcInt = parseInt(src);
    if (!visited.has(srcInt)) {
      total++;
      depthConnected(graphs, srcInt, visited);
    }
  }

  return total;
};

const depthConnected = (graph, src, visited) => {
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (visited.has(neighbor)) continue;
    depthConnected(graph, neighbor, visited);
  }
};

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  })
); // -> 2
