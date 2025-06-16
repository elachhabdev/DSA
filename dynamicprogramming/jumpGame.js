var canJump = function (nums) {
  const memo = Array(nums.length + 1).fill(-1);
  return canJumpRec(nums, 0, memo);
};
var canJumpRec = function (nums, currentIndex, memo) {
  if (currentIndex == nums.length - 1) return true;
  if (currentIndex > nums.length) return false;

  if (memo[currentIndex] != -1) {
    return memo[currentIndex];
  }

  let currentJump = nums[currentIndex];

  for (let i = 1; i <= currentJump; i++) {
    if (
      i + currentIndex < nums.length &&
      canJumpRec(nums, i + currentIndex, memo) == true
    ) {
      memo[currentIndex] = true;
      return true;
    }
  }

  memo[currentIndex] = false;

  return false;
};
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
