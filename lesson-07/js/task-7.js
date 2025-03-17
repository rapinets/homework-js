'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)
   */

  function showRandImg(img1, img2, img3, img4) {
    let randIndex = Math.floor(Math.random() * 4);
    let res;
    if (randIndex === 0) res = img1;
    if (randIndex === 1) res = img2;
    if (randIndex === 2) res = img3;
    if (randIndex === 3) res = img4;
    return res;
  }

  const img1 = '../img/playing-card-club-shape-icon.svg';
  const img2 = '../img/playing-card-diamond-shape-icon.svg';
  const img3 = '../img/playing-card-heart-shape-icon.svg';
  const img4 = '../img/playing-card-spade-shape-icon.svg';

  const randImg = showRandImg(img1, img2, img3, img4)

  document.writeln(`
    <div class="task__container">
      <h1 class="task__title">Задача №7</h1>
      <p class="task__info">Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <div class="picture"><img src="${randImg}"></div>
    </div>
    `);
}