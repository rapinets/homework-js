'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою
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

  function sortBubble(arr) {
    let change, endIndex = arr.length
    let replaced = 0;
    let compared = 0;
    do {
      change = false
      for (let i = 1; i < endIndex; i++) {
        compared++
        if (arr[i - 1] > arr[i]) {
          const tmp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = tmp
          change = true
          replaced++
        }
      }
      endIndex--
    } while (change)

    return { arr, replaced, compared }
  }

  const { arr, replaced, compared } = sortBubble(arrRand)

  console.log(arr);

  console.log(replaced);

  console.log(compared);

  document.writeln(`
  <div class="task__container">
    <h1 class="task__title">Задача 1</h1>
    <p class="task__info">Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою</p>
    <h2 class="task__sub-title">Розв'язання</h2>
    <p class="task__desc">масив 30 випадкових цілих чисел: ${randArr};</p>
    <p class="task__desc">сортування бульбашкою: ${arr};</p>
    <p class="task__desc">було обмінів: ${replaced};</p>
    <p class="task__desc">було порівнянь: ${compared};</p>
  </div>
  `)

}







