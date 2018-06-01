const remove = require('./remove')
const insert = require('./insert')
const search = require('./search')
const getMin = require('./getMin')

function BinarySearchTree() {
  this.root = null
}

BinarySearchTree.prototype.search = search
BinarySearchTree.prototype.insert = insert
BinarySearchTree.prototype.getMin = getMin
BinarySearchTree.prototype.remove = remove

let tree = new BinarySearchTree()
tree.insert(5)
tree.insert(1)
tree.insert(3)
tree.insert(10)
tree.insert(4)
tree.insert(7)
tree.insert(12)
// console.log('tree.search(3)', tree.search(3))
console.log('tree.remove(3)', tree.remove(3))