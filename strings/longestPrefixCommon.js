var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  let common = -1;

  if (strs.length == 1) return strs[0];

  for (let c = 0; c < strs[0].length; c++) {
    common = 1;
    for (let i = 1; i < strs.length; i++) {
      if (strs[0][c] != strs[i][c]) {
        common = -1;
      }
    }

    if (common == -1) break;

    commonPrefix += strs[0][c];
  }

  return commonPrefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["cir", "car"]));
