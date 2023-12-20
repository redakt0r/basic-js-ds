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
    return this.find(data) ? true : false;    
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

  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node =  node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let maxLeftData = this.max(node.left);
      node.data = maxLeftData;
      node.left = this._removeNode(node.left, maxLeftData);
      return node;
    }
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  min(node = this.rootNode) {
    if (!node) {
      return;
    }
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max(node = this.rootNode) {
    if (!node) {
      return;
    }
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};