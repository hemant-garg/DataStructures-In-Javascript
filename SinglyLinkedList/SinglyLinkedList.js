class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    set(val, index) {
        let node = this.get(index);
        node.val = val;
    }

    initiateList(node) {
        this.head = node;
        this.tail = node;
        this.length++;
    }
    push(val) {
        let node = new Node(val);
        if (this.length == 0) this.initiateList(node);
        else {
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
    }

    unshift(val) {
        let node = new Node(val);
        if (this.length == 0) this.initiateList(node);
        else {
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    pop() {
        if (this.length === 0) return false;
        if (this.length === 1) this.resetList();
        else {
            let pre = this.get(this.length - 2);
            pre.next = null;
            this.tail = pre;
            this.length--;
        }
    }

    resetList() {
        this.head = null;
        this.tail = null;
        this.length--;
    }

    shift() {
        if (this.length === 0) return false;
        if (this.length === 1) this.resetList();
        else {
            let temp = this.head.next;
            this.head = temp;
            this.length--;
        }
    }

    insert(val, i) {
        if (i == this.length) this.push(val);
        else if (i == 0) this.unshift(val);
        else {
            let temp = this.get(i - 1);
            let node = new Node(val);
            let pre = temp.next;
            temp.next = node;
            node.next = pre;
            this.length++;
        }
    }

    delete(index) {
        if (index == this.length - 1) this.pop();
        else if (index == 0) this.shift();
        else {
            let pre = this.get(index - 1);
            let temp = pre.next.next;
            pre.next = temp;
            this.length--;
        }
    }

    search(val) {
        let temp = this.head;
        for (let i = 0; i < this.length; i++) {
            if (temp.val == val) return i;
            temp = temp.next;
        }
        return "NOT FOUND !";
    }
}
