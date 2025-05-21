'use strict'

/**
 * 
 * Задача 7. Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0) і з випадковою 
 * швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top). Як тільки сніжинка 
 * досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).
 */

class Snowfall {
  constructor(density = 100, speed = 30) {
    this.density = density;
    this.speed = speed;
    this.body = document.body;
    this.bodyHeight = window.innerHeight;
    this.bodyWidth = window.innerWidth;
    this.snowflakes = [];

    this.createSnowflakes();

  }

  createSnowflakes() {
    for (let i = 0; i < this.density; i++) {
      const snow = document.createElement('div');
      snow.classList.add('snowflake');

      snow.style.left = `${Math.random() * this.bodyWidth}px`;
      snow.style.top = `${Math.random() * this.bodyHeight}px`;

      const speed = 1 + Math.random() * 2;

      this.body.appendChild(snow);

      this.snowflakes.push({
        el: snow,
        speed: speed
      });
    }
  }

  moveSnowflakes() {
    this.snowflakes.forEach(snowflake => {
      let top = parseFloat(snowflake.el.style.top);
      top += snowflake.speed;

      if (top > this.bodyHeight) {
        top = -10;
        snowflake.el.style.left = `${Math.random() * this.bodyWidth}px`;
      }

      snowflake.el.style.top = `${top}px`;
    });
  }

  run() {
    this.interval = setInterval(() => this.moveSnowflakes(), this.speed);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }
}

const snowfall = new Snowfall(150);
snowfall.run();

document.addEventListener('click', () => {
  snowfall.stop();
  document.body.style.backgroundColor = '#fff';
  document.body.style.overflow = 'auto';
});