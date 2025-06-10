const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

let graph = {};

for (let edge of edges) {
  if (edge[0] in graph) {
    graph[edge[0]].push(edge[1]);
  } else {
    graph[edge[0]] = [edge[1]];
  }

  if (edge[1] in graph) {
    graph[edge[1]].push(edge[0]);
  } else {
    graph[edge[1]] = [edge[0]];
  }
}

const hasPath = (graph, src, dst, visited) => {
  if (src == dst) return true;

  visited.push(src);

  for (let neighbor of graph[src]) {
    if (visited.includes(neighbor)) continue;
    if (hasPath(graph, neighbor, dst, visited) == true) {
      return true;
    }
  }

  return false;
};

console.log(graph);

console.log(hasPath(graph, "j", "n", []));
