'use strict'

if (confirm('Почати тестування?')) {
  /**
 * 4. Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). 
 * Організувати реєстрацію/відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми
 */

  class Product {
    constructor(name, unit, quantity, manufacturer) {
      this.name = name;
      this.unit = unit;
      this.quantity = quantity;
      this.manufacturer = manufacturer;
    }

    toString() {
      return `Product: ${this.name}, Unit: ${this.unit}, Quantity: ${this.quantity}, Manufacturer: ${this.manufacturer.name}`;
    }
  }

  class Manufacturer {
    constructor(name, registrationNumber) {
      this.name = name;
      this.registrationNumber = registrationNumber;
    }

    toString() {
      return `Manufacturer: ${this.name}, Registration Number: ${this.registrationNumber}`;
    }
  }

  class Warehouse {
    constructor() {
      this.products = [];
    }

    addProduct(product) {
      this.products.push(product);
    }

    removeProduct(name) {
      this.products = this.products.filter(product => product.name !== name);
    }

    filterByName(name) {
      return this.products.filter(product => product.name === name);
    }

    filterByManufacturer(manufacturerName) {
      return this.products.filter(product => product.manufacturer.name === manufacturerName);
    }
    listProducts() {
      return this.products.map(product => product.toString()).join('\n');
    }
  }

  const warehouse = new Warehouse();
  const manufacturer1 = new Manufacturer('Manufacturer A', '123456');
  const manufacturer2 = new Manufacturer('Manufacturer B', '654321');
  const product1 = new Product('Product 1', 'kg', 100, manufacturer1);
  const product2 = new Product('Product 2', 'liters', 50, manufacturer2);
  const product3 = new Product('Product 1', 'kg', 200, manufacturer2);
  const product4 = new Product('Product 3', 'pcs', 30, manufacturer1);

  warehouse.addProduct(product1);
  warehouse.addProduct(product2);
  warehouse.addProduct(product3);
  warehouse.addProduct(product4);
  console.log('All products in the warehouse:');
  console.log(warehouse.listProducts());
  console.log('Filtered by name "Product 1":');
  console.log(warehouse.filterByName('Product 1').map(product => product.toString()).join('\n'));
  console.log('Filtered by manufacturer "Manufacturer A":');
  console.log(warehouse.filterByManufacturer('Manufacturer A').map(product => product.toString()).join('\n'));
  console.log('Removing "Product 1" from the warehouse.');
  warehouse.removeProduct('Product 1');
  console.log('All products in the warehouse after removal:');
  console.log(warehouse.listProducts());
}

