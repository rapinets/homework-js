'use strict'

if (confirm('Почати тестування?')) {
  /**
 * 1. Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)
 */

  class ArrayOperations {
    static countPositive(arr) {
      return arr.filter(num => num > 0).length;
    }

    static countNegative(arr) {
      return arr.filter(num => num < 0).length;
    }

    static countOccurrences(arr, value) {
      return arr.filter(num => num === value).length;
    }
  }

  const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
  console.log(ArrayOperations.countPositive(numbers));
  console.log(ArrayOperations.countNegative(numbers));
  console.log(ArrayOperations.countOccurrences(numbers, -2));
}




