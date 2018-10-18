class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        let currentRoot = this.root;
        while (true) {
            if (val < currentRoot.val) {
                if (currentRoot.left == null) {
                    currentRoot.left = newNode;
                    return this;
                }
                currentRoot = currentRoot.left;
            } else if (val > currentRoot.val) {
                if (currentRoot.right == null) {
                    currentRoot.right = newNode;
                    return this;
                }
                currentRoot = currentRoot.right;
            } else {
                return undefined;
            }
        }
    }

    search(val) {
        if (this.root == null) return "EMPTY TREE !";
        let currentRoot = this.root;
        let found = false;
        while (!found && currentRoot) {
            if (val === currentRoot.val) found = true;
            else if (val < currentRoot.val) currentRoot = currentRoot.left;
            else if (val > currentRoot.val) currentRoot = currentRoot.right;
        }
        if (found) return currentRoot;
        return "NOT FOUND !";
    }

    breathFirstSearch() {
        let queue = [];
        let values = [];

        queue.push(this.root);
        while (queue.length) {
            let currentNode = queue.shift();
            values.push(currentNode);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return values;
    }
}

let tree = new BinarySearchTree();
tree.insert(20);
tree.insert(100);
tree.insert(10);
tree.insert(200);
tree.insert(18);
tree.insert(8);
tree.insert(15);
tree.insert(120);

//           20
//      10       100
//   8      18        200
//        15       120

// OUTPUT of BFS: [20, 10, 100, 8, 18, 200, 15, 120]
