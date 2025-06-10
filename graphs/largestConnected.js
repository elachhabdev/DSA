const largestComponent = (graphs) => {
  let count = 0;
  let visited = new Set();

  for (let src in graphs) {
    let srcInt = src;
    if (!visited.has(srcInt)) {
      count = Math.max(depthConnected(graphs, srcInt, visited, 0), count);
    }
  }

  return count;
};

const depthConnected = (graph, src, visited, count) => {
  visited.add(src);
  count++;

  for (let neighbor of graph[src]) {
    if (visited.has(neighbor)) continue;
    count = depthConnected(graph, neighbor, visited, count);
  }

  return count;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  })
);
console.log(
  largestComponent({
    1: ["2"],
    2: ["1", "8"],
    6: ["7"],
    9: ["8"],
    7: ["6", "8"],
    8: ["9", "7", "2"],
  })
);
