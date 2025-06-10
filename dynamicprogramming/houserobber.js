var robHouse = function (nums) {
  return robHouseRec(nums, 0, {});
};
var robHouseRec = function (nums, currentIndex, memo) {
  if (currentIndex in memo) return memo[currentIndex];

  if (nums.length <= currentIndex) return 0;

  let takeIt = nums[currentIndex] + robHouseRec(nums, currentIndex + 2, memo);
  let leaveIt = robHouseRec(nums, currentIndex + 1, memo);

  memo[currentIndex] = Math.max(takeIt, leaveIt);

  return memo[currentIndex];
};

var robHouseTabulation = function (nums) {
  let dp = new Array(nums.length + 1).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    dp[i] = Math.max(
      Math.max(
        i + 3 > nums.length ? 0 : dp[i + 3],
        i + 2 > nums.length ? 0 : dp[i + 2]
      ) + nums[i],
      dp[i + 1]
    );
  }

  return dp[0];
};

console.log(robHouseTabulation([1, 2, 3, 1]));
console.log(robHouseTabulation([2, 7, 9, 3, 1]));
console.log(robHouseTabulation([1]));
console.log(robHouseTabulation([1, 2]));
