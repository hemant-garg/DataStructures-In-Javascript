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

    DFS_PreOrder() {
        let values = [];
        function traverse(node) {
            values.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return values;
    }

    DFS_PostOrder() {
        let values = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            values.push(node.val);
        }
        traverse(this.root);
        return values;
    }

    DFS_InOrder() {
        let values = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            values.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
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

// OUTPUT of PreOrder: [20, 10, 8, 18, 15, 100, 200, 120]
// OUTPUT of PostOrder: [8, 15, 18, 10, 120, 200, 100, 20]
// OUTPUT of InOrder: [8, 10, 15, 18, 20, 100, 120, 200]
