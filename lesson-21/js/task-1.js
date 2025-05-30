'use strict'

/**
 * Задача 1. Створити клас Client
 * - Властивості: ID, ПІБ, Кількість грошей на рахунку;
 * - Методи: Додавання грошей, Зняття грошей, ToString
 * На основі цього класу створити клас GoldenClient
 * - Властивості: ID, ПІБ, Кількість грошей на рахунку, Ліміт кредитних коштів, Відсоток за використання кредитних коштів
 * - Методи: Додавання грошей, Зняття грошей, Визначення пені за використання кредитних коштів, ToString
 */

class Client {
  #balance
  #id
  #fullName

  constructor(fullName, balance) {
    this.FullName = fullName
    this.Balance = balance
    this.#id = Math.random()
  }

  get ID() {
    return this.#id
  }

  get Balance() {
    return this.#balance
  }

  set Balance(value) {
    if (value < 0 || isNaN(value)) throw new Error('Incorrect balance')
    this.#balance = value
  }

  get FullName() {
    return this.#fullName
  }

  set FullName(value) {
    if (value.length < 3) throw new Error('The name must contain more than 3 characters')
    this.#fullName = value
  }

  addMoney(value) {
    return this.Balance += value
  }

  withdrawMoney(value) {
    if (value < 0 || isNaN(value)) throw new Error('Incorrect data')
    if (value > this.Balance) throw new Error('Insufficient funds in the account')
    return this.Balance -= value
  }

  toString() {
    return `ID: ${this.ID}; Full name: ${this.FullName}; Balance: ${this.Balance}; `
  }
}

class GoldenClient extends Client {
  #creditLimit
  #creditPercentage
  constructor(fullName, balance, creditLimit, creditPercentage) {
    super(fullName, balance)
    this.CreditLimit = creditLimit
    this.CreditPercentage = creditPercentage
  }

  get CreditLimit() {
    return this.#creditLimit
  }

  set CreditLimit(value) {
    if (value < 0 || isNaN(value)) throw new Error('Incorrect data')
    this.#creditLimit = value
  }

  get CreditPercentage() {
    return this.#creditPercentage
  }

  set CreditPercentage(value) {
    if (isNaN(value) || value < 0) throw new Error('Incorrect percentage')
    this.#creditPercentage = value
  }

  penaltyForUsingCredit() {
    return this.CreditLimit / 100 * this.CreditPercentage
  }

  addMoney(value) {
    super.addMoney(value)
  }

  withdrawMoney(value) {
    if (value < 0 || isNaN(value)) throw new Error('Incorrect data')
    if (value > this.Balance + this.CreditLimit) throw new Error('Insufficient funds in the account')
    this.Balance -= value
    if (this.Balance < 0) this.CreditLimit += this.Balance
  }

  toString() {
    return super.toString() + `Credit limit: ${this.CreditLimit}; Interest on the use of credit funds: ${this.CreditPercentage}%; 
    Penalty for using credit funds: ${this.penaltyForUsingCredit()}`
  }
}



const section = document.querySelector('.client__desc')

try {
  const client = new GoldenClient('Rapynets Vasyl', 45000, 45000, 1.5)
  section.textContent = client.toString()

} catch (error) {
  console.log(error);
  section.textContent = 'Sorry! An error occurred!'
}

