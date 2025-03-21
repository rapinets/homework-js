'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 9. Морський бій. Користувач вводить кількість клітинок одновимірного масиву та кількість одиночних кораблів. 
   * Комп’ютер довільно розміщує ці одиночні кораблі у масиві по один у клітинці (якщо у клітинці 0, то клітинка пуста, якщо 1 – то це означає, 
   * що там є корабель. Користувач вводить номер клітинки, куди стріляє. Гра продовжується до тих пір, поки не будуть потоплені усі кораблі.
   */

  const fieldLength = parseInt(prompt('Введіть довжину ігрового поля', '1'));
  const numShips = parseInt(prompt('Введіть кількість кораблів', '1'));

  function generatePlayingField(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(0);
    }
    return arr;
  }

  function getShip(num, length) {
    let arr = generatePlayingField(length);
    let shipsPlaced = 0;
    while (shipsPlaced < num) {
      let el = Math.floor(Math.random() * length);
      if (arr[el] === 0) {
        arr[el] = 1;
        shipsPlaced++;
      }
    }
    return arr;
  }

  function getPlay(numShips, fieldLength) {
    let arr = getShip(numShips, fieldLength)
    let remainingShips = numShips;
    let win = false;
    while (remainingShips > 0) {
      const userInput = parseInt(prompt(`Введіть число від 1 до ${fieldLength}`, '0'));

      if (isNaN(userInput) || userInput < 0) break;

      if (arr[userInput - 1] === 1) {
        arr[userInput - 1] = 0;
        remainingShips--;
        alert(`Влучили! Залишилося ${remainingShips} кораблів`);
      } else {
        alert('Мимо! Спробуйте ще раз.');
      }

      if (remainingShips === 0) {
        win = true;
      }
    }
    return win;
  }

  const win = getPlay(numShips, fieldLength);

  if (win) {
    alert('Ви потопили всі кораблі! 🎉');
  } else {
    alert('Гру завершено. Не всі кораблі знищені. 😔');
  }

}
