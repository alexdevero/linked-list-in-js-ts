import Node from './node'

describe('Node', () => {
  let node: Node

  beforeEach(() => {
    node = new Node('foo')
  })

  it('has a data property set to the data passed to the constructor', () => {
    expect(node.data).toBe('foo')
  })

  it('has a next property set to null by default', () => {
    expect(node.next).toBeNull()
  })

  it('has a method setNextNode that sets the next property to the node passed to it', () => {
    const nextNode = new Node('bar')
    node.setNextNode(nextNode)
    expect(node.next).toBe(nextNode)
  })

  it('has a method getNextNode that returns the value of the next property', () => {
    const nextNode = new Node('bar')
    node.setNextNode(nextNode)
    expect(node.getNextNode()).toBe(nextNode)
  })
})
