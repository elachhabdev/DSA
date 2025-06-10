var searchRotated = function (nums, target) {
  if (nums.length == 0) return 0;
  return searchRotatedRec(nums, target, 0, nums.length - 1);
};
var searchRotatedRec = function (nums, target, i, j) {
  let mid = Math.floor((i + j) / 2);

  if (target == nums[mid]) return mid;

  if (j < i) return -1;

  if (i == j) return -1;

  if (nums[mid] <= nums[j]) {
    if (target >= nums[mid] && target <= nums[j]) {
      return searchRotatedRec(nums, target, mid + 1, j);
    }
  } else {
    if (target >= nums[mid] || target <= nums[j]) {
      return searchRotatedRec(nums, target, mid + 1, j);
    }
  }

  if (nums[i] <= nums[mid]) {
    if (target >= nums[i] && target <= nums[mid]) {
      return searchRotatedRec(nums, target, i, mid - 1);
    }
  } else {
    if (target >= nums[i] || target <= nums[mid]) {
      return searchRotatedRec(nums, target, i, mid - 1);
    }
  }

  return -1;
};

console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 3));
console.log(searchRotated([4, 5, 6, 7, 0, 1, 2], 0));
console.log(searchRotated([5, 1, 3], 5));
console.log(searchRotated([4, 5, 6, 7, 8, 1, 2], 8));
