var reverseWords = function (s) {
  let reversedWords = [];

  let i = 0;
  let j = 0;
  let currenWord = "";

  while (j < s.length) {
    if (s[j] === " ") {
      if (currenWord !== "") {
        reversedWords.push(currenWord);
        currenWord = "";
        i = j + 1;
      } else {
        i++;
      }
    } else {
      currenWord += s[j];
    }
    j++;
  }

  if (currenWord !== "") {
    reversedWords.push(currenWord);
  }

  let reversed = "";

  for (let i = reversedWords.length - 1; i >= 0; i--) {
    if (i == 0) {
      reversed += reversedWords[i];
    } else {
      reversed += reversedWords[i] + " ";
    }
  }

  return reversed;
};
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("  rrrr       worrld    cccc    eeee  e   "));
