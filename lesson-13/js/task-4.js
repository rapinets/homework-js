'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 4. Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.
 */

  const boysList = ['Ivan', 'Vasyl', 'Yra']
  const girlsList = ['Oksana', 'Diana', 'Alina']

  console.log('Список хлопців ===================================================');
  console.log(boysList);

  console.log('Список дівчат ===================================================');
  console.log(girlsList);

  function generateDancePairs(step, boys, girls, resArr) {

    if (step === 1) {
      console.log(resArr)
    } else {
      for (let i = 0; i < boys.length; i++) {
        for (let j = 0; j < girls.length; j++) {
          generateDancePairs(step + 1, boys, girls, [...resArr, boys[i], girls[j]])
        }
      }
    }

  }

  console.log('можливі комбінації для танців =========================================');

  generateDancePairs(0, boysList, girlsList, [])

  document.writeln(`
  <div class="task__container">
    <h1 class="task__title">Задача 4</h1>
    <p class="task__info">Дано масив хлопців і дівчат вивести всі можливі комбінації для танців з хлопців і дівчат.</p>
    <h2 class="task__sub-title">Розв'язання в консолі</h2>
  </div>
  `)

}

