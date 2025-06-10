var removeOuterParentheses = function (s) {
  let result = "";

  let countLeft = 0;
  let countRight = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      countLeft++;
    } else if (s[i] == ")") {
      countRight++;
    }

    if (s[i] == "(" && countLeft >= 2) {
      result += s[i];
    }

    if (s[i] == ")" && countRight < countLeft) {
      result += s[i];
    }

    if (countLeft == countRight) {
      countLeft = 0;
      countRight = 0;
    }
  }
  return result;
};

var removeOuterParenthesesStack = function (s) {
  let result = "";

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] == "(" && s[i] == ")") {
      stack.pop();
      if (stack.length != 0) {
        result += s[i];
      }
    } else {
      if (stack.length != 0) {
        result += s[i];
      }
      stack.push(s[i]);
    }
  }

  return result;
};

console.log(removeOuterParenthesesStack("(()())(())"));
console.log(removeOuterParenthesesStack("(()(()))"));
console.log(removeOuterParenthesesStack("()()"));
