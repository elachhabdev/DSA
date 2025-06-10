var majorityElement = function (nums) {
  let map = new Map();

  for (let num of nums) {
    if (num in map) {
      map[num]++;
    } else {
      map[num] = 1;
    }

    if (2 * map[num] >= nums.length) {
      return num;
    }
  }
};

console.log(majorityElement([1]));
