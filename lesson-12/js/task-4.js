'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком
 */
  function getArray(max, min = 1) {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      let randNum = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(randNum);
    }
    return arr;

  }

  const arrRand = getArray(5, -3); // greate array

  console.log(arrRand);

  // greate table
  function makeTable(arr, text) {
    const container = document.createElement('div')
    container.classList.add('task__container')

    const title = document.createElement('h2')
    title.classList.add('task__sub-title')
    title.textContent = text

    let table = document.createElement('table')
    table.style.marginBottom = '0.5rem'
    table.style.marginTop = '0.5rem'

    let tr = document.createElement('tr');

    for (let i = 0; i < arr.length; i++) {
      let td = document.createElement('td')
      td.textContent = arr[i]
      tr.appendChild(td)
    }

    table.appendChild(tr)
    container.appendChild(table)
    container.insertBefore(title, table)
    document.body.appendChild(container)
  }

  // ================================================================================================
  // Bubble Sort ====================================================================================
  // ================================================================================================

  function sortBubble(arr) {
    makeTable([...arr], 'сортування бульбашкою')
    let change, endIndex = arr.length

    do {
      change = false
      for (let i = 1; i < endIndex; i++) {
        if (arr[i - 1] > arr[i]) {
          const tmp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = tmp
          change = true
          makeTable([...arr])
        }
      }
      endIndex--
    } while (change)
  }

  sortBubble([...arrRand])

  // ======================================================================================
  // Coctail Sort =========================================================================
  // ======================================================================================

  function sortCoctail(arr) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    makeTable([...arr], 'сортування змішуванням')
    while (leftIndex < rightIndex) {
      //--- проходимось зліва-направо
      let changed = false
      for (let i = leftIndex + 1; i <= rightIndex; i++) {
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          changed = true
          makeTable([...arr])
        }
      }
      rightIndex--
      if (changed === false) break
      //---- проходимось справа-наліво
      changed = false
      for (let i = rightIndex; i > leftIndex; i--) {

        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          changed = true
          makeTable([...arr])
        }
      }
      leftIndex++
      if (changed === false) break
    }

  }

  sortCoctail([...arrRand])

  // ======================================================================================
  // Inclusion sort =======================================================================
  // ======================================================================================

  function insertSort(arr) {
    makeTable([...arr], 'сортування включеннями')
    for (let k = 1; k < arr.length; k++) {
      const currenrEl = arr[k]
      let i = k - 1
      while (i >= 0 && arr[i] > currenrEl) {
        arr[i + 1] = arr[i]
        i--
      }
      arr[i + 1] = currenrEl
      makeTable([...arr])

    }

  }

  insertSort([...arrRand])



}







