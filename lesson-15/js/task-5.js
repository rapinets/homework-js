'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 5. Розробити клас "Керівник танців":
 *  Масив імен хлопців: [],
 *  Масив імен дівчат: [],
 *  Метод випадкового вибору імені хлопця(){},
 *  Метод випадкового вибору імені дівчини(){},
 *  Метод виведення пари для танців(){},
 *  Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців(){}
 */

  class DanceLeader {
    constructor() {
      this.maleNames = ['John', 'Mike', 'Tom', 'Alex'];
      this.femaleNames = ['Anna', 'Kate', 'Sara', 'Emma'];
    }

    getRandomMaleName() {
      const randomIndex = Math.floor(Math.random() * this.maleNames.length);
      return this.maleNames[randomIndex];
    }

    getRandomFemaleName() {
      const randomIndex = Math.floor(Math.random() * this.femaleNames.length);
      return this.femaleNames[randomIndex];
    }

    getDancePair() {
      const maleName = this.getRandomMaleName();
      const femaleName = this.getRandomFemaleName();
      return `${maleName} & ${femaleName}`;
    }

    run() {
      setInterval(() => {
        const dancePair = this.getDancePair();
        console.log(`New dance pair: ${dancePair}`);
      }, 5000);
    }
  }

  const danceLeader = new DanceLeader();
  danceLeader.run();

}

