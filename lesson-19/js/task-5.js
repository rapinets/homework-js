'use strict'

/**
 * Задача 5. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента)
 */

function toHighlightCard(e) {
  const targetEl = e.target;

  if (targetEl.closest('.card-products')) {
    targetEl.closest('.card-products').classList.toggle('card-products--highlight');
  }
}

document.querySelector('.products').addEventListener('click', toHighlightCard);