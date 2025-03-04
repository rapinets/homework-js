'use strict'

if (confirm('Почати тестування?')) {
  let prize = '';
  let msg;

  document.write(`
  <div class="task__container">
    <h1 class="task__title">Задача №12</h1>
    <p class="task__info">
       Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).
    </p>
    <table>
      <tr>`
  );
  for (let i = 0; i < 3; i++) {
    const slot = 1 + Math.floor(Math.random() * 4);
    prize += slot;
    let slotImg;
    switch (slot) {
      case 1:
        slotImg = '<img src="../img/playing-card-diamond-shape-icon.svg" class="cell-img">';
        break;
      case 2:
        slotImg = '<img src="../img/playing-card-spade-shape-icon.svg" class="cell-img">';
        break;
      case 3:
        slotImg = '<img src="../img/playing-card-heart-shape-icon.svg" class="cell-img">';
        break;
      case 4:
        slotImg = '<img src="../img/playing-card-club-shape-icon.svg" class="cell-img">';
        break;
    }
    document.write(`<td>${slotImg}</td>`);
    switch (prize) {
      case '111':
        msg = 'Ви виграли 100';
        break;
      case '222':
        msg = 'Ви виграли 200';
        break;
      case '333':
        msg = 'Ви виграли 500';
        break;
      case '444':
        msg = 'Ви виграли 1000';
        break;

      default:
        msg = 'Ви виграли 0';
        break;
    }

  }


  document.write(`
      </tr>
    </table>
    <p class="task__desc">${msg}</p>
  </div>
  `)
}




