'use strict'

/**
 * Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. При кліку на якийсь із них усі наступні повинні бути зафарбовані у червоний колір.
 */

function onDivClick(e) {
  const clickedEl = e.target;
  if (clickedEl.tagName === 'DIV') {
    let next = clickedEl.nextElementSibling;
    while (next) {
      next.style.color = 'red';
      next = next.nextElementSibling;
    }
  }
}

window.onload = () => {
  document.querySelector('section').onclick = onDivClick;
}




