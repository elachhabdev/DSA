var maxLength = function (strings) {
  return maxLengthRec(strings, 0, [], 0);
};

var maxLengthRec = function (strings, currentIndex, path, max) {
  if (currentIndex > strings.length) return 0;

  for (let i = currentIndex; i < strings.length; i++) {
    let current = strings[i];

    if (!isValidUniqueString(current)) continue;

    if (path.length != 0 && !isValidUnique(path, current)) continue;

    path.push(current);

    max = Math.max(
      path.join("").length,
      maxLengthRec(strings, i + 1, path, max)
    );

    path.pop();
  }

  return max;
};

const isValidUnique = (path, str2) => {
  let str1 = path.join("");
  for (let c of str2) {
    if (str1.includes(c)) return false;
  }
  return true;
};

const isValidUniqueString = (str1) => {
  let set = new Set();
  for (let i = 0; i < str1.length; i++) {
    if (set.has(str1[i])) return false;
    set.add(str1[i]);
  }
  return true;
};

console.log(maxLength(["cha", "r", "act", "ers"]));
console.log(maxLength(["abcdefghijklmnopqrstuvwxyz"]));
console.log(maxLength(["aaaac", "bbbb"]));
console.log(
  maxLength([
    "bnprkefsawjhuqrhrgmv",
    "vkmdpegqrnnlapnhoaqiullm",
    "lydqsi",
    "xddidebwwfucbcdrslhxnfe",
    "vsuytlxmzwceakbf",
  ])
);
console.log(maxLength(["aa", "bb"]));
