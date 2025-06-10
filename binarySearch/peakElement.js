var findPeakElement = function (nums) {
  if (nums.length == 1) return 0;

  return findPeakElementRec(nums, 0, nums.length - 1);
};
var findPeakElementRec = function (nums, i, j) {
  let mid = Math.floor((i + j) / 2);

  if (
    nums[mid] > (mid - 1 < 0 ? Number.NEGATIVE_INFINITY : nums[mid - 1]) &&
    nums[mid] >
      (mid + 1 > nums.length - 1 ? Number.NEGATIVE_INFINITY : nums[mid + 1])
  ) {
    return mid;
  }

  if (nums[i] > nums[j] && j - i == 1) return i;

  if (nums[j] > nums[i] && j - i == 1) return j;

  let left = -1;
  let right = -1;

  if (nums[mid] < nums[mid - 1] || nums[i] > nums[i + 1]) {
    left = findPeakElementRec(nums, i, mid);
  }

  if (nums[mid] < nums[mid + 1] || nums[j] > nums[j - 1]) {
    right = findPeakElementRec(nums, mid, j);
  }

  return Math.max(left, right);
};
console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeakElement([1, 1, 1, 1]));
console.log(findPeakElement([1, 6]));
console.log(findPeakElement([6, 10, 11, 10]));
console.log(findPeakElement([3, 4, 3, 2, 1]));
console.log(findPeakElement([3, 2, 1]));
console.log(findPeakElement([1, 2, 1]));
console.log(findPeakElement([1, 2, 3]));
console.log(findPeakElement([1, 2, 3, 4]));
