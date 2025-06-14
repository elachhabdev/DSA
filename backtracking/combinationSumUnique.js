var combinationSumUnique = function (nums, sum) {
  return combinationSumUniqueRec(nums, 0, sum, [], []);
};
var combinationSumUniqueRec = function (nums, currentIndex, sum, path, paths) {
  if (sum < 0) return [];

  if (sum == 0) {
    paths.push([...path]);
    return paths;
  }

  if (nums.length <= currentIndex) return [];

  let current = nums[currentIndex];

  path.push(current);

  let takeIt = combinationSumUniqueRec(
    nums,
    currentIndex,
    sum - current,
    path,
    paths
  );

  path.pop();

  let leaveIt = combinationSumUniqueRec(
    nums,
    currentIndex + 1,
    sum,
    path,
    paths
  );

  return paths;
};

var combinationSumUnique2 = function (nums, sum) {
  nums.sort((a, b) => a - b);
  return combinationSumUnique2Rec(nums, 0, sum, [], []);
};

var combinationSumUnique2Rec = function (nums, currentIndex, sum, path, paths) {
  if (sum < 0) return [];

  if (sum == 0) {
    paths.push([...path]);
    return paths;
  }

  if (currentIndex > nums.length) return [];

  for (let i = currentIndex; i < nums.length; i++) {
    let current = nums[i];

    path.push(current);

    combinationSumUnique2Rec(nums, i, sum - current, path, paths);

    path.pop();
  }

  return paths;
};

console.log(combinationSumUnique2([2, 3, 6, 7], 7));
