var subarraySumBrute = function (nums, k) {
  let max = 0;
  let memo = new Map();

  for (let i = 0; i < nums.length; i++) {
    let total = 0;
    for (let j = i; j < nums.length; j++) {
      total += nums[j];

      if (total == k) max++;
    }
  }

  return max;
};

var subarraySumPrefixSum = function (nums, k) {
  let found = 0;
  let countPrefixs = new Map();

  let prefixSum = 0;

  countPrefixs[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    let reversed = prefixSum - k;

    if (reversed in countPrefixs) {
      found += countPrefixs[prefixSum - k];
    }

    if (prefixSum in countPrefixs) {
      countPrefixs[prefixSum]++;
    } else {
      countPrefixs[prefixSum] = 1;
    }
  }

  return found;
};
/* console.log(subarraySum([1, 2, 1, 3], 3));
console.log(subarraySum([10, 5, 2, 7, 1, 9], 15));

console.log(subarraySum([-1, -1, 0], 0));
console.log(subarraySum([10, 5, 2, -7, 1, 9], 15));
console.log(subarraySum([-1, -1, -1, -3, 6], -3));
console.log(subarraySum([-1, -1, -1, -3, 6], 3));
console.log(subarraySum([-1, -1, 1], 0));
console.log(subarraySum([-1, 1, 0], 0)); */
/* console.log(subarraySum([1, -1, 0], 0));
 */ /* console.log(subarraySum([1, 2, 1, 3], 3));
console.log(subarraySum([10, 5, 2, 7, 1, 9], 15)); */
console.log(subarraySumPrefixSum([1, -1, 0, 1], 0));
console.log(subarraySumPrefixSum([1, 2, 3], 3));
