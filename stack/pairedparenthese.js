const pairedParentheses = (s) => {
  let stack = [];

  for (let char of s) {
    if (")".includes(char)) {
      if ("(" == stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if ("]".includes(char)) {
      if ("[" == stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if ("}".includes(char)) {
      if ("{" == stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      if ("([{".includes(char)) {
        stack.push(char);
      }
    }
  }

  return stack.length == 0 ? true : false;
};

pairedParentheses("(david)((abby))"); // -> true

pairedParentheses("()rose(jeff"); // -> false

pairedParentheses(")("); // -> false

pairedParentheses("()"); // -> true

pairedParentheses("(((potato())))"); // -> true

pairedParentheses("(())(water)()"); // -> true

pairedParentheses("(())(water()()"); // -> false

pairedParentheses(""); // -> true

pairedParentheses("))()"); // -> false
