var insertIntervals = function (intervals, newInterval) {
  let newIntervals = [];
  let s = 0;

  if (intervals.length == 0) newIntervals = [newInterval];

  for (let i = 0; i < intervals.length - s; i++) {
    if (intervals[s + i][0] < newInterval[0]) {
      newIntervals.push(intervals[s + i]);
    } else {
      newIntervals.push(newInterval);
      s = i;
    }
  }

  for (let i = s; i < intervals.length; i++) {
    newIntervals.push(intervals[i]);
  }

  return mergeIntervals(newIntervals);
};

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
  insertIntervals(
    [
      [0, 0],
      [1, 3],
      [6, 9],
      [7, 9],
    ],
    [5, 10]
  )
);
