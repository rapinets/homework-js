'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням.
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

  function sortCoctail(arr) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    let replaced = 0;
    let compared = 0;
    while (leftIndex < rightIndex) {
      //--- проходимось зліва-направо
      let changed = false
      for (let i = leftIndex + 1; i <= rightIndex; i++) {
        compared++
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          changed = true
          replaced++
        }
      }
      rightIndex--
      if (changed === false) break
      //---- проходимось справа-наліво
      changed = false
      for (let i = rightIndex; i > leftIndex; i--) {
        compared++
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i - 1]
          arr[i - 1] = arr[i]
          arr[i] = temp
          changed = true
          replaced++
        }
      }
      leftIndex++
      if (changed === false) break
    }

    return { arr, replaced, compared }
  }

  const { arr, replaced, compared } = sortCoctail(arrRand)

  console.log(arr);

  console.log(replaced);

  console.log(compared);

  document.writeln(`
  <div class="task__container">
    <h1 class="task__title">Задача 2</h1>
    <p class="task__info">Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням</p>
    <h2 class="task__sub-title">Розв'язання</h2>
    <p class="task__desc">масив 30 випадкових цілих чисел: ${randArr};</p>
    <p class="task__desc">сортування змішуванням: ${arr};</p>
    <p class="task__desc">було обмінів: ${replaced};</p>
    <p class="task__desc">було порівнянь: ${compared};</p>
  </div>
  `)

}







