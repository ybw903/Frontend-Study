const BinaryTreeNode = require("../BinaryTreeNode.js");

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value = null, comparator) {
    super(value);

    this.comparator = comparator;
  }

  insert(value) {
    if (this.comparator.equal(null, value)) {
      this.value = value;
      return this;
    }

    if (this.comparator.lessThan(value, this.value)) {
      if (this.left) {
        return this.left.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value, this.comparator);
      this.setLeft(newNode);

      return newNode;
    }

    if (this.comparator.greaterThan(value, this.value)) {
      if (this.right) {
        return this.right.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value, this.comparator);
      this.setRight(newNode);

      return newNode;
    }

    return this;
  }
}

module.exports = BinarySearchTreeNode;
