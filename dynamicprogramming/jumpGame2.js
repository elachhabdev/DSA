var canJump = function (nums) {
  const memo = Array(nums.length + 1).fill(-1);
  return canJumpRec(nums, 0, memo);
};
var canJumpRec = function (nums, currentIndex, memo) {
  if (currentIndex == nums.length - 1) return 0;
  if (currentIndex > nums.length) return Number.POSITIVE_INFINITY;

  if (memo[currentIndex] != -1) {
    return memo[currentIndex];
  }

  let currentJump = nums[currentIndex];

  let totalJumps = Number.POSITIVE_INFINITY;

  for (let i = 1; i <= currentJump; i++) {
    totalJumps = Math.min(
      canJumpRec(nums, i + currentIndex, memo) + 1,
      totalJumps
    );
  }

  memo[currentIndex] = totalJumps;

  return totalJumps;
};
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 3, 0, 1, 4]));
console.log(canJump([0]));
