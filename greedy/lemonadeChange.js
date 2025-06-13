var lemonadeChange = function (bills) {
  let mapChange = new Map();
  mapChange[20] = 0;
  mapChange[10] = 0;
  mapChange[5] = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 20) {
      if (mapChange[5] >= 1 && mapChange[10] >= 1) {
        mapChange[10]--;
        mapChange[5]--;
      } else if (mapChange[5] >= 3) {
        mapChange[5]--;
        mapChange[5]--;
        mapChange[5]--;
      } else {
        return false;
      }
    } else if (bills[i] == 10) {
      if (mapChange[5] >= 1) {
        mapChange[10]++;
        mapChange[5]--;
      } else {
        return false;
      }
    } else {
      mapChange[5]++;
    }
  }

  return true;
};
console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
console.log(
  lemonadeChange([
    5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5,
  ])
);
