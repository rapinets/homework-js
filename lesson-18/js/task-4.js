'use strict'

/**
 * Задача 4. Наперед задано у скрипті масив зі списком бажань. Після завантаження сторінки випадковим чином вибираються 3 і 
 * відображаються у окремих div (їх треба створити і додати на сторінку)
 */

const wishlist = ['desire1', 'desire2', 'desire3', 'desire4', 'desire5', 'desire6', 'desire7', 'desire8', 'desire9'];

function showDesire(arr, num = 3) {
  if (arr.length === 0) throw new Error('Wishlist not found!');

  const wishParentBlock = document.querySelector('.wish');

  if (!wishParentBlock) throw new Error('Such a section does not exist!');

  while (num > 0) {
    let wish = Math.floor(Math.random() * arr.length);
    let wishBlock = document.createElement('div');
    wishBlock.classList.add('wish__item');
    wishBlock.innerText = arr[wish];
    wishParentBlock.append(wishBlock);
    num--;
  }

}

window.onload = function () {
  showDesire(wishlist);
}

