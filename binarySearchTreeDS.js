// Tree 
// Binary Tree:
// data structure in which each node has two children at most
// referred to as left child and right child
// value of each left node must be smaller than parent node
// value of each right node must be greater than parent node
// DFS and BFS - to search all the nodes in the tree

class bstNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    isEmpty() {
      return this.root === null;
    }
  
    insert(value) {
      const newNode = new bstNode(value);
      if(this.isEmpty()) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(root, newNode) {
      if(newNode.value < root.value) {
        if(root.left === null) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if(root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  
    search(root, value) {
      if(!root) return false
      if(value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  
  // three types of DFS traversal
  // 1) preorder 2) Inorder 3) Postorder
    
    // PreOrder Traversal - read data of the node, visit left subtree, visit right subtree
    preOrder(root) {
        if(root) {
          console.log(root.value);
          this.preOrder(root.left);
          this.preOrder(root.right);
        }
    }
  
  // Inorder Traversal - visit left subtree, read data of the node, visit right subtree
    inOrder(root) {
      if(root) {
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
      }
    }
  
  // PostOrder Traversal - visit left subtree, visit right subtree, read data of node
    postOrder(root) {
      if(root) {
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
      }
    }
  }
  
  const bst = new BinarySearchTree();
  console.log('bst empty', bst.isEmpty());
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(3)
  bst.insert(7)
  console.log('bst search', bst.search(bst.root, 50))
  console.log('bst search', bst.search(bst.root, 20))
  bst.preOrder(bst.root);
  bst.inOrder(bst.root);
  bst.postOrder(bst.root);
  
  // Breadth First Search - explore all nodes at present depth prior to moving on to nodes at the next depth level
  