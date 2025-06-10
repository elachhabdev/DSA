let s = "1a1b1c1d1e";
s = "10p10q";
s = "127y";
const uncompress = (string) => {
  let decompress = "";
  let i = 0;

  while (i < string.length) {
    if (string[i].match(/^[0-9]+$/)) {
      let j = i + 1;
      let count = string[i];
      while (string[j].match(/^[0-9]+$/)) {
        count += string[j];
        j++;
      }

      for (let k = 1; k < parseInt(count); k++) {
        decompress += string[j];
      }
      i = j;
    } else {
      decompress += string[i];
      i++;
    }
  }

  return decompress;
};

console.log(uncompress(s));
