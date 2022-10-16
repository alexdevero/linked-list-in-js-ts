class Node {
  data: any
  next: Node | null

  constructor(data: any) {
    this.data = data
    this.next = null
  }

  setNextNode(node: Node) {
    if (node instanceof Node || node === null) {
      this.next = node
    } else {
      throw new Error('Next node must be a member of the Node class.')
    }
  }

  getNextNode() {
    return this.next
  }
}

export default Node
