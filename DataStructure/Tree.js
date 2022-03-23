export default function Node(value) {
  this.value = value;
  this.children = [];
}

Node.prototype.addChild = function (value) {
  const childNode = new Node(value);
  this.children.push(childNode);
};

Node.prototype.preOrder = function () {
  console.log(this.value);
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].preOrder();
  }
};

Node.prototype.postOrder = function () {
  for (let i = 0; i < this.children.length; i++) {
    this.children[i].postOrder();
  }
  console.log(this.value);
};
