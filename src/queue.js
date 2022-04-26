const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
}

  getUnderlyingList() {
    return this.first; // return the head of the list
  }

  enqueue(value) {
    var newQ = new ListNode(value);

    if (!this.first) { // if there is no queue
        this.first = newQ;
        this.last = newQ;
    } else { // ele set new val as the tail
        this.last.next = newQ;
        this.last = newQ;
    }

  }

  dequeue() {
    if (!this.first) return null; // if there is no queue

    var removed = this.first; // get first node from the queue

    this.first = this.first.next; // set second as the new head
    
    return removed.value; 
  }
}

module.exports = {
  Queue
};
