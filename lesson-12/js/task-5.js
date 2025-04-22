'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
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
    'Peter',
  ]

  function sortBubble(arr) {
    let change, endIndex = arr.length

    do {
      change = false
      for (let i = 1; i < endIndex; i++) {

        if (arr[i - 1] > arr[i]) {
          const tmp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = tmp
          change = true
        }
      }
      endIndex--
    } while (change)
    return arr
  }

  // function binarySearch(arr, searchEl) {
  //   let start = 0
  //   let end = arr.length - 1
  //   while (start <= end) {
  //     const middle = Math.floor((start + end) / 2)
  //     if (arr[middle] === searchEl) return middle
  //     if (arr[middle] < searchEl) start = middle + 1
  //     if (arr[middle] > searchEl) end = middle - 1
  //   }
  //   return - 1
  // }

  function binarySearch(arr, searchEl, start, end) {

    if (start <= end) {
      const middle = Math.floor((start + end) / 2)
      if (arr[middle] === searchEl) return middle
      if (arr[middle] < searchEl) return binarySearch(arr, searchEl, middle + 1, end)
      if (arr[middle] > searchEl) return binarySearch(arr, searchEl, start, middle - 1)
    } else return - 1
  }

  const sortNames = sortBubble([...names])

  const searchName = binarySearch(sortNames, 'Olga', 0, sortNames.length - 1)

  const isSearchName = searchName ? `Ім'я "${sortNames[searchName]}" є у списку під номером ${searchName}` : 'Такого імені не має в списку'

  document.writeln(`
  <div class="task__container>
    <h1 class="task__title">Задача 5</h1>
    <p class="task__info">Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом</p>
    <p class="task__info">Список імен: ${names}</p>
    <h2 class="task__sub-title">Розв'язання: </h2>
    <p class="task__desc">${isSearchName}</p>
  </div>
  `)


}



