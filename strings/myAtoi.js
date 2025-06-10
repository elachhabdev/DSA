var myAtoi = function (s) {
  let num = "";
  let sign = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] == " " && num == "" && sign != "") continue;

    if ("-+".includes(s[i]) && num == "" && sign == "") {
      sign = s[i];
      continue;
    }

    if ("0".includes(s[i]) && !"0123456789".includes(s[i + 1]) && num == "") {
      num = "0";

      break;
    }

    if ("0".includes(s[i]) && num == "") continue;

    if (!"0123456789".includes(s[i])) break;

    if ("0123456789".includes(s[i])) {
      num += s[i];
    }
  }

  if (num == "") num = 0;

  let negative = -2147483648;
  let positive = 2147483647;

  let numInterger = parseInt(sign + num);

  return Math.max(Math.min(positive, numInterger), negative);
};
/* console.log(myAtoi(" -042"));
console.log(myAtoi("42"));
console.log(myAtoi("000-1"));
console.log(myAtoi("words and 987"));
console.log(myAtoi(" -00000145687010323333"));
console.log(myAtoi("+0010222"));
console.log(myAtoi("+-12")); */
console.log(myAtoi("   +0 123"));
