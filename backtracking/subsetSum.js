var isSubsetSum = function (nums, sum) {
  const memo = Array(nums.length + 1)
    .fill(-1)
    .map(() => Array(sum + 1).fill(-1));

  return isSubsetSumRec(nums, memo, 0, sum);
};
var isSubsetSumRec = function (nums, memo, currentIndex, sum) {
  if (sum < 0) return false;

  if (sum == 0) return true;

  if (nums.length <= currentIndex) return false;

  if (memo[currentIndex][sum] != -1) return memo[currentIndex][sum];

  let current = nums[currentIndex];

  let takeIt = isSubsetSumRec(nums, memo, currentIndex + 1, sum - current);

  let leaveIt = isSubsetSumRec(nums, memo, currentIndex + 1, sum);

  memo[currentIndex][sum] = leaveIt || takeIt;

  return leaveIt || takeIt;
};

console.log(isSubsetSum([1, 2, 3, 4], 11));
console.log(isSubsetSum([6, 1, 2, 3, 3, 6], 11));
