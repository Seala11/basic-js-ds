const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let head = l; // to return save the head

  // check the head
  if (head.value === k) {
    // if there are more nodes set next node as the new head
    if (head.next) {
      let temp = head.next;
      head = null;
      head = temp;
    } else {
      // else set the list as null
      head = null;
    }
  }

  let currNode = head;
  let prevNode = null;
  let nextNode = currNode.next;

  // while there are nodes to check
  while (currNode) {
    if (currNode.value === k) removeNode(prevNode, currNode, nextNode, k);

    prevNode = currNode;
    currNode = prevNode.next;
    nextNode = currNode.next;
  }

  return head;
}

function removeNode(prevNode, currNode, nextNode, k) {
  if (!nextNode) { // tail
    prevNode.next = null;
    currNode = null;
  } else if (nextNode.value === k) { // double k case
    prevNode.next = nextNode.next;
    currNode.next = null;
    currNode = null;
  } else { // middle node
    prevNode.next = nextNode;
    currNode.next = null;
    currNode = null;
  }
}

module.exports = {
  removeKFromList,
};
