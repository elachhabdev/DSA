const minStepToReachTarget = (knightPos, targetPos, n) => {
  return breathFirst(knightPos, targetPos, n);
};

const breathFirst = (start, end, n) => {
  let shortMin = Number.POSITIVE_INFINITY;

  let visited = new Set();

  let queue = [];

  let dirs = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, -1],
    [2, 1],
    [-2, -1],
    [-2, 1],
  ];

  queue.push([[start[0] - 1, start[1] - 1], 0]);

  while (queue.length > 0) {
    let [current, distance] = queue.shift();

    let col = current[0];
    let row = current[1];

    if (col == end[0] - 1 && row == end[1] - 1) {
      return distance;
    }

    distance++;

    for (let dir of dirs) {
      let colDir = col + dir[0];
      let rowDir = row + dir[1];

      let key = `${colDir},${rowDir}`;

      if (colDir >= 0 && colDir < n && rowDir >= 0 && rowDir < n) {
        if (visited.has(key)) continue;

        visited.add(key);
        queue.push([[colDir, rowDir], distance]);
      } else {
        visited.add(key);
      }
    }
  }
  return shortMin;
};
console.log(minStepToReachTarget([4, 5], [1, 1], 6));
console.log(minStepToReachTarget([22, 11], [1, 1], 100));
