var nestingScore = function (s) {
  return nestingScoreMemo(s, {});
};

var nestingScoreMemo = function (s, memo) {
  if (s in memo) return memo[s];

  if (s.length == 0) return 0;

  let sliceStart = 0;
  let sliceEnd = sliceStart;

  let stack = [];

  for (let i = sliceStart; i < s.length; i++) {
    let char = s[i];
    if ("]".includes(char)) {
      if ("[" == stack[stack.length - 1]) {
        stack.pop();
        if (stack.length == 0) {
          sliceEnd = i;
          break;
        }
      } else {
        stack.push(char);
      }
    } else {
      if ("[".includes(char)) {
        stack.push(char);
      }
    }
  }

  let result = 0;

  if (sliceEnd - sliceStart == 1) {
    result += 1 + nestingScoreMemo(s.slice(sliceEnd + 1), memo);
  } else {
    result += 2 * nestingScoreMemo(s.slice(sliceStart, sliceEnd), memo);
    result += nestingScoreMemo(s.slice(sliceEnd + 1), memo);
  }

  memo[s] = result;

  return result;
};
nestingScore("[]"); // -> 1

nestingScore("[][][]"); // -> 3

nestingScore("[[]]"); // -> 2

nestingScore("[[][]]"); // -> 4

nestingScore("[[][][]]"); // -> 6

nestingScore("[[][]][]"); // -> 5

nestingScore("[][[][]][[]]"); // -> 7

nestingScore("[[[[[[[][]]]]]]][]"); // -> 129

nestingScore("");
