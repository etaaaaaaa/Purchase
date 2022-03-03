import Buyable from './Buyable'

export default class Cart {
items: Buyable[] = []

  add(item: Buyable): void {
    this.items.push(item)
  }

  get getItems(): Buyable[] {
    return [...this.items]
  }

  sum(): number {
    let result: number = 0
    for (let i of this.items) {
      result += i.price
    }
    return result
  }

  sumDiscont(discont: number): number{
    return this.sum() - this.sum() * discont / 100
  }

  deleteItem(index: number): void{
        for (let i: number = 0; i < this.items.length; i ++) {
            if (this.items[i].id == index) {
                this.items.splice(i, 1)
            }
        }
    }
}