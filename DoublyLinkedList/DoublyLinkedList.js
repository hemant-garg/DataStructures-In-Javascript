class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    initializeList(node) {
        this.head = node;
        this.tail = node;
        this.length++;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) this.initializeList(newNode);
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) this.initializeList(newNode);
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
        }
    }

    resetList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pop() {
        if (this.length === 0) return false;
        if (this.length === 1) this.resetList();
        else {
            let pre = this.tail.prev;
            this.tail.prev = null;
            pre.next = null;
            this.tail = pre;
            this.length--;
        }
    }

    shift() {
        if (this.length === 0) return false;
        if (this.length === 1) this.resetList();
        else {
            let nex = this.head.next;
            this.head.next = null;
            nex.prev = null;
            this.head = nex;
            this.length--;
        }
    }

    get(index) {
        if (index < 0 || index >= this.length) return false;
        let mid = this.length / 2;
        if (index <= mid) {
            let temp = this.head;
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
            return temp;
        } else {
            // 2 3 44 5 6 7 9
            //          T
            //2
            let indexFromTail = this.length - 1 - index;
            let temp = this.tail;
            for (let i = 0; i < indexFromTail; i++) {
                temp = temp.prev;
            }
            return temp;
        }
    }

    set(val, index) {
        let node = this.get(index);
        node.val = val;
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        else if (index === this.length) this.push(val);
        else if (index === 0) this.unshift(val);
        else {
            let newNode = new Node(val);
            let oldNode = this.get(index);
            let pre = oldNode.prev;
            newNode.next = oldNode;
            oldNode.prev = newNode;
            pre.next = newNode;
            newNode.prev = pre;
            this.length++;
        }
    }

    delete(index) {
        if (index < 0 || index >= this.length) return false;
        else if (index === this.length - 1) this.pop();
        else if (index === 0) this.shift();
        else {
            let deletedNode = this.get(index);
            let pre = deletedNode.prev;
            let nex = deletedNode.next;
            pre.next = nex;
            nex.prev = pre;
            deletedNode.next = null;
            deletedNode.prev = null;
            this.length--;
        }
    }

    search(val) {
        // 2 3 4 6
        // 3
        //       T

        let temp = this.head;
        for (let i = 0; i < this.length; i++) {
            if (temp.val === val) return i;
            temp = temp.next;
        }
        return "NOT FOUND !";
    }
}

let list = new DoublyLinkedList();
list.push(3);
list.unshift(1);
list.push(5);
list.push(8);
list.push(9);
list.push(20);
list.push(12);
list.push(22);
