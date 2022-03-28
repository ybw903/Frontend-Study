function Node (value) {
    this.value = value
}

function Stack () {
    this.stacks = [];
    this.index = -1;
}

Stack.prototype.push = function(data) {
    this.stacks.push(data);
    this.index++;
}

Stack.prototype.pop = function() {
    if (this.index < 0)
        return null;
    const node = this.stacks[this.index--];
    return node;
}

const newSatck = new Stack();
newSatck.push(new Node(3));
newSatck.push(new Node(4));
newSatck.push(new Node(7));
newSatck.pop();
newSatck.pop();
newSatck.pop();

