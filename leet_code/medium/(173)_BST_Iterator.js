

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(7)
root.left = new TreeNode(3)
root.right = new TreeNode(15)
root.right.left = new TreeNode(9)
root.right.right = new TreeNode(20)

class BSTIterator {
  constructor(root) {
    this.stack = []
    this._constructStack(root)
  }

  _constructStack(node) {
    while(node) {
      this.stack.push(node)
      node = node.left
    }
  }

  next() {
    const node = this.stack.pop()
    if(node.right) this._constructStack(node.right)
    return node.val
  }

  hasNext() {
    return this.stack.length > 0
  }
}

const bstIterator = new BSTIterator(root)
bstIterator.next()
bstIterator.next()
bstIterator.next()
bstIterator.next()
bstIterator.next()

/*
class BSTIterator {
  constructor(root) {
    this.root = root;
    this.pointer = this.root;
    this.stack = [];
    this.visited = new Set()
    
  }

  next() {
  //  if(!this.visited.has(this.pointer.val)) this.stack.push(this.pointer);
   if(this.pointer.left && !this.visited.has(this.pointer.val)) {
    this.stack.push(this.pointer)
    this.visited.add(this.pointer.val)
    this.pointer = this.pointer.left
   }
   else if(this.pointer.right) {
    this.pointer = this.pointer.right;
    while(this.pointer.left) {
      this.stack.push(this.pointer);
      this.pointer = this.pointer.left;
      this.visited.add(this.pointer.val)
    }
   }
   else {
    this.pointer = this.stack.pop()
   }
  //  this.visited.add(this.pointer.val)
   return this.pointer.val
  }

  hasNext() {

  }

}
*/


