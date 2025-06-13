var subsetsDistinct = function (nums) {
  return subsetsDistinctRec(nums, new Map());
};
var subsetsDistinctRec = function (nums, memo) {
  let key = nums.join("");

  if (memo.has(key)) return memo.get(key);

  if (nums.length == 0) return [[]];

  let current = nums[0];

  let paths = [];

  let takeIt = subsetsDistinctRec(nums.slice(1), memo);

  if (takeIt.length == 0) {
    paths.push([current]);
  } else {
    for (let currentPath of takeIt) {
      paths.push([current, ...currentPath]);
    }
  }
  let leaveIt = subsetsDistinctRec(nums.slice(1), memo);

  memo.set(key, [...paths, ...leaveIt]);

  return memo.get(key);
};

console.log(subsetsDistinct([1, 2, 3, 4]));
