var maxProductCutRope = function (n) {
  let nums = Array.from({ length: n - 1 }, (_, i) => i + 1);

  const memo = Array(nums.length + 1)
    .fill(-1)
    .map(() => Array(n + 1).fill(-1));

  return maxProductCutRopeRec(nums, n, 0, memo);
};

var maxProductCutRopeRec = function (nums, target, currentIndex, memo) {
  if (target < 0) return Number.NEGATIVE_INFINITY;

  if (target == 0) return 1;

  if (currentIndex >= nums.length) return 1;

  if (memo[currentIndex][target] != -1) return memo[currentIndex][target];

  let current =
    maxProductCutRopeRec(
      nums,
      target - nums[currentIndex],
      currentIndex,
      memo
    ) * nums[currentIndex];

  let next = maxProductCutRopeRec(nums, target, currentIndex + 1, memo);

  memo[currentIndex][target] = Math.max(current, next);

  return memo[currentIndex][target];
};

console.log(maxProductCutRope(10));
