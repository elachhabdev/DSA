const graphs = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirst = (source) => {
  let stack = [];

  stack.push(source);

  while (stack.length > 0) {
    let current = stack.pop();

    console.log(current);

    for (let neighbor of graphs[current]) {
      stack.push(neighbor);
    }
  }
};

const depthFirstRec = (graphs, source) => {
  console.log(source);

  for (let neighbor of graphs[source]) {
    depthFirstRec(graphs, neighbor);
  }
};

depthFirstRec(graphs, "a");
