const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    // if there is a root:
    if (this.data) {
      return this.data;
    } else {
      return null;
    }
  }

  add(data) {
    // create new node
    let newNode = new Node(data);

    // if this is the first node, save it as a root:
    if (!this.data) {
      this.data = newNode;
      return this;
    } else {
      // create a temp var starting from the root
      let current = this.data;

      // while current.data is not equal to data --> infinite loop
      while (true) {
        // if data < current go left / if data > current go right / if === -> undefined;
        if (data === current.data) return undefined;

        if (data < current.data) {
          //check if the spot is free;
          //if so set the newNode there else move the current to the next left point
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }

        if (data > current.data) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  has(data) {
    // start from the root
    let current = this.data;

    // while current != null // while there is something left/right
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    // edge case
    if (!this.data || data === undefined) return null;

    // start from the root
    var current = this.data;
    var found = false;

    // while current != null && found != true
    // while there is something left/right and found is still false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return null; // if such node does not exists
    return current;
  }

  remove(data) {
    // return new tree without removed node
    this.data = removeNode(this.data, data);

    // use helper function:
    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      // if data we are looking for < node go left / if data > node go right / if === -> remove curr node;
      if (data < node.data) {
        // use recursion remove node from the left and return updated sub-tree (branch);
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // this is the node we should remove

        // if node has no children
        if (!node.left && !node.right) {
          node = null;
          return node;
        }

        // if node has one children
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        // if node has both
        // choose min from right subtree or max from left subtree
        // replace it with the current node

        let foundMinNode = node.right;
        while (foundMinNode.left) {
          foundMinNode = foundMinNode.left;
        }

        node.data = foundMinNode.data;
        node.right = removeNode(node.right, foundMinNode.data);
        return node;
      }
    }
  }

  min() {
    let node = this.data; // start from root

    if (!node) return null;
    // if left of a node is null => its a min
    if (!node.left) {
      return node.data;
    }
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.data; // start from root

    if (!node) return null;
    // if left of a node is null => its a min
    if (!node.right) {
      return node.data;
    }
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
