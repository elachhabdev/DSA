function secondLargestElement(nums) {
  let max = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
    } else if (nums[i] < max) {
      if (secondMax < nums[i]) {
        secondMax = nums[i];
      }
    }
  }

  return secondMax == Number.NEGATIVE_INFINITY ? -1 : secondMax;
}

console.log(secondLargestElement([8, 8, 7, 6, 5]));
console.log(secondLargestElement([10, 10, 10, 10, 10]));
console.log(secondLargestElement([12, 1, 35, 10, 34, 1]));
console.log(secondLargestElement([7, 8, 8, 1, 4, 3]));
