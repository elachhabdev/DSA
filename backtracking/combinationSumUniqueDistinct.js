var combinationSumUniqueDistinct = function (nums, sum) {
  nums.sort((a, b) => a - b);
  return combinationSumUniqueDistinctRec(nums, 0, sum, [], []);
};

var combinationSumUniqueDistinctRec = function (
  nums,
  currentIndex,
  sum,
  path,
  paths
) {
  if (sum < 0) return [];

  if (sum == 0) {
    paths.push([...path]);
    return paths;
  }

  if (currentIndex > nums.length) return [];

  for (let i = currentIndex; i < nums.length; i++) {
    if (i != currentIndex && nums[i - 1] == nums[i]) continue;

    let current = nums[i];

    path.push(current);

    combinationSumUniqueDistinctRec(nums, i + 1, sum - current, path, paths);

    path.pop();
  }

  return paths;
};

console.log(combinationSumUniqueDistinct([10, 1, 2, 7, 6, 1, 5], 8));
