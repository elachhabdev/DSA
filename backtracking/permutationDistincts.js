const permutationDistinct = (nums) => {
  return permutationDistinctRec(nums, new Map());
};
const permutationDistinctRec = (nums, memo) => {
  let key = nums.join("");

  if (memo.has(key)) {
    return memo.get(key);
  }

  if (nums.length == 0) return [];

  let paths = [];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    nums.splice(i, 1);

    let currentPaths = permutationDistinctRec(nums, memo);

    if (currentPaths.length == 0) {
      paths.push([current]);
    } else {
      for (let currentPath of currentPaths) {
        paths.push([current, ...currentPath]);
      }
    }

    nums.splice(i, 0, current);
  }

  memo.set(key, paths);

  return paths;
};

console.log(permutationDistinct([1, 2, 3]));
