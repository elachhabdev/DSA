let graph = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
};

let paths = [];

const longestPath = (graph) => {
  let longest = -1;
  let visited = new Set();
  let memo = {};

  for (let src in graph) {
    if (visited.has(src)) continue;
    longest = Math.max(longest, depthFirst(graph, src, visited, memo));
  }

  return longest;
};

const depthFirst = (graph, src, visited, memo) => {
  if (graph[src].length == 0) return 0;

  if (visited.has(src)) return memo[src];

  visited.add(src);

  let count = -1;

  for (let neighbor of graph[src]) {
    count = Math.max(count, depthFirst(graph, neighbor, visited, memo) + 1);
  }

  memo[src] = count;

  return count;
};

console.log(longestPath(graph, "a"));

graph = {
  a: ["c", "b"],
  b: ["c"],
  c: [],
  q: ["r"],
  r: ["s", "u", "t"],
  s: ["t"],
  t: ["u"],
  u: [],
};

console.log(longestPath(graph, "h"));
graph = {
  h: ["i", "j", "k"],
  g: ["h"],
  i: [],
  j: [],
  k: [],
  x: ["y"],
  y: [],
};

console.log(longestPath(graph, "h"));

graph = {
  a: ["b"],
  b: ["c"],
  c: [],
  e: ["f"],
  f: ["g"],
  g: ["h"],
  h: [],
};

console.log(longestPath(graph, "h"));

graph = {
  a: ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
  b: ["c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
  c: ["d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
  d: ["e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
  e: ["f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
  f: ["g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
  g: ["h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
  h: ["i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
  i: ["j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
  j: ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w"],
  k: ["l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w"],
  l: ["m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"],
  m: ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x"],
  n: ["o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  o: ["p", "q", "r", "s", "t", "u", "v", "w", "x"],
  p: ["q", "r", "s", "t", "u", "v", "w", "x", "y"],
  q: ["r", "s", "t", "u", "v", "w", "x", "y"],
  r: ["s", "t", "u", "v", "w", "x", "y", "z"],
  s: ["t", "u", "v", "w", "x", "y", "z"],
  t: ["u", "v", "w", "x", "y", "z"],
  u: ["v", "w", "x", "y", "z"],
  v: ["w", "x", "y", "z"],
  w: ["x", "y", "z"],
  x: ["y", "z"],
  y: ["z"],
  z: [],
};
console.log(longestPath(graph, "h"));
