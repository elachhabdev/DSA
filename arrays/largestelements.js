function largestElement(nums) {
  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

console.log(largestElement([3, 3, 6, 0]));
console.log(largestElement([3, 3, 0, 99, -40]));
