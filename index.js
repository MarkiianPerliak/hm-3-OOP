// 1
function Account({ login, email }) {
    this.login = login;
    this.email = email;
  }
  
  Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
  
  const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
  });
  
  mango.getInfo()
  
  const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
  });
  
  poly.getInfo();
// 2
class User {
    constructor({ name, age, followers }) {
      this.name = name;
      this.age = age;
      this.followers = followers;
    }
  
    getInfo() {
      console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
  }
  
  const apple = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
  });
  
  apple.getInfo();
  
  const goly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
  });
  
  goly.getInfo();
  // 3
  class Storage {
    constructor(items) {
      this.items = items;
    }
  

    getItems() {
      return this.items;
    }
  

    addItem(item) {
      this.items.push(item);
    }
  

    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }
  
  const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
  ]);
  
  const items = storage.getItems();
  console.log(items);
  
  storage.addItem('Дроїд');
  console.log(storage.items);
  
  storage.removeItem('Пролонгер');
  console.log(storage.items);

  // 4
  class StringBuilder {
    constructor(str) {
      this._value = str;
    }
  
    get value() {
      return this._value;
    }

    append(str) {
      this._value += str;
    }

    prepend(str) {
      this._value = str + this._value;
    }

    pad(str) {
      this._value = str + this._value + str;
    }
  }

  const builder = new StringBuilder('.');
  
  builder.append('^');
  console.log(builder.value);
  
  builder.prepend('^');
  console.log(builder.value);
  
  builder.pad('=');
  console.log(builder.value);
  
  // 5
  class Car {
    static getSpecs(car) {
      console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }

    constructor({ maxSpeed, price }) {
      this.speed = 0;
      this.maxSpeed = maxSpeed;
      this.price = price;
      this.isOn = false;
      this.distance = 0;
    }
  
    get price() {
      return this._price;
    }

    set price(value) {
      this._price = value;
    }

    turnOn() {
      this.isOn = true;
    }

    turnOff() {
      this.isOn = false;
      this.speed = 0;
    }
  

    accelerate(value) {
      if (this.isOn && this.speed + value <= this.maxSpeed) {
        this.speed += value;
      }
    }
  
    decelerate(value) {
      if (this.isOn && this.speed - value >= 0) {
        this.speed -= value;
      }
    }

    drive(hours) {
      if (this.isOn) {
        this.distance += hours * this.speed;
      }
    }
  }

  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  
  console.log(mustang.price);
  mustang.price = 4000;
  console.log(mustang.price);
  