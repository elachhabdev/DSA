var smallestDivisor = function (nums, threshold) {
  let max = Math.max(...nums);

  let minK = Math.ceil(nums.length / threshold);

  let i = minK;

  let j = max;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    let total = 0;

    for (let i = 0; i < nums.length; i++) {
      total += Math.ceil(nums[i] / mid);
    }

    if (total <= threshold) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return i;
};

console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
