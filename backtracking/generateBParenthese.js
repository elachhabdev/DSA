const generateParenthesisB = (n) => {
  let paths = [];
  generateParenthesisBRec(n, 0, 0, [], paths);

  return paths;
};
const generateParenthesisBRec = (n, open, closed, path, paths) => {
  if (path.length == 2 * n) {
    paths.push(path.join(""));
    return;
  }
  if (open < n) {
    path.push("(");
    generateParenthesisBRec(n, open + 1, closed, path, paths);
    path.pop();
  }

  if (closed < open) {
    path.push(")");
    generateParenthesisBRec(n, open, closed + 1, path, paths);
    path.pop();
  }
};

console.log(generateParenthesisB(4));
