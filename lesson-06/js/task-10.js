'use strict'

if (confirm('Почати тестування?')) {

  document.write(`
    <div class="task__container">
      <h1 class="task__title">Задача №10</h1>
      <p class="task__info">Побудувати ялинку</p>
      <h2 class="task__sub-title">Розв'язання:</h2>
    </div>
    `);

  let pattern = '';
  let rows = 5;
  for (let k = 0; k < 3; k++) {
    for (let i = 1; i <= rows; i++) {

      for (let j = 1; j <= i; j++) {
        pattern += 'o';

      }
      pattern += '<br>';
    }

  }


  document.write(pattern);

}





