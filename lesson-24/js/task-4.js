'use strict'

/**
 * Задача 4. Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного із доменів (edu, com, org,...).
 */

const urlList = ['https://test.com', 'https://test.edu', 'https://test.org', 'https://test.info', 'https://mysite.com', 'https://mysite.org', 'https://mysite.info',
  'https://scoolit.com', 'https://scoolit.edu', 'https://shopin.com'
]

const resMap = new Map()
for (const el of urlList) {
  const exp = /\.\w+$/
  let elRedex = el.match(exp)[0]

  if (resMap.has(elRedex)) resMap.set(elRedex, resMap.get(elRedex) + 1)
  else resMap.set(elRedex, 1)
}

function render() {
  const container = document.getElementById('output')
  const listUrl = document.createElement('ul')
  container.append(listUrl)
  for (const item of urlList) {
    const itemUrl = document.createElement('li')
    itemUrl.textContent = item
    listUrl.append(itemUrl)
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

