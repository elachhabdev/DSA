var mergeIntervals = function (intervals) {
  let i = 0;
  let j = 1;

  let mergedIntervals = [];

  intervals.sort((a, b) => a[0] - b[0]);

  while (j < intervals.length) {
    if (intervals[i][1] >= intervals[j][0]) {
      intervals[i] = [
        intervals[i][0],
        Math.max(intervals[i][1], intervals[j][1]),
      ];
    } else {
      mergedIntervals.push(intervals[i]);

      i = j;
    }
    j++;
  }

  mergedIntervals.push(intervals[i]);

  return mergedIntervals;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  mergeIntervals([
    [2, 6],
    [8, 10],
    [15, 18],
    [1, 3],
  ])
);

console.log(
  mergeIntervals([
    [2, 6],
    [8, 10],
    [15, 18],
    [1, 3],
    [7, 15],
  ])
);
