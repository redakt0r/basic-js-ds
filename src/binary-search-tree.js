const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(rootNode = null) {
    this.rootNode = rootNode;
  }
  
  root() {
    return this.rootNode;
  }

  _createNode(data) {
    return new Node(data);
  }

  add(data) {
    if (!this.rootNode) {
      this.rootNode = this._createNode(data);
      return;
    }
    let current = this.rootNode;
    while (data !== current.data) {
      if (data < current.data) {
        if (!current.left) {
          current.left = this._createNode(data);
          return;
        }
        current = current.left;
      }
      else if (data > current.data) {
        if (!current.right) {
          current.right = this._createNode(data);
          return;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    
  }

  find(data) {
    if (!data || !this.rootNode) return null;
    if (data === this.rootNode.data) return this.rootNode;

    let current = this.rootNode;
    
    while (current && current.data !== data) {
      
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};