'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення 
   * (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>
   */

  function showBaner(img, title, url) {
    return `<a class="baner" href=${url}  target="_blank"><h2 class="baner__title">${title}</h2><img class="baner__img" src=${img}></a>`;
  }

  const img = '../img/picture-symbol.jpg';
  const title = 'JS functions';
  const url = 'https://uk.javascript.info/function-basics';

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №8</h1>
      <p class="task__info">Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      ${showBaner(img, title, url)}
    </div>
    `);
}