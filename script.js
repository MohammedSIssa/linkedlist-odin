class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  append(data) {
    if(!this.head) {
      this.head = new Node(data)
      this.size++
      return
    }

    let current = this.head
    while(current.next) {
      current = current.next
    }

    current.next = new Node(data)
    this.size++
  }

  prepend(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  getSize() {
    return this.size
  }

  getHead() {
    return this.head.value
  }

  tail() {
    let current = this.head
    while(current.next) {
      current = current.next
    }
    return current.value
  }

  at(index) {
    if(index > 0 && index < this.size) {
      let current = this.head, prev, count = 0
      while(count <= index) {
        prev = current
        count++
        current = current.next
      }
      return prev
    }
    else return -1
  }

  pop() {
    if(!this.head) {
      return
    }
    else if (this.head.next){
      let current = this.head
      while(current.next.next) {
        current = current.next
      }
      current.next = null
      this.size--
    }
    else {
      this.head = null
      this.size--
    }
  }

  contains(value) {
    let current = this.head
    while(current) {
      if(value == current.value) {
        return true
      }
      current = current.next
    }
    return false
  }

  clear() {
    this.head = null
  }

  find(value) {
    let current = this.head, idx = 0
    while(current) {
      if(current.value !== value) {
        idx++
      }
      else if(current.value == value) {
        return idx
      }
      current = current.next
    }
  }

  insertAt(data, index) {
    let node = new Node(data)
    if(index == 0) {
      this.prepend(data)
    }
    else {
      let current = this.head, prev, count = 0
      if(index > 0 && index < this.size)
      while(count < index) {
        prev = current
        current = current.next
        count++
      }
      node.next = current
      prev.next = node
      this.size++
    }
  }

  removeAt(index) {
    if(!this.head) {
      return
    }
    if(index < 0 && index > this.size) {
      return
    }
    let current = this.head
    let prev
    let count = 0

    while(count < index) {
      prev = current
      current = current.next
      count++
    }

    prev.next = current.next
    current.next = null
    this.size--
  }

  toString() {
    let output = ''
    let current = this.head
    while(current) {
      output += '(' + current.value + ')' + ' -> '
      current = current.next
    }
    output += 'null'
    console.log(output)
  }
}
