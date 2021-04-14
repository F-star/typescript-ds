
class ArrayStack<T> {
  private _items: Array<T> = []

  size(): number {
    return this._items.length
  }
  push(item: T) {
    this._items.push(item)
  }
  pop(): T {
    if (this.isEmpty()) {
      throw new Error('Stack is empty!')
    }
    return this._items.pop() as T
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty!')
    }
    return this._items[this.size() - 1]
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this._items = []
  }
}

export {
  ArrayStack
}