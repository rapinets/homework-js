'use strict'

if (confirm('Почати тестування?')) {
  /**
 * 3. Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер 
 * скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька 
 * об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.
 */

  class Reminder {
    static instance = null;
    intervalId = null;
    count = 0;

    constructor(message, seconds) {
      if (Reminder.instance) {
        return Reminder.instance;
      }
      this.message = message;
      this.seconds = seconds;
      Reminder.instance = this;
    }

    start() {
      if (this.intervalId) {
        console.log('Reminder is already running');
        return;
      }
      this.intervalId = setInterval(() => {
        this.count++;
        console.log(`${this.count}: ${this.message}`);
      }, this.seconds * 1000);
    }

    stop() {
      if (!this.intervalId) {
        console.log('Reminder is not running');
        return;
      }
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    changeMessage(newMessage) {
      this.message = newMessage;
    }
  }

  const reminder1 = new Reminder('Time to take a break!', 5);
  reminder1.start();
  setTimeout(() => reminder1.changeMessage('Time to get back to work!'), 15000);
  setTimeout(() => reminder1.stop(), 30000);
  const reminder2 = new Reminder('This is a second reminder!', 10);
  reminder2.start();
}

