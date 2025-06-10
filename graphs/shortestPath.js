let edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const allPaths = (graph, src, dst, [...path]) => {
  if (src == dst) {
    return [path, dst];
  }

  path.push(src);

  let paths = [];

  for (let neighbor of graph[src]) {
    if (path.includes(neighbor)) continue;
    paths.push(...allPaths(graph, neighbor, dst, path));
  }

  return paths;
};

const shortDepthFirst = (graph, src, dst, [...path]) => {
  if (src == dst) {
    return path.length;
  }

  path.push(src);

  let short = Number.POSITIVE_INFINITY;

  for (let neighbor of graph[src]) {
    if (path.includes(neighbor)) continue;
    short = Math.min(shortDepthFirst(graph, neighbor, dst, path), short);
  }

  return short;
};

const shortestPath = (edges, nodeA, nodeB) => {
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

  console.log(graph);

  let visited = new Set();

  let shorts = [];

  console.log(shortDepthFirst(graph, nodeA, nodeB, []));
};

edges = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

shortestPath(edges, "a", "e");
