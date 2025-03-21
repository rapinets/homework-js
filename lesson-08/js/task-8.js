'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.
   */

  const playingFieldLenght = 10;
  const minWin = -500;
  const maxWin = 500;

  function generatePlayingField(playingFieldLength, minWin, maxWin) {
    let arr = [];
    for (let i = 0; i < playingFieldLength; i++) {
      let num = minWin + Math.floor(Math.random() * (maxWin - minWin + 1));
      arr.push(num);
    }
    return arr;
  }

  function getWin(playingField) {
    let win = 0;
    while (true) {
      const userInput = parseInt(prompt(`Введіть число від 1 до ${playingField.length} (або натисніть "Скасувати" для виходу):`, '0'));

      if (isNaN(userInput) || userInput <= 0) break;

      win += playingField[userInput - 1];
    }
    return win;
  }

  const playingField = generatePlayingField(playingFieldLenght, minWin, maxWin);
  const win = getWin(playingField);

  let msg = win > 0 ? `Ваш виграш - ${win} фішок` : `Ваш борг - ${Math.abs(win)} фішок`;



  document.writeln(`
  <div class="task__container">
      <h1 class="task__title">Задача №8</h1>
      <p class="task__info">Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.</p>
      <h2 class="task__sub-title">Розв'зок:</h2>
      <p class="task__desc">${msg}</p>
    </div>
  `);

}












