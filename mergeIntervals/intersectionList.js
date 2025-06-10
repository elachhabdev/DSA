var intervalIntersection = function (firstList, secondList) {
  let i = 0;
  let j = 0;

  let intersections = [];

  while (i < firstList.length && j < secondList.length) {
    if (
      firstList[i][1] >= secondList[j][0] &&
      secondList[j][0] >= firstList[i][0]
    ) {
      intersections.push([
        Math.max(firstList[i][0], secondList[j][0]),
        Math.min(firstList[i][1], secondList[j][1]),
      ]);
    } else if (
      firstList[i][0] >= secondList[j][0] &&
      firstList[i][0] <= secondList[j][1]
    ) {
      intersections.push([
        Math.max(firstList[i][0], secondList[j][0]),
        Math.min(firstList[i][1], secondList[j][1]),
      ]);
    }

    if (firstList[i][1] >= secondList[j][1]) {
      j++;
    } else {
      i++;
    }
  }

  return intersections;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);

console.log(
  intervalIntersection(
    [
      [1, 3],
      [5, 9],
    ],
    []
  )
);
console.log(
  intervalIntersection(
    [[4, 11]],
    [
      [1, 2],
      [8, 11],
      [12, 13],
      [14, 15],
      [17, 19],
    ]
  )
);

console.log(
  intervalIntersection(
    [
      [4, 6],
      [7, 8],
      [10, 17],
    ],
    [[5, 10]]
  )
);
