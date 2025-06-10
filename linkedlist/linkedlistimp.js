class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var MyLinkedList = function () {
  this.head = null;
};

MyLinkedList.prototype.print = function (index) {
  let p = this.head;

  while (p != null) {
    console.log(p.val);
    p = p.next;
  }
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let i = 0;

  let p = this.head;

  while (p != null) {
    if (i == index) return p.val;
    i++;
    p = p.next;
  }

  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let temp = new Node(val);
  temp.next = this.head;
  this.head = temp;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let temp = new Node(val);

  if (this.head == null) {
    this.head = temp;
    return;
  }

  let p = this.head;

  while (p.next != null) {
    p = p.next;
  }

  p.next = temp;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index == 0) {
    this.addAtHead(val);
  } else {
    let i = 0;
    let q = this.head;
    let p = null;
    while (q != null) {
      if (i == index) {
        let temp = new Node(val);
        p.next = temp;
        temp.next = q;
      } else {
        p = q;
      }
      q = q.next;
      i++;
    }

    if (i == index) {
      this.addAtTail(val);
    }
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let p = null;
  let q = this.head;

  if (this.head == null) return null;

  if (index == 0) {
    this.head = this.head.next;
    return this.head;
  }

  let i = 0;

  while (q != null) {
    if (i == index) {
      p.next = q.next;
    } else {
      p = q;
    }
    i++;
    q = q.next;
  }

  return this.head;
};

let myLinkedList = new MyLinkedList();
/* myLinkedList.addAtHead(10);
myLinkedList.addAtHead(20);
myLinkedList.addAtHead(30); */
myLinkedList.addAtIndex(0, 0);
myLinkedList.addAtIndex(1, 1);
myLinkedList.addAtIndex(2, 2);
myLinkedList.addAtIndex(1, 20);

myLinkedList.print();
