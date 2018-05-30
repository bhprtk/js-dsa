
function Node(val) {
  this.right = null
  this.left = null
  this.val = val
}

function BinarySearchTree() {
  this.root = null
}

BinarySearchTree.prototype.search = function(val) {
  if(!this.root) return null
  let current = this.root
  console.log('current', current)
  while(current) {
    if(current.val === val){
      return current
    } else if(current.val < val) {
      current = current.right
    } else if(current.val > val) {
      current = current.left
    }
  }
  return null
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
tree.insert(5)
tree.insert(3)
tree.insert(10)
tree.insert(1)
tree.insert(4)
tree.insert(7)
tree.insert(12)

console.log('tree.search(3)', tree.search(7))