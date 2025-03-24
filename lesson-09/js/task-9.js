'use strict'

if (confirm('Почати тестування?')) {
  /**
   * 9. Дано масив імен. Сформувати масив з перших літер цих імен.
   */

  const nameList = ['Ivan', 'Vasyl', 'Oksana', 'Diana', 'Inna', 'Jon', 'Mike', 'Alina', 'Olha'];

  function getFirstLeter(arr) {
    return arr.map(el => el[0]);
  }

  const resultArr = getFirstLeter(nameList);

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №9</h1>
      <p class="task__info">Дано масив імен. Сформувати масив з перших літер цих імен.</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">Масив імен: [${nameList}]</p>
      <p class="task__desc">Результат - ${resultArr}</p>
    </div>
    `);

}

