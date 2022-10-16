import Node from './node'

class LinkedList {
  head: Node | null

  constructor() {
    this.head = null
  }

  addToHead(data: any) {
    const newHead = new Node(data)
    const currentHead = this.head
    this.head = newHead

    if (currentHead) {
      this.head.setNextNode(currentHead)
    }
  }

  removeHead() {
    const removedHead = this.head

    if (!removedHead) return

    this.head = removedHead.getNextNode()

    return removedHead.data
  }

  addToTail(data: any) {
    let tail = this.head

    if (!tail) {
      this.head = new Node(data)
    } else {
      while (tail?.getNextNode()) {
        tail = tail.getNextNode()
      }

      tail?.setNextNode(new Node(data))
    }
  }

  findNodeIteratively(data: any) {
    let thisNode = this.head

    while (thisNode) {
      if (thisNode.data === data) return thisNode

      thisNode = thisNode.getNextNode()
    }

    return thisNode
  }

  printList() {
    let currentNode = this.head
    let output = '<head> '

    while (currentNode) {
      output += `${currentNode.data} `
      currentNode = currentNode.getNextNode()
    }

    output += '<tail>'
    console.log(output)
  }
}

export default LinkedList
