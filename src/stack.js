const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
let stack = [];

// LIFO – last in first out principle
class Stack {
  push(element) {
    stack.unshift(element);
  }

  pop() {
    if (stack.length === 0) return undefined;
    return stack.shift();
  }

  peek() {
    return stack[0];
  }
}

module.exports = {
  Stack,
};
