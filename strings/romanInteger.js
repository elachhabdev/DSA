var romanToInt = function (s) {
  let mapRoman = new Map();

  mapRoman["I"] = 1;
  mapRoman["V"] = 5;
  mapRoman["X"] = 10;
  mapRoman["L"] = 50;
  mapRoman["C"] = 100;
  mapRoman["D"] = 500;
  mapRoman["M"] = 1000;

  let prev = 0;
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    total += mapRoman[s[i]];
    if (prev == "I" && (s[i] == "X" || s[i] == "V")) {
      total -= 2 * mapRoman[prev];
    } else if (prev == "X" && (s[i] == "L" || s[i] == "C")) {
      total -= 2 * mapRoman[prev];
    } else if (prev == "C" && (s[i] == "D" || s[i] == "M")) {
      total -= 2 * mapRoman[prev];
    } else prev = s[i];
  }

  return total;
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
