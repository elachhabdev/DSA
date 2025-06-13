function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const n = intervals.length;
  const memo = new Array(n).fill(undefined);

  function findNextIndex(i) {
    let j = i + 1;
    while (j < intervals.length) {
      if (intervals[i][1] <= intervals[j][0]) {
        return j;
      }
      j++;
    }
    return intervals.length;
  }

  function findNextIndexBS(i) {
    let low = i + 1,
      high = n;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (intervals[mid][0] >= intervals[i][1]) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    return low;
  }

  function dp(i) {
    if (i >= n) return 0;
    if (memo[i] !== undefined) return memo[i];

    let skip = dp(i + 1);

    let next = findNextIndexBS(i);
    let take = 1 + dp(next);

    memo[i] = Math.max(skip, take);
    return memo[i];
  }

  const maxNonOverlapping = dp(0);
  return n - maxNonOverlapping;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
