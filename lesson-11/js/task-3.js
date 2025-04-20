'use strict'

if (confirm('Почати тестування?')) {
  /**
   * Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. 
   * Гра продовжується поки не потоплено у користувача не закінчаться снаряди.
   */

  function generatePlayField() {
    const table = [];
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
      table.push([]);
      for (let colIndex = 0; colIndex < 6; colIndex++) {
        table[rowIndex].push(0);
      }
    }
    return table;
  }

  function getShip() {
    const playField = generatePlayField();
    let shipsPlaced = 0;
    while (shipsPlaced < 5) {
      let row = Math.floor(Math.random() * 6);
      let col = Math.floor(Math.random() * 6);
      if (playField[row][col] === 0 && playField[row][col] !== 1) {
        playField[row][col] = 1;
        shipsPlaced++;
      }
    }
    return playField;
  }

  console.log(getShip());


  function getPlay() {
    const arr = getShip();
    let remainingShips = 5;
    let userShot = parseInt(prompt('Введіть кількість пострілів від 1 до 36', '5'));
    let win = false;

    while (remainingShips > 0 && userShot > 0) {
      const userRowInput = parseInt(prompt('Введіть номер рядка від 1 до 6', '1'));
      const userColInput = parseInt(prompt('Введіть номер стовпчика від 1 до 6', '1'));

      if ((isNaN(userRowInput) || isNaN(userColInput)) || (userRowInput < 0 || userColInput < 0) || (userColInput > 6 || userRowInput > 6)) {
        alert('Таких координат не існує');
        continue;
      }

      if (arr[userRowInput - 1][userColInput - 1] === 1) {
        arr[userRowInput - 1][userColInput - 1] = 0;
        remainingShips--;
        userShot--;
        alert(`Влучили! Залишилося ${remainingShips} кораблів і ${userShot} пострілів`);
      } else {
        userShot--;
        alert(`Мимо! Спробуйте ще раз, у вас залишилося ${userShot} пострілів`);
      }

      if (remainingShips === 0) win = true;

      // if (userShot === 0) shot = true;
    }
    return win;
  }

  const win = getPlay();

  if (win) {
    alert('Ви потопили всі кораблі! 🎉');
  } else {
    alert('Гру завершено. Не всі кораблі знищені. 😔');
  }

}

