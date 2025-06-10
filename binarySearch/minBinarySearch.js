var findMin = function (nums) {
  if (nums.length == 0) return 0;
  return findMinRec(nums, Number.POSITIVE_INFINITY, 0, nums.length - 1);
};
var findMinRec = function (nums, min, i, j) {
  let mid = Math.floor((i + j) / 2);

  if (nums[mid] <= nums[j]) {
    min = Math.min(min, nums[mid]);
  } else {
    min = Math.min(min, nums[j]);
    min = Math.min(findMinRec(nums, min, mid + 1, j), min);
  }

  if (nums[i] <= nums[mid]) {
    min = Math.min(min, nums[i]);
  } else {
    min = Math.min(min, nums[mid]);
    min = Math.min(findMinRec(nums, min, i, mid - 1), min);
  }

  return min;
};
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([5, 1, 3]));
console.log(findMin([4, 5, 6, 7, 8, 1, 2]));
console.log(findMin([1]));
