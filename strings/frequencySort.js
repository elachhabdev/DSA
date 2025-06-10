var frequencySortBrute = function (s) {
  let map = new Map();
  let results = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  results = s.split("");

  results.sort((a, b) =>
    map[b] - map[a] != 0 ? map[b] - map[a] : a.localeCompare(b)
  );

  return results.join("");
};

var frequencySort = function (s) {
  let map = new Map();
  let results = [];
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  let current = "";

  for (let c = 0; c < map[s[0]]; c++) {
    current += s[0];
  }

  results.push(current);

  return results.join("");
};

console.log(frequencySort("ttrrrreee"));
console.log(frequencySort("loveleetcode"));
