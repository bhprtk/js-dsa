const getMin = node => {
  if(!node.left) return node
  return getMin(node.left)
}

module.exports = getMin