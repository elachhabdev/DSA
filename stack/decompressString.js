var decompressBraces = function (s) {
  let indexNumber = 0;
  let indexSubString = 0;

  for (let i = 0; i < s.length; i++) {
    if ("0123456789".includes(s[i])) {
      break;
    } else if (!"{".includes(s[i]) && !"}".includes(s[i])) {
      indexSubString = i + 1;
    } else {
      break;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if ("0123456789".includes(s[i])) {
      indexNumber = i + 1;
    } else if (!"{".includes(s[i]) && !"}".includes(s[i])) {
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

    let stack = ["{"];

    for (let i = sliceStart; i < s.length; i++) {
      let char = s[i];
      if ("}".includes(char)) {
        if ("{" == stack[stack.length - 1]) {
          stack.pop();
          if (stack.length == 0) {
            sliceEnd = i;
            break;
          }
        } else {
          stack.push(char);
        }
      } else {
        if ("{".includes(char)) {
          stack.push(char);
        }
      }
    }

    for (let i = 0; i < count; i++) {
      result += decompressBraces(s.slice(sliceStart, sliceEnd));
    }

    result += decompressBraces(s.slice(sliceEnd + 1));
  }

  console.log(result);

  return result;
};

decompressBraces("2{q}3{tu}v");
// -> qqtututuv

decompressBraces("ch3{ao}");
// -> chaoaoao

decompressBraces("2{y3{o}}s");
// -> yoooyooos

decompressBraces("z3{a2{xy}b}");
// -> zaxyxybaxyxybaxyxyb

decompressBraces("2{3{r4{e}r}io}");
// -> reeeerreeeerreeeerioreeeerreeeerreeeerio

decompressBraces("go3{spinn2{ing}s}");
// -> gospinningingsspinningingsspinningings

decompressBraces("2{l2{if}azu}l");
// -> lififazulififazul

decompressBraces("3{al4{ec}2{icia}}");
