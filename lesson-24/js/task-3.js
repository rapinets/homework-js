'use strict'

/**
 * Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.
 */

function* evenNum(count, min = 1, max = 100) {
  let num
  while (count > 0) {
    num = min + Math.floor(Math.random() * (max + 1 - min))
    if (num % 2 === 0) {
      yield num
      count--
    }
  }
}

function render() {
  const container = document.getElementById('output')
  for (const el of evenNum(5)) {
    const spanEl = document.createElement('span')
    spanEl.textContent = `${el};`
    container.append(spanEl)
  }
}

render()