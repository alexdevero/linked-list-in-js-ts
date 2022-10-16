import LinkedList from './linked-list'

describe('LinkedList', () => {
  let list: LinkedList

  beforeEach(() => {
    list = new LinkedList()
  })

  it('has a head property set to null by default', () => {
    expect(list.head).toBeNull()
  })

  it('has a method addToHead that adds a node to the head of the list', () => {
    list.addToHead(100)
    list.addToHead(200)

    expect(list.head?.data).toBe(200)
  })

  it('has a method addToTail that adds a node to the tail of the list', () => {
    list.addToTail(100)
    list.addToTail(200)

    expect(list.head?.data).toBe(100)
  })

  it('has a method removeHead that removes the head node from the list and returns its data', () => {
    list.addToHead(100)
    list.addToHead(200)

    expect(list.removeHead()).toBe(200)
    expect(list.removeHead()).toBe(100)
  })

  it('has a method findNodeIteratively that finds a node in the list by its data', () => {
    list.addToHead(100)
    list.addToHead(200)
    list.addToHead(300)

    expect(list.findNodeIteratively(200)?.data).toBe(200)
    expect(list.findNodeIteratively(500)).toBeNull()
  })

  it('has a method printList that prints the list to the console', () => {
    list.addToHead(100)
    list.addToHead(200)

    const spy = jest.spyOn(console, 'log')
    list.printList()

    expect(spy).toHaveBeenCalledWith('<head> 200 100 <tail>')
  })
})
