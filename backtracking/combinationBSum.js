var combinationSumBUniqueDistinct = function (k, n) {
  let nums = Array.from({ length: n }, (_, i) => i + 1);
  return combinationSumBUniqueDistinctRec(nums, 0, n, k, [], []);
};

var combinationSumBUniqueDistinctRec = function (
  nums,
  currentIndex,
  sum,
  k,
  path,
  paths
) {
  if (sum < 0) return [];

  if (sum == 0 && path.length == k) {
    paths.push([...path]);
    return paths;
  }

  if (currentIndex > nums.length) return [];

  for (let i = currentIndex; i < nums.length; i++) {
    let current = nums[i];

    if (current > 9) continue;

    path.push(current);

    combinationSumBUniqueDistinctRec(
      nums,
      i + 1,
      sum - current,
      k,
      path,
      paths
    );

    path.pop();
  }

  return paths;
};
console.log(combinationSumBUniqueDistinct(3, 9));
console.log(combinationSumBUniqueDistinct(2, 18));
