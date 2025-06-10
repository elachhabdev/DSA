var decodeString = function (s) {
  return decodeStringMemo(s, {});
};

var decodeStringMemo = function (s, memo) {
  if (s in memo) return memo[s];
  let indexNumber = 0;
  let indexSubString = 0;

  for (let i = 0; i < s.length; i++) {
    if ("0123456789".includes(s[i])) {
      break;
    } else if (!"[".includes(s[i]) && !"]".includes(s[i])) {
      indexSubString = i + 1;
    } else {
      break;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if ("0123456789".includes(s[i])) {
      indexNumber = i + 1;
    } else if (!"[".includes(s[i]) && !"]".includes(s[i])) {
    } else {
      break;
    }
  }

  let prefix = s.slice(0, indexSubString);

  let result = prefix;

  let countString = s.slice(indexSubString, indexNumber);

  if (countString.length > 0) {
    let count = parseInt(countString);

    let sliceStart = indexNumber + 1;
    let sliceEnd = sliceStart;

    let stack = ["["];

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

    for (let i = 0; i < count; i++) {
      result += decodeStringMemo(s.slice(sliceStart, sliceEnd), memo);
    }

    result += decodeStringMemo(s.slice(sliceEnd + 1), memo);
  }

  memo[s] = result;

  return result;
};
