'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями.
 */

  function getArray(max, min = 1) {
    let arr = [];
    for (let i = 0; i < 30; i++) {
      let randNum = min + Math.floor(Math.random() * (max - min + 1));
      arr.push(randNum);
    }
    return arr;

  }

  const arrRand = getArray(10, -10);
  const randArr = [...arrRand];

  console.log(arrRand);

  function insertSort(arr) {
    let compared = 0, replaced = 0
    for (let k = 1; k < arr.length; k++) {
      const currenrEl = arr[k]
      let i = k - 1
      while (i >= 0 && arr[i] > currenrEl) {
        arr[i + 1] = arr[i]
        i--
        compared++
      }
      arr[i + 1] = currenrEl
      replaced++

    }
    return { arr, compared, replaced }
  }

  const { arr, compared, replaced } = insertSort(arrRand)

  console.log(arr);

  console.log(replaced);

  console.log(compared);

  document.writeln(`
  <div class="task__container">
    <h1 class="task__title">Задача 3</h1>
    <p class="task__info">Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями</p>
    <h2 class="task__sub-title">Розв'язання</h2>
    <p class="task__desc">масив 30 випадкових цілих чисел: ${randArr};</p>
    <p class="task__desc">сортування включеннями: ${arr};</p>
    <p class="task__desc">було обмінів: ${replaced};</p>
    <p class="task__desc">було порівнянь: ${compared};</p>
  </div>
  `)

}







