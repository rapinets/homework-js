'use strict'

/**
 * Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). 
 * Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»
 */

const product = [
  {
    name: 'beer',
    price: 40,
    amount: 200,
  },
  {
    name: 'meat',
    price: 140,
    amount: 500,
  },
  {
    name: 'fish',
    price: 180,
    amount: 100,
  },
  {
    name: 'ice cream',
    price: 30,
    amount: 300,
  },
]

class Shop {
  constructor(productsList) {
    this.productsList = productsList
  }

  [Symbol.iterator]() {
    this.currentIndex = 0
    return this
  }
  next() {
    if (this.currentIndex < this.productsList.length)
      return { done: false, value: this.productsList[this.currentIndex++] }
    else return { done: true }
  }
}

const listProducts = new Shop(product)

function render() {
  const container = document.getElementById('output')
  const list = document.createElement('ul')
  container.append(list)
  for (const el of listProducts) {
    const item = document.createElement('li')
    item.textContent = `${el.name} - total price: ${el.price * el.amount}`
    list.append(item)
  }
}

render()