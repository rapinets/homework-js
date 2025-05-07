'use strict'

if (confirm('Почати тестування?')) {
  /**
 * Задача 3. Об’єкт “Фірма” (використати члени-класи):
 * поля: 
 *  - назва фірми; 
 *  - дата заснування (рік, місяць); 
 *  - послуги (назва послуги, вартість, термін виконання); 
 *  - адреси філіалів (країна, місто, вулиця, номер будинку);
 * методи:
 *  - визначення кількості років існування фірми;
 *  - виведення всіх філіалів фірми у вказаному місті;
 *  - виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;
 */

  class Service {
    #name = '';
    #price = 0;
    #duration = 0;

    constructor(name, price, duration) {
      this.#name = name;
      this.#price = price;
      this.#duration = duration;
    }

    get Name() {
      return this.#name;
    }

    get Price() {
      return this.#price;
    }

    get Duration() {
      return this.#duration;
    }

    set Name(value) {
      if (value.length < 3) {
        throw new Error('Назва послуги повинна містити не менше 3 символів!');
      }
      this.#name = value;
    }

    set Price(value) {
      if (value <= 0) {
        throw new Error('Ціна послуги повинна бути більше 0!');
      }
      this.#price = value;
    }
    set Duration(value) {
      if (value <= 0) {
        throw new Error('Тривалість послуги повинна бути більше 0!');
      }
      this.#duration = value;
    }

    toString() {
      return `Послуга: ${this.#name}, ціна: ${this.#price}, тривалість: ${this.#duration}`;
    }
  }

  class Address {
    #country = '';
    #city = '';
    #street = '';
    #houseNumber = '';

    constructor(country, city, street, houseNumber) {
      this.#country = country;
      this.#city = city;
      this.#street = street;
      this.#houseNumber = houseNumber;
    }
    get Country() {
      return this.#country;
    }
    get City() {
      return this.#city;
    }
    get Street() {
      return this.#street;
    }
    get HouseNumber() {
      return this.#houseNumber;
    }
    set Country(value) {
      if (value.length < 3) {
        throw new Error('Назва країни повинна містити не менше 3 символів!');
      }
      this.#country = value;
    }
    set City(value) {
      if (value.length < 3) {
        throw new Error('Назва міста повинна містити не менше 3 символів!');
      }
      this.#city = value;
    }
    set Street(value) {
      if (value.length < 3) {
        throw new Error('Назва вулиці повинна містити не менше 3 символів!');
      }
      this.#street = value;
    }
    set HouseNumber(value) {
      if (value.length < 1) {
        throw new Error('Номер будинку повинен містити не менше 1 символу!');
      }
      this.#houseNumber = value;
    }
    toString() {
      return `Адреса: ${this.#country}, ${this.#city}, ${this.#street}, ${this.#houseNumber}`;
    }
  }

  class Company {
    #name = '';
    #foundationDate = '';
    #services = [];
    #addresses = [];

    constructor(name, foundationDate) {
      this.#name = name;
      this.#foundationDate = foundationDate;
    }

    get Name() {
      return this.#name;
    }

    get FoundationDate() {
      return this.#foundationDate;
    }
    get Services() {
      return this.#services;
    }
    get Addresses() {
      return this.#addresses;
    }
    set Name(value) {
      if (value.length < 3) {
        throw new Error('Назва фірми повинна містити не менше 3 символів!');
      }
      this.#name = value;
    }
    set FoundationDate(value) {
      if (value > new Date()) {
        throw new Error('Дата заснування не може бути в майбутньому!');
      }
      this.#foundationDate = value;
    }
    set Services(value) {
      if (!Array.isArray(value)) {
        throw new Error('Послуги повинні бути масивом!');
      }
      this.#services = value;
    }
    set Addresses(value) {
      if (!Array.isArray(value)) {
        throw new Error('Адреси повинні бути масивом!');
      }
      this.#addresses = value;
    }
    addService(service) {
      if (!(service instanceof Service)) {
        throw new Error('Послуга повинна бути об\'єктом класу Service!');
      }
      this.#services.push(service);
    }
    addAddress(address) {
      if (!(address instanceof Address)) {
        throw new Error('Адреса повинна бути об\'єктом класу Address!');
      }
      this.#addresses.push(address);
    }
    getCompanyAge() {
      const currentDate = '2025';
      const age = currentDate - this.#foundationDate;
      return age;
    }
    getAddressesInCity(city) {
      return this.#addresses.filter((address) => address.City === city);
    }
    getServicesByBudgetAndTime(budget, time) {
      return this.#services.filter(
        (service) => service.Price <= budget && service.Duration <= time
      );
    }
    toString() {
      return `Фірма: ${this.#name}, дата заснування: ${this.#foundationDate}, послуги: ${this.#services}, адреси: ${this.#addresses}`;
    }
  }

  const company = new Company('My Company', '2020');

  company.addService(new Service('Послуга 1', 100, 2));
  company.addService(new Service('Послуга 2', 200, 3));
  company.addService(new Service('Послуга 3', 300, 4));

  company.addAddress(new Address('Україна', 'Київ', 'Вулиця 1', '1'));
  company.addAddress(new Address('Україна', 'Львів', 'Вулиця 2', '2'));
  company.addAddress(new Address('Україна', 'Одеса', 'Вулиця 3', '3'));
  company.addAddress(new Address('Україна', 'Київ', 'Вулиця 4', '4'));

  const age = company.getCompanyAge(); // Виведе кількість років існування фірми

  const address = company.getAddressesInCity('Київ'); // Виведе всі адреси фірми у місті Київ
  const service = company.getServicesByBudgetAndTime(200, 3); // Виведе послуги, що можуть бути виконані за вказану суму грошей та вказаний термін часу

  document.writeln(`
  <div class="task__container">
    <h1 class="task__title">Задача 3.</h1>
    <p class="task__info">
      Об’єкт “Фірма” (використати члени-класи):
    </p> 
    <p class="task__info">поля:</p>
    <ol>
      <li> - назва фірми;</li>
      <li> - дата заснування (рік, місяць);</li>
      <li> - послуги (назва послуги, вартість, термін виконання);</li>
      <li> - адреси філіалів (країна, місто, вулиця, номер будинку);</li>
    </ol>
    <p class="task__info">методи:</p>
    <ol>
      <li> - визначення кількості років існування фірми;</li>
      <li> - виведення всіх філіалів фірми у вказаному місті;</li>
      <li> - виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;</li>
    </ol>
    <p class="task__desc">
      Вік фірми - ${age} років
    </p>
    <p class="task__desc">
      Адреси фірми у місті Київ - ${address.map((addr) => addr.toString()).join('; ')}
    </p>
    <p class="task__desc">
      Послуги, що можуть бути виконані за вказану суму грошей та вказаний термін часу - ${service.map((serv) => serv.toString()).join('; ')}
    </p>
  </div>
  `)

}

