var permute = function (nums) {
  return permuteMemo(nums, [], {});
};
var permuteMemo = function (nums, currentIndexs, memo) {
  let key = currentIndexs.join("");

  if (key in memo) return memo[key];

  if (nums.length == 0) return [];

  let paths = [];

  for (let i = 0; i < nums.length; i++) {
    if (currentIndexs.includes(i)) continue;

    let current = nums[i];

    let currentPaths = permuteMemo(nums, [i, ...currentIndexs], memo);

    if (currentPaths.length == 0) {
      paths.push([current]);
    } else {
      for (let path of currentPaths) {
        path = [current, ...path];
        paths.push(path);
      }
    }
  }

  memo[key] = currentIndexs;

  return paths;
};

console.log(permute([1, 2, 3]));
