const graphs = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const breathFirst = (source) => {
  let queue = [];

  queue.push(source);

  while (queue.length > 0) {
    let current = queue.shift();

    console.log(current);

    for (let neighbor of graphs[current]) {
      queue.push(neighbor);
    }
  }
};

breathFirst("a");
