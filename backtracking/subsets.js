var subsetsMemo = function (nums, currentIndex, memo) {
  if (currentIndex in memo) {
    return memo[currentIndex];
  }
  if (nums.length == 0) return [];

  let paths = [];

  for (let i = currentIndex; i < nums.length; i++) {
    let current = nums[i];

    paths.push([current]);

    let currentPaths = subsetsMemo(nums, i + 1, memo);

    for (let path of currentPaths) {
      path = [current, ...path];
      paths.push(path);
    }
  }

  memo[currentIndex] = paths;

  return paths;
};
var subsets = function (nums) {
  return [[], ...subsetsMemo(nums, 0, {})];
};
console.log(subsets([]));
