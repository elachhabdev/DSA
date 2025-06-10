var sortedSquares = function (nums) {
  let sortedArrSquares = [];

  let j = 0;
  let k = nums.length - 1;

  while (j < k) {
    if (Math.abs(nums[j]) <= Math.abs(nums[k])) {
      sortedArrSquares.unshift(nums[k] * nums[k]);
      k--;
    } else {
      sortedArrSquares.unshift(nums[j] * nums[j]);
      j++;
    }
  }

  sortedArrSquares.unshift(nums[j] * nums[j]);

  return sortedArrSquares;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 6]));
console.log(sortedSquares([-7, -3, 2, 3]));
console.log(sortedSquares([-7, -3, 2]));
console.log(sortedSquares([-7, -3]));
console.log(sortedSquares([-7]));
console.log(sortedSquares([-1, 1, 2, 3, 4]));
console.log(sortedSquares([1, 2, 3, 4]));
console.log(sortedSquares([-5, -3, -2, -1]));
console.log(sortedSquares([-1, 2, 2]));
