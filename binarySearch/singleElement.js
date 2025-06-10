var singleNonDuplicate = function (nums) {
  if (nums.length == 0) return 0;
  return singleNonDuplicateRec(nums, 0, nums.length - 1);
};
var singleNonDuplicateRec = function (nums, i, j) {
  let mid = Math.floor((i + j) / 2);

  if (j < i) return -1;

  if (j == i) return nums[i];

  if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1])
    return nums[mid];

  if (mid % 2 == 0) {
    if (nums[mid - 1] == nums[mid] && mid - 1 >= 0) {
      return singleNonDuplicateRec(nums, i, mid - 1);
    } else if (nums[mid + 1] == nums[mid] && mid + 1 <= nums.length - 1) {
      return singleNonDuplicateRec(nums, mid + 1, j);
    }
  } else {
    if (nums[mid - 1] == nums[mid] && mid - 1 >= 0) {
      return singleNonDuplicateRec(nums, mid + 1, j);
    } else if (nums[mid + 1] == nums[mid] && mid + 1 <= nums.length - 1) {
      return singleNonDuplicateRec(nums, i, mid - 1);
    }
  }

  return -1;
};

/* console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([1, 1, 2])); */
/* console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
 */ /* console.log(singleNonDuplicate([0, 1, 1, 1, 1, 2, 2]));
console.log(singleNonDuplicate([3, 3, 7, 7, 9, 10, 10, 11, 11]));
 */
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));

console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([1, 1, 2]));
console.log(singleNonDuplicate([1, 2, 2]));
console.log(singleNonDuplicate([0, 1, 1, 2, 2]));
console.log(singleNonDuplicate([0, 0, 1, 2, 2]));
console.log(singleNonDuplicate([1, 1, 2, 2, 3]));
