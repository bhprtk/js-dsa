class Queue {
  constructor() {
    this._storage = []
  }

  enqueue(val) {
    this._storage.push(val)
  }

  dequeue() {
    this._storage.shift()
  }

  front() {
    return this._storage[0]
  }

  size() {
    return this._storage.length
  }

}

const turn = new Queue()
