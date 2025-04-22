'use strict'

if (confirm('Почати тестування?')) {
  /**
* Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
*/

  let names = [
    'John',
    'Paul',
    'Olga',
    'Andrew',
    'Abrams',
    'Abba',
    'Peter',
    'Tina',
    'Jack',
  ]


  function insertSort(arr) {
    for (let k = 1; k < arr.length; k++) {
      const currenrEl = arr[k]
      let i = k - 1
      while (i >= 0 && arr[i].length > currenrEl.length) {
        arr[i + 1] = arr[i]
        i--
      }
      arr[i + 1] = currenrEl
    }
    return arr
  }

  const sortArr = insertSort([...names])

  function binarySearch(arr, length) {
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (arr[middle].length === length) return middle
      if (arr[middle].length < length) start = middle + 1
      if (arr[middle].length > length) end = middle - 1
    }
    return - 1
  }

  const searchEl = binarySearch(sortArr, 5)

  const isSearchEl = searchEl ? `Ім'я з довжиною 5 символів є у списку (${sortArr[searchEl]}) під номером ${searchEl}` : 'Такого імені не має в списку'

  document.writeln(`
  <div class="task__container>
    <h1 class="task__title">Задача 6</h1>
    <p class="task__info">Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом</p>
    <p class="task__info">Список імен: ${names}</p>
    <h2 class="task__sub-title">Розв'язання: </h2>
    <p class="task__desc">${isSearchEl}</p>
  </div>
  `)
}

