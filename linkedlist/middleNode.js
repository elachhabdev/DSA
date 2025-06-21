var middleNode = function (head) {
  let len = 0;

  let middle = head;

  let p = head;

  let index = 0;

  while (p != null) {
    len++;
    p = p.next;
  }

  let foundIndex = Math.floor((len - 1) / 2);

  while (middle != null) {
    let middleIndex = len % 2 == 0 ? foundIndex + 1 : foundIndex;

    if (index == middleIndex) {
      break;
    }
    index++;
    middle = middle.next;
  }

  return middle;
};
