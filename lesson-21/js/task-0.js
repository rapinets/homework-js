'use strict'

/**
 * Задача 0. Розробити клас Person (поля:ім'я, вік, адреса; методи: toString, визначення року народження). 
 * На основі класу Person  розробити клас Worker (додати поля: посада, розмір плати, кількість відсотів оподаткування; 
 * методи:визначення кількості виплачених коштів за рік, та визначення розміру податків) 
 */

class Person {
  #age

  constructor(name, age, address) {
    this.name = name
    this.Age = age
    this.address = address
  }

  get Age() {
    return this.#age
  }

  set Age(value) {
    if (value <= 0 || isNaN(value) || value >= 110) throw new Error('Incorrect age')
    this.#age = value
  }

  birthYear() {
    const birthYear = 2025 - this.Age
    return birthYear
  }

  toString() {
    return `Name: ${this.name}; Age: ${this.Age}; Year of birth: ${this.birthYear()}; Address: (Str.: ${this.address.street}; Num.: ${this.address.number}; City: ${this.address.city}; Region: ${this.address.region}; Index: ${this.address.index}) `
  }
}

class Worker extends Person {
  #salary
  #taxNum
  constructor(name, age, address, position, salary, taxNum) {
    super(name, age, address)
    this.position = position
    this.Salary = salary
    this.TaxNum = taxNum
  }

  get Salary() {
    return this.#salary
  }

  set Salary(value) {
    if (value < 0 || isNaN(value)) throw new Error('Incorrect salary')
    this.#salary = value
  }

  get TaxNum() {
    return this.#taxNum
  }

  set TaxNum(value) {
    if (isNaN(value) || value < 0) throw new Error('Incorrect tax')
    this.#taxNum = value
  }

  getPaidForYear() {
    return this.Salary * 12
  }

  getAmounOfTaxes() {
    return this.getPaidForYear() / 100 * this.TaxNum
  }

  toString() {
    return super.toString() + `Salary: ${this.Salary}; Position: ${this.position}; Amount paid per year: ${this.getPaidForYear()}; Amount of taxes: ${this.getAmounOfTaxes()}`
  }
}

const address = {
  street: 'Halaska',
  number: '18',
  city: 'Velyki Luchky',
  region: 'Zakarpatska',
  index: '89625',
}

const section = document.querySelector('.person__desc')

try {
  const worker = new Worker('Vasyl', 39, address, 'builder', 40000, 19.5)
  section.textContent = worker.toString()

} catch (error) {
  console.log(error);
  section.textContent = 'Sorry! An error occurred!'
}

