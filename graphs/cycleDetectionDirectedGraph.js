const hasCycle = (graph) => {
  let visited = new Set();

  let visiting = new Set();

  for (let src in graph) {
    if (cycleDetection(graph, src, visiting, visited) == true) {
      console.log(true);
      return true;
    }
  }
  console.log(false);

  return false;
};

const cycleDetection = (graph, src, visiting, visited) => {
  if (visited.has(src)) return false;

  if (visiting.has(src)) return true;

  visiting.add(src);

  for (let neighbor of graph[src]) {
    if (cycleDetection(graph, neighbor, visiting, visited) == true) {
      return true;
    }
  }

  visiting.delete(src);
  visited.add(src);

  return false;
};

hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
}); // -> true

hasCycle({
  a: ["b", "c"],
  b: ["c"],
  c: ["d"],
  d: [],
}); // -> false

hasCycle({
  a: ["b", "c"],
  b: [],
  c: [],
  e: ["f"],
  f: ["e"],
}); // -> true

hasCycle({
  q: ["r", "s"],
  r: ["t", "u"],
  s: [],
  t: [],
  u: [],
  v: ["w"],
  w: [],
  x: ["w"],
}); // -> false

hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["a"],
  g: [],
}); // -> true

hasCycle({
  a: ["b"],
  b: ["c"],
  c: ["d"],
  d: ["b"],
}); // -> true

hasCycle({
  a: ["b", "c"],
  b: ["c"],
  c: ["d"],
  d: [],
  e: ["c"],
});
