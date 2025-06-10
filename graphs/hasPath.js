const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};
const hasPath = (graph, src, dst) => {
  let stack = [];

  stack.push(src);

  while (stack.length > 0) {
    let current = stack.pop();

    if (dst == current) return true;

    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return false;
};

console.log(hasPath(graph, "f", "j"));
