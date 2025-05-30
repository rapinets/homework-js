'use strict'

/**
 * Задача 3. Розробити Класи
 * House
 * --- властивості ---
 * Координата Х
 * Координата У
 * шлях до зображення
 * інтервал оновлення
 * --- методи ---
 * генерування елемента розмітки
 * оновлення через вказаний інтервал (збільшення або зменшення масштабу (об’єкт не рухається)
 * ======================================================================================
 * Dog
 * --- властивості ---
 * Координата Х
 * Координата У
 * шлях до зображення
 * інтервал оновлення
 * --- методи ---
 * генерування елемента розмітки
 * оновлення через вказаний інтервал (випадкове зміщення по горизонталі (зміна координати Х))
 * ======================================================================================
 * Bird
 * --- властивості ---
 * Координата Х
 * Координата У
 * шлях до зображення
 * інтервал оновлення
 * --- методи ---
 * генерування елемента розмітки
 * оновлення через вказаний інтервал (випадкове переміщення у довільному напрямку)
 */

class Subject {
  #coordX
  #coordY
  #imgSrc
  #updateInterval

  constructor(coordX, coordY, imgSrc, updateInterval) {
    this.CoordX = coordX
    this.CoordY = coordY
    this.ImgSrc = imgSrc
    this.UpdateInterval = updateInterval
  }

  get CoordX() {
    return this.#coordX
  }

  set CoordX(val) {
    if (val < 0 || val > 100 || isNaN(val)) throw new Error('Coordinates must be numbers from 0 to 100')
    this.#coordX = val
  }

  get CoordY() {
    return this.#coordY
  }

  set CoordY(val) {
    if (val < 0 || val > 100 || isNaN(val)) throw new Error('Coordinates must be numbers from 0 to 100')
    this.#coordY = val
  }

  get ImgSrc() {
    return this.#imgSrc
  }

  set ImgSrc(val) {
    if (val.length === 0) throw new Error('Image path not entered')
    this.#imgSrc = val
  }

  get UpdateInterval() {
    return this.#updateInterval
  }

  set UpdateInterval(val) {
    if (val < 0 || isNaN(val)) throw new Error('The interval must be greater than 0')
    this.#updateInterval = val
  }

  render(containerSelector) {
    if (containerSelector) {
      return document.querySelector(containerSelector)
    }
  }
}

class House extends Subject {
  constructor(coordX, coordY, imgSrc, updateInterval) {
    super(coordX, coordY, imgSrc, updateInterval)
  }

  renderEl() {
    const divEl = document.createElement('div')
    divEl.className = 'house'
    divEl.style.top = `${this.CoordY}%`
    divEl.style.left = `${this.CoordX}%`
    const imgEl = document.createElement('img')
    imgEl.src = this.ImgSrc
    divEl.append(imgEl)
    this.imgEl = imgEl
    return divEl
  }

  transform() {
    setInterval(() => this.imgEl.style.scale = Math.random().toFixed(2), this.UpdateInterval)
  }

  render(containerSelector) {
    const sectionEl = super.render(containerSelector)
    const el = this.renderEl()
    sectionEl.append(el)
    return sectionEl
  }
}

class Dog extends Subject {
  constructor(coordX, coordY, imgSrc, updateInterval) {
    super(coordX, coordY, imgSrc, updateInterval)
  }

  renderEl() {
    const divEl = document.createElement('div')
    divEl.className = 'dog'
    divEl.style.top = `${this.CoordY}%`
    divEl.style.left = `${this.CoordX}%`
    const imgEl = document.createElement('img')
    imgEl.src = this.ImgSrc
    divEl.append(imgEl)
    this.divEl = divEl
    return divEl
  }

  move() {
    setInterval(() => this.divEl.style.left = `${Math.floor(Math.random() * 80)}%`, this.UpdateInterval)
  }

  render(containerSelector) {
    const sectionEl = super.render(containerSelector)
    const el = this.renderEl()
    sectionEl.append(el)
    return sectionEl
  }
}

class Bird extends Subject {
  constructor(coordX, coordY, imgSrc, updateInterval) {
    super(coordX, coordY, imgSrc, updateInterval)
  }

  renderEl() {
    const divEl = document.createElement('div')
    divEl.className = 'bird'
    divEl.style.top = `${this.CoordY}%`
    divEl.style.left = `${this.CoordX}%`
    const imgEl = document.createElement('img')
    imgEl.src = this.ImgSrc
    divEl.append(imgEl)
    this.divEl = divEl
    return divEl
  }

  newPosition() {
    this.divEl.style.left = `${Math.floor(Math.random() * 80)}%`
    this.divEl.style.top = `${Math.floor(Math.random() * 80)}%`
  }

  move() {
    setInterval(() => this.newPosition(), this.UpdateInterval)
  }

  render(containerSelector) {
    const sectionEl = super.render(containerSelector)
    const el = this.renderEl()
    sectionEl.append(el)
    return sectionEl
  }
}

class renderError {
  constructor(error) {
    this.error = error
  }

  render(containerSelector) {
    const h3El = document.createElement('h3')
    if (containerSelector) {
      h3El.className = 'error__sub-title'
      h3El.style.color = 'red'
      h3El.textContent = this.error
    }
    document.querySelector(containerSelector).append(h3El)
  }
}

try {
  const house = new House(20, 10, './img-21/house3.jpg', 2000)
  house.render('.section')
  house.transform()

  const dog = new Dog(10, 40, './img-21/dog1.png', 1000)
  dog.render('.section')
  dog.move()

  const bird = new Bird(0, 50, './img-21/bird1.avif', 3000)
  bird.render('.section')
  bird.move()
} catch (error) {
  const errorTxt = new renderError(error)
  errorTxt.render('.section')
}


