'use strict'

/**
 * Задача 6. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. 
 * При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. 
 * При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону 
 * стрілку спортсмен переміщається у загальний список.
 */

function moveToCompetition(el) {
  el.classList.replace('general-list__item', 'chosen-list__item');
  el.lastElementChild.classList.replace('general-list__btn', 'chosen-list__btn');

  const chosenList = document.querySelector('.chosen-list')
  chosenList.append(el);
}

function moveBack(el) {
  el.classList.replace('chosen-list__item', 'general-list__item');
  el.lastElementChild.classList.replace('chosen-list__btn', 'general-list__btn');
  const generalList = document.querySelector('.general-list');
  generalList.append(el);
}

function documentActions(e) {
  const type = e.type;
  const targetElement = e.target;
  if (type === 'click') {
    if (targetElement.closest('.general-list__item')) {
      moveToCompetition(targetElement.closest('.general-list__item'));
    } else if (targetElement.closest('.chosen-list__item')) {
      moveBack(targetElement.closest('.chosen-list__item'));
    }
  }
}

document.addEventListener('click', documentActions);
