var maxSubArray = function (nums) {
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;

  let j = 0;

  while (j < nums.length) {
    sum += nums[j];

    max = Math.max(sum, max);

    if (sum < 0) {
      sum = 0;
    }
    j++;
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([5, 4, -1, -7, 8]));
console.log(maxSubArray([1]));
console.log(maxSubArray([2, 3, 5, -2, 7, -4]));
console.log(maxSubArray([-2, -3, -7, -2, -10, -4]));
console.log(maxSubArray([-2, -1]));
