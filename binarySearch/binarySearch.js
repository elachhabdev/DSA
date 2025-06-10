var Binarysearch = function (nums, target) {
  if (nums.length == 0) return 0;
  return BinarysearchRec(nums, target, 0, nums.length - 1);
};
var BinarysearchRec = function (nums, target, i, j) {
  let mid = Math.floor((i + j) / 2);

  if (target == nums[mid]) return mid;

  if (j < i) return -1;

  if (i == j) return -1;

  if (target > nums[mid]) {
    return BinarysearchRec(nums, target, mid + 1, j);
  } else if (target < nums[mid]) {
    return BinarysearchRec(nums, target, i, mid - 1);
  }
};

console.log(Binarysearch([2, 5], 6));
