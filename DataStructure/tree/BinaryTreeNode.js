class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  setRight(node) {
    this.right = node;
    return this;
  }

  setLeft(node) {
    this.left = node;

    return this;
  }
}

module.exports = BinaryTreeNode;
