'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 4. Розробити клас Baner:
 *  Масив об’єктів ( графічних зображень та посилань на сайти): [],
 *  Метод випадкового вибору об’єкта (графічного зображення та посилання)(){},
 *  Метод виведення випадкового банера(){}
 */

  class Banner {
    constructor(list) {
      this.banners = list;
    }

    getRandomBanner() {
      const randomIndex = Math.floor(Math.random() * this.banners.length);
      return this.banners[randomIndex];
    }

    displayRandomBanner() {
      const banner = this.getRandomBanner();
      document.writeln(
        `<div class="task__container">
        <h1 class="task__title">Задача 4</h1>
        <h2 class="task__sub-title">Поля</h2>
        <ol><li>Масив об’єктів ( графічних зображень та посилань на сайти)</li></ol>
        <h2 class="task__sub-title">Методи</h2>
        <ol>
          <li>Метод випадкового вибору об’єкта (графічного зображення та посилання)</li>
          <li>Метод виведення випадкового банера</li>
        </ol>
        <h2 class="task__sub-title">Випадковий банер</h2>
        <a href="${banner.link}" target="_blank">
          <img src="${banner.link}" alt="${banner.image}" title="${banner.image}" style="width: 300px; height: 400px;">
        </a>
      </div>`
      );
    }
  }

  const bannerList = [
    {
      image: 'A white turntable rests on a wooden cabinet',
      link: 'https://images.unsplash.com/photo-1744089326555-4508e029f2f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      image: 'A kayboard is filled with colorful, custom keycaps',
      link: 'https://images.unsplash.com/photo-1746254774131-f94b3d6b84d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      image: 'Coffe machine in a cafe',
      link: 'https://images.unsplash.com/photo-1744236404773-3a956911861b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Mzh8fHxlbnwwfHx8fHw%3D'
    },
  ];

  const banner = new Banner(bannerList);
  banner.displayRandomBanner();

}


