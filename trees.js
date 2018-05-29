
function Node(val) {
  this.right = null
  this.left = null
  this.val = val
}

function BinarySearchTree() {
  this.root = null
}

BinarySearchTree.prototype.insert = function(val) {
  if(!Number.isInteger(val)) {
    console.log('You can only insert an integer value.')
  } else {
    let node = new Node(val)
    if(!this.root) {
      this.root = node
    } else {
      let current = this.root
      while(current) {
        if(node.val < current.val) {
          if(!current.left) {
            current.left = node
            break
          }
          current = current.left
        } else if(node.val > current.val) {
          if(!current.right) {
            current.right = node
            break
          }
          current = current.right
        } else {
          break
        }
      }
    }
  }
  
}

let tree = new BinarySearchTree()
console.log('tree', tree)
tree.insert(5)
tree.insert(3)
tree.insert(10)
console.log('tree', tree)