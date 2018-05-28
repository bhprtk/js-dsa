function Node(data) {
	this.data = data
	this.next = null
}

function LinkedList() {
	this.head = null
}

LinkedList.prototype.push = function(val) {
	let node = new Node(val)
	if(!this.head) {
		this.head = node
	} else {
		let currentNode = this.head
		while(currentNode.next) {
			currentNode = currentNode.next
		}
		currentNode.next = node
	}
}

LinkedList.prototype.search = function(val) {
	let currentNode = this.head
	while(currentNode.data !== val && currentNode.next) {
		currentNode = currentNode.next
	}
	return currentNode.data === val ? currentNode : null
}

LinkedList.prototype.delete = function(val) {
	let currentNode = this.head
	let prevNode = null
	while(currentNode.data !== val && currentNode.next) {
		prevNode = currentNode
		currentNode = currentNode.next
	}

	if(currentNode.data === val) {
		prevNode.next = currentNode.next
	} else {
		console.log('Node does not exist')
	}
}

let list = new LinkedList()

