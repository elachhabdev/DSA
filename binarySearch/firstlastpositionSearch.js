var searchRange = function (nums, target) {
  return searchRangeRec(nums, target, 0, nums.length - 1);
};

var searchRangeRec = function (nums, target, i, j) {
  let mid = Math.floor((i + j) / 2);

  if (j < i) return [-1, -1];

  if (target > nums[mid]) {
    return searchRangeRec(nums, target, mid + 1, j);
  } else if (target < nums[mid]) {
    return searchRangeRec(nums, target, i, mid - 1);
  } else {
    if (i == j) return [mid, mid];
    if (target != nums[mid + 1] && target != nums[mid - 1]) {
      return [mid, mid];
    } else if (target != nums[mid + 1]) {
      let righted = searchRangeRec(nums, target, i, mid - 1);
      return [righted[0], mid];
    } else if (target != nums[mid - 1]) {
      let lefted = searchRangeRec(nums, target, mid + 1, j);
      return [mid, lefted[1]];
    } else {
      let left = searchRangeRec(nums, target, i, mid - 1);
      let right = searchRangeRec(nums, target, mid + 1, j);
      console.log(left, right);
      return [left[0], right[1]];
    }
  }
};

console.log(searchRange([5, 7, 8, 8, 8, 8, 10], 8));
