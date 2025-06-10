var sortedSquares = function (nums) {
  let mid = 0;

  let sortedArrSquares = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      mid = i;
      break;
    } else {
      mid = i;
    }
  }

  let j = mid - 1;
  let k = mid;

  while (k < nums.length && j >= 0) {
    if (Math.abs(nums[k]) >= Math.abs(nums[j])) {
      sortedArrSquares.push(nums[j] * nums[j]);
      j--;
    } else {
      sortedArrSquares.push(nums[k] * nums[k]);
      k++;
    }
  }

  if (k < nums.length) {
    for (let i = k; k < nums.length; i = k++) {
      sortedArrSquares.push(nums[k] * nums[k]);
    }
  }
  if (j >= 0) {
    for (let i = j; j >= 0; i = j--) {
      sortedArrSquares.push(nums[j] * nums[j]);
    }
  }

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
