'use strict'

/**
 * Задача 6. Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін). Підрахувати для кожного клієнта кількість відвідувань.
 */

const visitors = ['12345', 'qwerty', '09876', 'poiuy', '12345', '12345', 'qwerty', '12345', '09876', 'poiuy', '12345']

const resMap = new Map()
for (const visitor of visitors) {
  if (resMap.has(visitor)) resMap.set(visitor, resMap.get(visitor) + 1)
  else resMap.set(visitor, 1)
}

function render() {
  const container = document.getElementById('output')
  const listVisitors = document.createElement('ul')
  listVisitors.style.marginBlockEnd = '2rem'
  container.append(listVisitors)
  for (const item of visitors) {
    const itemVisitor = document.createElement('li')
    itemVisitor.textContent = item
    listVisitors.append(itemVisitor)
  }

  const listMap = document.createElement('ul')
  container.append(listMap)
  resMap.forEach((value, key) => {
    const itemMap = document.createElement('li')
    itemMap.textContent = `${key} - ${value}`
    listMap.append(itemMap)
  })
}

render()