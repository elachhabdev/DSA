var merge = function (nums1, m, nums2, n) {
  let currentIndex = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] >= nums2[currentIndex]) {
      for (let k = m + currentIndex; k > i; k--) {
        let temp = nums1[k - 1];
        nums1[k - 1] = nums1[k];
        nums1[k] = temp;
      }
      nums1[i] = nums2[currentIndex];
      currentIndex++;
    }
  }

  for (let i = m + currentIndex; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [1, 2, 6], 3));
