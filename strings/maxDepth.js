var maxDepth = function (s) {
  let stack = [];
  let depth = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack.push(s[i]);

    depth = Math.max(stack.length, depth);

    if (s[i] == ")") {
      stack.pop();
    }
  }
  return depth;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth("()"));
