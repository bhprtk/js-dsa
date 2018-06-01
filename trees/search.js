const getMin = require('./getMin')

module.exports = function(val) {
  console.log('this.root', this.root)
  if(!this.root) return null
  let current = this.root
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