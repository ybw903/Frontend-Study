const RANGE_ERROR = "this idx is over size!";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFront(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insertBack(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let ptr = this.head;

      while (ptr.next) {
        ptr = ptr.next;
      }
      ptr.next = newNode;
    }
    this.size++;
  }

  insertAt(value, idx) {
    const newNode = new Node(value);

    if (idx < 0 || idx >= this.size) throw Error(RANGE_ERROR);

    let curIdx = 0;
    let prevPtr = null;
    let ptr = this.head;
    while (curIdx < idx) {
      prevPtr = ptr;
      curIdx++;
      ptr = ptr.next;
    }

    console.log(ptr);
    console.log(prevPtr);

    newNode.next = ptr;
    if (idx === 0) {
      this.head = newNode;
    }
    if (prevPtr) prevPtr.next = newNode;
    this.size++;
  }
}

const linkedList = new LinkedList();

linkedList.insertBack(3);
linkedList.insertBack(5);
linkedList.insertAt(2, 1);

let ptr = linkedList.head;

while (ptr) {
  console.log(ptr.value);
  ptr = ptr.next;
}
