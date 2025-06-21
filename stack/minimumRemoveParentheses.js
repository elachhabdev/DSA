var minRemoveToMakeValid = function (s) {
  let stack = [];
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1][0] == "(" && s[i] == ")") {
      let removed = stack.pop();
      set.delete(removed[1]);
    } else {
      if ("()".includes(s[i])) {
        stack.push([s[i], i]);
        set.add(i);
      }
    }
  }

  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) result += s[i];
  }

  return result;
};
/* 
console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("le(e(t(c)o)de"));
console.log(minRemoveToMakeValid("lee(t(c)o)de("));
console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("ab(c)d")); */
console.log(minRemoveToMakeValid("))(("));
