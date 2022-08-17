// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let temp = this.head;
    let count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    } else {
      return;
    }
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
    } else {
      let currNode = this.head;
      let nextNode = this.head.next;
      while (nextNode.next) {
        currNode = nextNode;
        nextNode = nextNode.next;
      }
      currNode.next = null;
    }
  }

  insertLast(data) {
    let last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let count = 0;
    let node = this.head;

    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);
    if (!prev) return;
    const current = this.getAt(index);
    if (!current) return;
    prev.next = current.next;
    return;
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.insertFirst(data);
      return;
    }

    let prev = this.getAt(index - 1);
    let next = this.getAt(index);
    if (!next) {
      this.insertLast(data);
      return;
    }
    prev.next = new Node(data, next);
  }
}
