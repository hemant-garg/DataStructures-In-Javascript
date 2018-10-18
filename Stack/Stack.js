class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) return null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let deletedNode = this.head;
            this.head = deletedNode.next;
            deletedNode.next = null;
        }
        this.length--;
    }
}

let list = new Stack();
list.push(1);
list.push(4);
list.push(7);
