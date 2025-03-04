'use strict'

if (confirm('Почати тестування?')) {
  const columnNum = parseInt(prompt('Введіть кількість стовпчиків', '1'));
  const rowNum = parseInt(prompt('Введіть кількість рядків', '1'));
  const shotNum = parseInt(prompt('Введітькількість пострілів', '1'));

  const columnRandNum = 1 + Math.floor(Math.random() * columnNum);
  const rowRandNum = 1 + Math.floor(Math.random() * rowNum);

  let inputColNum, inputRowNum;

  for (let i = 1; i <= shotNum; i++) {
    inputColNum = parseInt(prompt(`Спроба №${i} введіть номер стовпчика`, '1'));
    inputRowNum = parseInt(prompt(`Спроба №${i} введіть номер рядка`, '1'));
  }

  let msg;

  if (inputColNum == columnRandNum && inputRowNum == rowRandNum) {
    msg = `Ви поцілили у корабель, рядок - ${inputRowNum} та стовпчик - ${inputColNum}`;
  } else {
    msg = `Ви не поцілили у корабель. Корабель був у ${rowRandNum} - рядку та ${columnRandNum} - стовпчику`;
  }

  document.write(`
  <div class="task__container">
    <h1 class="task__title">Задача №13</h1>
    <p class="task__info">
     Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель.
    </p>
    <h2 class="task__sub-title">Розв'язок:</h2>
    <p class="task__desc">${msg}</p>
  </div>
  `)
}
