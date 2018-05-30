const getMin = require('./getMin')

module.exports = function(val) {
  if(!this.root) return null
  let current = this.root
  let min = getMin(current)
  console.log('min', min)
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