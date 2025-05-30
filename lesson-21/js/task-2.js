'use strict'

/**
 * Задача 2. Створити клас Bank, у якому зберігається масив клієнтів. Виконати такі операції
 * - Вивести всіх простих клієнтів;
 * - Вивести всіх клієнтів GoldenClient;
 * - Знайти сумарну кількість грошей на рахунку;
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

const listClients = [
  new Client('Ivan Popovich', 50000),
  new Client('Jack Deniels', 45000),
  new GoldenClient('Rapynets Vasyl', 45000, 45000, 1.5),
  new GoldenClient('Ivanka Tramp', 65000, 45000, 1.5),
]

class Bank {
  constructor(clientList) {
    this.clientList = clientList
  }

  withdrawNotGoldenClient() {
    const notGoldenClient = this.clientList.filter(el => !(el instanceof GoldenClient))
    const ulEl = document.createElement('ul')
    const h3El = document.createElement('h3')
    h3El.className = 'client__sub-title'
    h3El.textContent = 'Client'
    ulEl.append(h3El)

    for (const element of notGoldenClient) {
      const liEl = document.createElement('li')
      liEl.textContent = element.toString()
      ulEl.append(liEl)
    }

    return ulEl
  }

  withdrawGoldenClient() {
    const goldenClient = this.clientList.filter(el => el instanceof GoldenClient)
    const ulEl = document.createElement('ul')
    const h3El = document.createElement('h3')
    h3El.className = 'client__sub-title'
    h3El.textContent = 'Golden Client'
    ulEl.append(h3El)

    for (const element of goldenClient) {
      const liEl = document.createElement('li')
      liEl.textContent = element.toString()
      ulEl.append(liEl)
    }

    return ulEl
  }

  totalAmount() {
    const totalAmount = this.clientList.reduce((sum, cl) => sum += cl.Balance, 0)
    const ulEl = document.createElement('ul')
    const h3El = document.createElement('h3')
    h3El.className = 'client__sub-title'
    h3El.textContent = 'Total amount of money in the account'
    ulEl.append(h3El)
    const liEl = document.createElement('li')
    liEl.textContent = `Total: ${totalAmount}`
    ulEl.append(liEl)
    return ulEl
  }

}

const bank = new Bank(listClients)
const notGoldenClient = bank.withdrawNotGoldenClient()
const goldenClient = bank.withdrawGoldenClient()
const totalAmount = bank.totalAmount()

const section = document.querySelector('.client__desc')

try {
  section.append(notGoldenClient)
  section.append(goldenClient)
  section.append(totalAmount)
} catch (error) {
  console.log(error);
  section.textContent = 'Sorry! An error occurred!'
}




