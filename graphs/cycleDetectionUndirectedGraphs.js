const hasCycle = (graph) => {
  let visited = new Set();

  for (let src in graph) {
    if (cycleDetection(graph, src, -1, visited) == true) {
      console.log(true);
      return true;
    }
  }
  console.log(false);

  return false;
};

const cycleDetection = (graph, src, parent, visited) => {
  visited.add(src);

  for (let neighbor of graph[src]) {
    if (!visited.has(neighbor)) {
      if (cycleDetection(graph, neighbor, src, visited) == true) {
        return true;
      }
    } else {
      if (parent != neighbor && parent != -1) {
        return true;
      }
    }
  }

  return false;
};

hasCycle({
  a: ["b", "c"],
  b: ["c", "a"],
  c: ["a", "b"],
  d: [],
  e: ["c"],
});

hasCycle({
  a: ["b", "e"],
  b: ["c"],
  c: ["d", "e"],
  d: [],
  e: ["c", "a"],
});
