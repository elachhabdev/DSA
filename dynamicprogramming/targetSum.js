var findTargetSumWays = function (nums, target) {
  return findTargetSumWaysRec(nums, target, 0, 0, new Map());
};
var findTargetSumWaysRec = function (nums, target, sum, currentIndex, memo) {
  if (nums.length == currentIndex) return sum == target ? 1 : 0;

  if (nums.length < currentIndex) return 0;

  let key = `${currentIndex},${sum}`;

  if (memo.has(key)) return memo.get(key);

  let remove = findTargetSumWaysRec(
    nums,
    target,
    sum - nums[currentIndex],
    currentIndex + 1,
    memo
  );

  let add = findTargetSumWaysRec(
    nums,
    target,
    sum + nums[currentIndex],
    currentIndex + 1,
    memo
  );

  memo.set(key, remove + add);

  return remove + add;
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
