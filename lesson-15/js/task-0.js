'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 0 (можете поки пропустити). Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у
 * одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які
 * знаходяться між заданими мінімальним і максимальних значенням.
 * Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
 */

  const obj1 = {
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sum() {
      return this.arr.reduce((acc, el) => acc + el, 0)
    }
  }

  const obj2 = {
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiply(min, max) {
      return this.arr.reduce((acc, el) => {
        if (el >= min && el <= max) {
          return acc * el
        }
        return acc
      }, 1)
    }
  }

  console.log(obj1.sum.call(obj2)) // 55
  console.log(obj2.multiply.call(obj1, 3, 7)) // 2520
  console.log(obj1.sum.apply(obj2)) // 55
  console.log(obj2.multiply.apply(obj1, [3, 7])) // 2520

}

