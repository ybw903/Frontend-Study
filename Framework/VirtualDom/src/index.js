function createElement(node) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  return document.createElement(node.type);
}
