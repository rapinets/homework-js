'use strict'

/**
 * Задача 8. Дано масив показів температур. Підрахувати кількість входжень кожного із показів
 * Заокруглити вверх значення та підрахувати кількість різних показів.
 */

let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

function differentTemperature(arr) {
  const ceilArr = arr.map(el => Math.ceil(el))
  const differentTemp = new Set(ceilArr).size
  return differentTemp
}

const diff = differentTemperature(temperatures)

function render() {
  const container = document.getElementById('output')
  const pEl = document.createElement('p')
  pEl.className = 'task__desc'
  pEl.textContent = `Number of different temperatures: ${diff}`
  container.append(pEl)
}

render()
