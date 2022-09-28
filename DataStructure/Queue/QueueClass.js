const EMPTY_QUEUE = "This queue is Empty!";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) throw Error(EMPTY_QUEUE);

    const value = this.head.value;

    this.head = this.head.next;
    this.size--;

    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const queue = new Queue();
queue.push(3);
queue.push(4);
queue.push(5);

while (!queue.isEmpty()) {
  console.log(queue.pop());
}
