'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
 */

  let userDate = {
    day: 23,
    month: 5,
    year: 2023,
  }

  function calculateFutureYear({ month, year }, monthsToAdd) {
    return year += Math.floor((month + monthsToAdd) / 12)
  }

  console.log(calculateFutureYear(userDate, 35))


}


