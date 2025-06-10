const nonAdjacentSum = (nums) => {
  let graph = {};

  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    graph[currentIndex] = [];

    for (let i = currentIndex + 1; i < nums.length; i++) {
      if (currentIndex == i + 1 || currentIndex == i || currentIndex == i - 1)
        continue;

      let edge = [currentIndex.toString(), i.toString()];

      if (edge[0] in graph) {
        graph[edge[0]].push(edge[1]);
      } else {
        graph[edge[0]] = [edge[1]];
      }
    }
  }

  let visited = new Set();
  let max = Number.NEGATIVE_INFINITY;

  for (let src in graph) {
    if (visited.has(src)) continue;
    max = Math.max(depthFirst(graph, nums, src, visited, {}, {}), max);
  }

  return max;
};

const depthFirst = (graph, nums, src, visited, distances, memo) => {
  if (src in distances) return distances[src];

  if (graph[src].length == 0) {
    return nums[src];
  }

  visited.add(src);

  let paths = 0;

  for (let neighbor of graph[src]) {
    paths = Math.max(
      paths,
      nums[src] + depthFirst(graph, nums, neighbor, visited, distances, memo)
    );
  }

  distances[src] = paths;

  return paths;
};
let nums = [7, 5, 5, 12];
nums = [2, 4, 5, 12, 7];
nums = [
  72, 62, 10, 6, 20, 19, 42, 46, 24, 78, 30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  9, 12, 3, 1, 19, 30, 50, 20,
];
nums = [
  72, 62, 10, 6, 20, 19, 42, 46, 24, 78, 30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
  83, 80, 56, 68, 6, 22, 56, 96, 77, 98, 61, 20, 0, 76, 53, 74, 8, 22, 92, 37,
  30, 41, 75, 38, 23, 28, 66, 55, 12, 17, 72, 62, 10, 6, 20, 19, 42, 46, 24, 78,
  42,
];
console.log(nonAdjacentSum(nums));
