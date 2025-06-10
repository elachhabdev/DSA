var rotateString = function (s, goal) {
  for (let pivot = 0; pivot < s.length; pivot++) {
    let rotated = true;
    for (let i = 0; i < s.length; i++) {
      if (goal[i] != s[(i + pivot + 1) % s.length]) rotated = false;
    }
    if (rotated) return true;
  }

  return false;
};
console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("qqq", "qqq"));
console.log(rotateString("gcmbf", "fgcmb"));
console.log(rotateString("bbbacddceeb", "ceebbbbacdd"));
