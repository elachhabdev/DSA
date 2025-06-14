const generateParenthesis = (n) => {
  let paths = [];

  let mid = Math.floor((2 * n - 1) / 2);

  let nums = [];

  for (let i = 0; i < n * 2; i++) {
    if (i <= mid) {
      nums.push(1);
    } else {
      nums.push(2);
    }
  }

  generateParenthesisRec(nums, [], paths);

  return paths;
};
const generateParenthesisRec = (nums, path, paths) => {
  if (nums.length == 0) {
    if (path[0] != 2 && path[path.length - 1] != 1) {
      let s = "";
      let count = 0;
      for (let p of path) {
        if (p == 1) {
          if (count < 0) {
          } else {
            count++;
          }
          s += "(";
        }
        if (p == 2) {
          count--;
          s += ")";
        }
      }
      if (count == 0) {
        paths.push(s);
      }
    }
    return paths;
  }

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (nums[i] == nums[i + 1]) continue;

    nums.splice(i, 1);

    path.push(current);

    generateParenthesisRec(nums, path, paths);

    path.pop();

    nums.splice(i, 0, current);
  }

  return paths;
};

console.log(generateParenthesis(4));
