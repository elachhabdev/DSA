var longestConsecutive = function (nums) {
  let set = new Set(nums);

  if (nums.length == 0) return 0;

  let consecutives = [];

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] - 1)) {
      consecutives.push([nums[i] - 1, nums[i]]);
    }
  }

  let max = 1;

  if (consecutives.length > 0) {
    let intervals = mergeIntervals(consecutives);

    for (let interval of intervals) {
      max = Math.max(interval[1] - interval[0] + 1, max);
    }
  }

  return max;
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

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([100, 4, 400, 1, 3, 2, 200, 300]));
console.log(longestConsecutive([0, 1, 1, 1, 1, 1, 2]));
console.log(longestConsecutive([1, 1, 1, 1, 1, 1]));
console.log(longestConsecutive([0, 1, 1]));
console.log(longestConsecutive([0]));
console.log(longestConsecutive([0, 0]));
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
console.log(longestConsecutive([1, 3, 4, 2]));
console.log(
  longestConsecutive([
    4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3,
  ])
);
