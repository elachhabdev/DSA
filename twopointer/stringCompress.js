let chars = ["a", "b", "b", "b", "d", "d", "c", "c", "a", "e", "e", "e", "f"];
chars = ["a"];

var compress = function (chars) {
  let i = 0;
  let j = 1;
  let count = 1;
  let last = 0;

  while (i < chars.length) {
    if (chars[i] == chars[j]) {
      count++;
      j++;
    } else {
      if (count != 1) {
        chars[last] = chars[i];

        let splitCount = count.toString().split("");

        for (let i = 0; i < splitCount.length; i++) {
          chars[last + i + 1] = parseInt(splitCount[i]);
        }

        last = last + splitCount.length + 1;
      } else {
        chars[last] = chars[i];
        last = last + 1;
      }
      count = 1;
      i = j;
      j++;
    }
  }

  console.log(chars);

  return last;
};

console.log(compress(chars));
