'use strict'

/**
 * Задача 5.  Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну вартість книг для кожного із авторів.
 */

let books = [
  { title: 'Title1', yearOfRelease: 2000, author: 'Author1', price: 111 },
  { title: 'Title2', yearOfRelease: 2001, author: 'Author2', price: 222 },
  { title: 'Title3', yearOfRelease: 2012, author: 'Author1', price: 333 },
  { title: 'Title4', yearOfRelease: 2013, author: 'Author2', price: 333 },
  { title: 'Title5', yearOfRelease: 2015, author: 'Author1', price: 444 },
]

const resMap = new Map()

for (const el of books) {
  const author = el.author
  const price = el.price

  if (resMap.has(author)) resMap.set(author, resMap.get(author) + price)
  else resMap.set(author, price)
}

function render() {
  const container = document.getElementById('output')
  const listBook = document.createElement('ul')
  container.append(listBook)
  for (const item of books) {
    const itemBook = document.createElement('li')
    itemBook.textContent = item.title + ' ' + item.yearOfRelease + ' ' + item.author + ' ' + item.price
    listBook.append(itemBook)
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