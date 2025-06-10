var findMaxConsecutiveOnes = function (nums) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      total = Math.max(total, count);
      count = 0;
    }
  }
  total = Math.max(total, count);

  return total;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
