var searchInsert = function (nums, target) {
  return searchInsertRec(nums, target, 0, nums.length - 1);
};

var searchInsertRec = function (nums, target, i, j) {
  let mid = Math.floor((i + j) / 2);

  if (target == nums[mid]) return mid;

  if (j < i) return i;

  if (target > nums[mid]) {
    return searchInsertRec(nums, target, mid + 1, j);
  } else if (target < nums[mid]) {
    return searchInsertRec(nums, target, i, mid - 1);
  }
};
