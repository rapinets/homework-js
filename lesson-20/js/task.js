'use strict'

/**
 * Задача. Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент
 */

const cssObj = {
  searchContainer: 'search-container',
  searchLabel: 'search-label',
  searchInp: 'search-input',
  listWrapper: 'list-wrapper',
  listNames: 'list-names',
  listItem: 'list-item',
}

const listNames = ['Ivan Popovich', 'Jack Deniels', 'Ivanka Tramp', 'Johnnie Walker', 'John Smith', 'Will Smith']

class SearchForm {
  constructor(listNames, cssObj) {
    this.listNames = listNames
    this.cssObj = cssObj
  }

  renderInpEl(labelVal) {
    const searchLabel = document.createElement('label')
    searchLabel.for = 'search'
    searchLabel.className = this.cssObj.searchLabel
    searchLabel.textContent = labelVal

    const searchInp = document.createElement('input')
    searchInp.id = 'search'
    searchInp.className = this.cssObj.searchInp

    return { searchLabel, searchInp }
  }

  renderListHeader() {
    const header = document.createElement('h2')
    header.className = 'list__sub-title'
    header.textContent = 'Employees'
    return header
  }

  renderNamesList() {
    const listWrapper = document.createElement('div')
    listWrapper.className = this.cssObj.listWrapper
    listWrapper.append(this.renderListHeader())

    const namesList = document.createElement('ul')
    namesList.className = this.cssObj.listNames
    listWrapper.append(namesList)
    this.listNames.forEach(item => {
      const listItem = document.createElement('li')
      listItem.className = this.cssObj.listItem
      listItem.textContent = item
      namesList.append(listItem)
    })
    return listWrapper
  }

  search(e) {
    const targetEl = e.target.value
    const names = document.querySelectorAll(`.${this.cssObj.listItem}`)
    for (const element of names) {
      element.style.display = 'none'
      if (element.textContent.toLowerCase().includes(targetEl.toLowerCase().trim())) {
        element.style.display = 'block'
      }
    }

  }

  render(containerSelector) {
    const searchContainer = document.createElement('div')
    searchContainer.className = this.cssObj.searchContainer
    const { searchLabel, searchInp } = this.renderInpEl('Name:')
    searchContainer.append(searchLabel)
    searchInp.addEventListener('input', this.search.bind(this))
    searchContainer.append(searchInp)

    if (containerSelector) {
      const container = document.querySelector(containerSelector)
      container.append(searchContainer)
      container.append(this.renderNamesList())
    }
  }
}

const searchForm = new SearchForm(listNames, cssObj)
searchForm.render('.form-section')

