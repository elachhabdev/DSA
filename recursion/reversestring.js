const reverseString = (string) => {
  if (string.length == 0) {
    return "";
  }

  return reverseString(string.slice(1)) + string[0];
};

console.log(reverseString("abcdef"));
