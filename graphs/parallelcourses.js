let numCourses = 6;
let prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];

const semestersRequired = (numCourses, prereqs) => {
  let graph = {};

  for (let edge of prereqs) {
    if (edge[0] in graph) {
      graph[edge[0].toString()].push(edge[1].toString());
    } else {
      graph[edge[0].toString()] = [edge[1].toString()];
    }
    if (!(edge[1] in graph)) {
      graph[edge[1].toString()] = [];
    }
  }

  return largestComponent(graph);
};
const largestComponent = (graphs) => {
  let count = 1;
  let visited = new Set();
  let memo = {};

  for (let src in graphs) {
    if (!visited.has(src)) {
      count = Math.max(depthFirst(graphs, src, visited, memo), count);
    }
  }

  return count == Number.POSITIVE_INFINITY ? -1 : count;
};

const depthFirst = (graph, src, visited, memo) => {
  if (visited.has(src))
    return src in memo ? memo[src] : Number.POSITIVE_INFINITY;

  visited.add(src);

  let count = 1;

  for (let neighbor of graph[src]) {
    count = Math.max(count, depthFirst(graph, neighbor, visited, memo) + 1);
  }

  memo[src] = count;

  return count;
};

prereqs = [
  [7, 6],
  [1, 6],
  [2, 6],
  [3, 6],
  [4, 6],
  [5, 6],
  [7, 7],
];
console.log(semestersRequired(7, prereqs));
