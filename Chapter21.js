/*---------------------------------------------------------------------------------------------------
                              সেইম ড্রেসে Class পার্টি
--------------------------------------------------------------------------------------------------*/
/*
1. ক্লাস আর অবজেক্টের মধ্যে ডিফারেন্স কী?*/
// ~ ক্লাস হলো একটি গঠন বা কাঠামো, আর অবজেক্ট হলো ক্লাসের ভিত্তিতে তৈরি ব্যবহারযোগ্য বস্তুর বাস্তব রূপ। ক্লাস হল একটি টেম্পলেট যা একই প্রোপার্টিবিশিষ্ট একাধিক অবজেক্ট তৈরি করে।

/*
2. ক্লাস ইন্সট্যান্স বলতে কী বুঝায়? */
// ! কোনো একটা ক্লাস থেকে যতগুলো অবজেক্ট তৈরি হয়, সবগুলোকে বলা হয় ওই ক্লাসের instance। ইংরেজি instance শব্দের বাংলা মানে হচ্ছে নমুনা, নিদর্শন ইত্যাদি। কোনো অবজেক্ট এসে যদি বলে, আমি সেই ক্লাসের সন্তান, তাহলে DNA টেস্টের মতো করে instanceOf দিয়ে তা ধরে ফেলা যায়।

/*
3. Vehicle নামে একটা ক্লাস লিখ, সেখানে constructor-এর মধ্যে brand, model এবং price প্রোপার্টি রাখ। Vehicle ক্লাস থেকে দুইটা instance বানাও, একটা BMW X5, যেখানে ব্র্যান্ড BMW, মডেল X5 আর price তুই তোর ইচ্ছামত কোনো একটি দাম বসিয়ে দে। আরেকটা গাড়ির জন্য ব্র্যান্ড Tesla, মডেল Model 3 আর price 40000। */
class Vehicle {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
const vehicle1 = new Vehicle('BMW X5', 'BMW', 111000);
const vehicle2 = new Vehicle('Tesla', 'Model 3', 40000);
console.log(vehicle1);
console.log(vehicle2);

/*
4. Worker নামে একটা ক্লাস বানিয়ে সেখানে id, name আর hoursWorked নামে প্রোপার্টি যোগ কর। তারপর নতুন worker বানাও, যার id হবে 101, name হবে Tom Cruise আর hoursWorked হবে 40। */
class Worker {
  constructor(id, name, hoursWorked) {
    this.id = id;
    this.name = name;
    this.hoursWorked = hoursWorked;
  }
}
const worker = new Worker(101, 'Tom Cruise', 40);
console.log(worker);

/*
5. Library নামে একটা ক্লাস বানা, যেখানে constructor-এর মধ্যে তিনটা প্রোপার্টি থাকবে name, books, আর location। তারপর নতুন একটা library বানাও, যার নাম Central Library, books 10000 আর location Dhaka। এরপর instanceof দিয়ে চেক কর তোর বানানো অবজেক্টটা Library ক্লাসের ইন্সট্যান্স কি না। */
class Library {
  constructor(name, books, location) {
    this.name = name;
    this.books = books;
    this.location = location;
  }
}
const library = new Library('Central Library', 10000, 'Dhaka');
console.log(library instanceof Library);

/*
6. Classroom নামে একটি ক্লাস বানা, যেখানে students নামে একটি প্রোপার্টি থাকবে, যা শুরুতেই খালি array হবে। constructor-এর মধ্যে section আর teacher প্রোপার্টি রাখ। তারপর Classroom থেকে একটি instance বানা, যার section হবে A আর teacher হবে Mr. Plumber। */
class Classroom {
  constructor(section, teacher) {
    this.students = [];
    this.section = section;
    this.teacher = teacher;
  }
}
const classroom = new Classroom('A', ' Mr. Plumber');
console.log(classroom);

/*
7. Product নামে একটা class বানা, যেখানে constructor-এর মধ্যে name, category আর stock থাকবে। তারপর নতুন একটা product বানা, যার নাম হবে Mobile, category হবে Electronics আর stock হবে 50। */
class Product {
  constructor(name, category, stock) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }
}
const product = new Product('Mobile', 'Electronics', 50);
console.log(product);

/*
8. Product নামে একটা class বানা, যেখানে constructor-এর মধ্যে name, category আর stock থাকবে। তারপর নতুন একটা product বানা, যার নাম হবে Mobile, category হবে Electronics আর stock হবে 50। যদি অবজেক্ট বানানোর সময় কেউ stock প্রোপার্টির মান না দেয়, তাহলে stock-এর ডিফল্ট মান 0 দিয়ে দিবি। */
class ProducT {
  constructor(name, category, stock = 0) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }
}
const goodProduct = new ProducT('Mobile', 'Electronics');
console.log(goodProduct);
const goodProduct1 = new ProducT('Mobile', 'Electronics', 50);
console.log(goodProduct1);

/*---------------------------------------------------------------------------------------------------
                              Method তুমি কার? ক্লাসের না আমার
--------------------------------------------------------------------------------------------------*/
/*
1. হোটেলের জন্য একটি ক্লাস বানিয়ে ফেলো। যেখানে হোটেলের নাম, রুমসংখ্যা এবং রাতে থাকার খরচ থাকবে। তারপর getName মেথডকে কল করলে হোটেলের নাম রিটার্ন করবে। */
class Hotel {
  constructor(name, numberOfRoom, cost) {
    this.name = name;
    this.numberOfRoom = numberOfRoom;
    this.cost = cost;
  }
  getName() {
    return this.name;
  }
}
const hotel1 = new Hotel('Continental', 68, 13999);
console.log(hotel1.getName());

/*
2. Employee ক্লাস বানিয়ে ফেলো, যেখানে থাকবে কর্মীর নাম, পদ এবং বেতন। getSalary বললে তার স্যালারি(বেতন) কত, সেটা রিটার্ন করবে। */
class Employee {
  constructor(name, post, salary) {
    this.name = name;
    this.post = post;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}
const employee1 = new Employee('Zabir', 'Accoutant', 25000);
console.log(employee1.getSalary());

/*
3. একটি ক্লাস লিখে ফেলো, যেটার নাম দিবি Library। এইটার ভিতরে একটি প্রোপার্টি থাকবে books নামে, আর সেই প্রোপার্টির প্রাথমিক মান হবে একটি খালি অ্যারে। এরপর addBook নামে একটি মেথড লিখবি। সে প্যারামিটার হিসেবে একটি বইয়ের নাম নিবে। তারপর books প্রোপার্টিতে সেই বই যোগ করে দিবে। আরেকটা মেথড লিখবি hasBook নামে, সে একটি প্যারামিটার নিবে। প্যারামিটারে থাকবে বইয়ের নাম। সে গিয়ে চেক করবে, যে নাম দিয়ে বই খুঁজছিস, সেই বই যদি books প্রোপার্টিতে থাকে, তাহলে সে true রিটার্ন করবে। আর না থাকলে সে false রিটার্ন করবে। */
class LibrarY {
  constructor(books = []) {
    this.books = books;
  }
  addBook(bookName) {
    this.books.push(bookName);
  }
  hasBook(IsThereTheBook) {
    return this.books.includes(IsThereTheBook);
  }
}
const library1 = new LibrarY();
library1.addBook('Rahman Arsher Upore Uthechen');
library1.addBook('Islami Aqidah');
library1.addBook('Manhajus Salaf');
library1.addBook('Fiqhus Salaf');
console.log(library1.hasBook('Rahman Arsher Upore Uthechen'));
console.log(library1);

/* 
4. এখন একটি ShoppingCart ক্লাস লিখে ফেলো, যেখানে products নামে একটি প্রোপার্টি থাকবে, আর totalPrice নামে একটি প্রোপার্টি থাকবে। যখন এই ক্লাস থেকে অবজেক্টটি বানাবি, তখন products হবে একটি খালি অ্যারে, আর totalPrice হবে 0। এরপর addToCart একটি মেথড হবে। এইটাকে কল করতে গেলে দুইটা প্যারামিটার লাগবে। একটা প্যারামিটারে থাকবে প্রোডাক্টের নাম, আরেকটা প্যারামিটারে হবে প্রোডাক্টের দাম। আর এই addToCart-কে কল করলে সে প্রোডাক্টের নামকে products নামক প্রোপার্টিতে যোগ করে দিবে। আর প্রোডাক্টের দাম totalPrice নামক প্রোপার্টির আগের ভ্যালুর সাথে যোগ করে দিবে। সবার শেষে getTotalPrice নামে আরেকটা মেথড লিখে ফেলো, যে টোটাল প্রাইস রিটার্ন করবে। */
class ShoppingCart {
  constructor(products, totalPrice) {
    this.products = [];
    this.totalPrice = 0;
  }
  addToCart(productName, price) {
    this.products.push(productName);
    this.totalPrice += price;
  }
  getTotalPrice() {
    return this.totalPrice;
  }
}
const product01 = new ShoppingCart();
product01.addToCart('Mobile', 25599);
product01.addToCart('Gold', 215000);
product01.addToCart('Silver', 220000);
console.log(product01);
const grossPrice = product01.getTotalPrice();
console.log(grossPrice);

/*---------------------------------------------------------------------------------------------------
                              আজ থেকে তুই ত্যাজ্য inheritance
--------------------------------------------------------------------------------------------------*/
/*
1. inheritance কি জিনিস ? এটা কেন দরকার ? ব্যাখা কর ? */
// ? Inheritance বা উত্তরাধিকার হলো একটি প্রোগ্রামিং কনসেপ্ট যেখানে একটি ক্লাস (child class বা subclass) আরেকটি ক্লাসের (parent class বা superclass) প্রপার্টি ও মেথডগুলো উত্তরাধিকার সূত্রে পায়। সহজভাবে বললে, যখন আমরা কোনো ক্লাস থেকে আরেকটা ক্লাস বানাই এবং পুরোনো ক্লাসের ফিচারগুলো নতুন ক্লাসে ব্যবহার করতে চাই, তখন আমরা Inheritance ব্যবহার করি। এটা দরকার হয় কারণ এতে কোড রিইউজ করা যায়—একই কাজ বারবার লিখতে হয় না, এতে সময় বাঁচে, কোড ছোট হয়, আর Maintain করা সহজ হয়। তাই Inheritance প্রোগ্রামিং-এ অনেক দরকারি ও শক্তিশালী একটি জিনিস।
/*
2. প্যারেন্ট আর চাইল্ড ক্লাসের মধ্যে সম্পর্ক কীভাবে তৈরি হয়। */
// * প্যারেন্ট আর চাইল্ড ক্লাসের মধ্যে সম্পর্ক তৈরি হয় চাইল্ড ক্লাস যখন extends বা উত্তরাধিকার (inheritance) ব্যবহারে প্যারেন্ট ক্লাসকে অনুসরণ করে। অর্থাৎ, চাইল্ড ক্লাস declare করার সময় আমরা বলে দিই যে, সে কোন প্যারেন্ট ক্লাস থেকে সব প্রপার্টি ও মেথড ‘উত্তরাধিকার’ হিসেবে পাবে। যেমন ধরো, class Dog extends Animal – এখানে Dog হলো চাইল্ড ক্লাস আর Animal হলো প্যারেন্ট ক্লাস। এই extends শব্দটাই বলে দিচ্ছে, Dog ক্লাস Animal-এর সব গুণাবলী পাবে। এর ফলে Dog ক্লাসে আমরা আলাদা করে Animal-এর name বা sound প্রপার্টি লিখতে হয় না, বরং এগুলো Dog ক্লাসে অটোমেটিক ব্যবহার করা যায়।

/*
3. বেশ কয়েক রকমের যানবাহনের কথা চিন্তা কর। Bus, Truck আর bike। প্রথমে এদের জন্য তোর ইচ্ছামতো (চিন্তা করে করে) মিনিমাম 5টা করে প্রোপার্টি যোগ কর। তারপর দেখ, কোন কোন প্রোপার্টি কমন, আর কোন কোন প্রোপার্টি আনকমন। তারপর কমন প্রোপার্টিগুলো নিয়ে একটা প্যারেন্ট ক্লাস বানিয়ে ফেল। এরপর প্যারেন্ট ক্লাসকে extends করে চাইল্ড ক্লাসের সাথে রিলেশন বিল্ড কর। তারপর সবগুলো চাইল্ড ক্লাস থেকে অবজেক্ট বানিয়ে চেক করে দেখ, কমন এবং আনকমন সব ধরনের প্রোপার্টি পাচ্ছিস কি না। */
class Transport {
  constructor(wheels, seatCapacity, fuelType) {
    this.wheels = wheels;
    this.seatCapacity = seatCapacity;
    this.fuelType = fuelType;
  }
}

class Bus extends Transport {
  constructor(wheels, seatCapacity, fuelType, hasAC, routeNumber) {
    super(wheels, seatCapacity, fuelType);
    this.hasAC = hasAC;
    this.routeNumber = routeNumber;
  }
}

class Truck extends Transport {
  constructor(wheels, seatCapacity, fuelType, containerType, driverCabin) {
    super(wheels, seatCapacity, fuelType);
    this.containerType = containerType;
    this.driverCabin = driverCabin;
  }
}

class Bike extends Transport {
  constructor(wheels, seatCapacity, fuelType, hasCarrier, handleType) {
    super(wheels, seatCapacity, fuelType);
    this.hasCarrier = hasCarrier;
    this.handleType = handleType;
  }
}

const myBus = new Bus(6, 40, 'diesel', true, '15B');
console.log(myBus);

const myTruck = new Truck(8, '15 tons', 'diesel', 'closed', true);
console.log(myTruck);

const myBike = new Bike(2, 2, 'petrol', true, 'sport');
console.log(myBike);

/*
4. Animal, Bird আর Fish নিয়ে চিন্তা কর। প্রত্যেকের জন্য মিনিমাম 5টা করে প্রোপার্টি বানিয়ে দেখ, কোনগুলো কমন। কমন প্রোপার্টিগুলো Parent Class-এ রাখ, আর আনকমনগুলো Child Class-এ। সবগুলো ক্লাস থেকে অবজেক্ট তৈরি করে প্রোপার্টিগুলো ঠিকঠাক কাজ করছে কি না, চেক কর। */
class AnimalWorld {
  constructor(name, habitat) {
    this.name = name;
    this.habitat = habitat;
  }
}

class Animal extends AnimalWorld {
  constructor(name, habitat, diet, movement, bodyCovering, reproduction) {
    super(name, habitat);
    this.diet = diet;
    this.movement = movement;
    this.bodyCovering = bodyCovering;
    this.reproduction = reproduction;
  }
}

class Bird extends AnimalWorld {
  constructor(
    name,
    habitat,
    wings,
    beakType,
    feathersColor,
    laysEggs,
    nestType
  ) {
    super(name, habitat);
    this.wings = wings;
    this.beakType = beakType;
    this.feathersColor = feathersColor;
    this.laysEggs = laysEggs;
    this.nestType = nestType;
  }
}

class Fish extends AnimalWorld {
  constructor(name, fins, gills, scales, coldBlooded, habitat) {
    super(name, habitat);
    this.fins = fins;
    this.gills = gills;
    this.scales = scales;
    this.coldBlooded = coldBlooded;
  }
}

const lion = new Animal(
  'Lion',
  'Savanna',
  'Carnivore',
  'Run',
  'Fur',
  'Live birth'
);
const eagle = new Bird('Eagle', true, 'Hooked', 'Brown', true, 'Cliff nest');
const salmon = new Fish('Salmon', 4, true, true, true, 'River');
console.log(lion);
console.log(eagle);
console.log(salmon);

/*
5. Furniture ক্লাস বানিয়ে তার চাইল্ড হিসেবে Chair আর Table তৈরি কর। কমন প্রোপার্টিগুলো Parent-এ রাখ। তারপর Chair আর Table-এর আলাদা আলাদা প্রোপার্টি আর মেথড যোগ কর। */

class Furniture {
  constructor(material, color, price) {
    this.material = material;
    this.color = color;
    this.price = price;
  }
}

class Chair extends Furniture {
  constructor(material, color, price, hasArmrest, legs) {
    super(material, color, price);
    this.hasArmrest = hasArmrest;
    this.legs = legs;
  }
}

class Table extends Furniture {
  constructor(material, color, price, shape, numberOfSeats) {
    super(material, color, price);
    this.shape = shape;
    this.numberOfSeats = numberOfSeats;
  }
}

const officeChair = new Chair('Leather', 'Black', 4500, true, 5);
const diningTable = new Table('Wood', 'Brown', 8500, 'Rectangle', 6);

console.log('Chair:', officeChair);
console.log('Table:', diningTable);

/*
6. পোষা প্রাণীদের নিয়ে কাজ কর। Dog, Cat আর Parrot - এর আলাদা ক্লাস বানা। আগে Parent ক্লাস বানিয়ে কমন ফিচারগুলো সেখান থেকে ইনহেরিট কর। */
class PetAnimal {
  constructor(name, age, color, sound, isFriendly) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.sound = sound;
    this.isFriendly = isFriendly;
  }
}
class Dog extends PetAnimal {
  constructor(name, age, color, sound, isFriendly, breed) {
    super(name, age, color, sound, isFriendly);
    this.breed = breed;
  }
}

class Cat extends PetAnimal {
  constructor(name, age, color, sound, isFriendly, likesMilk) {
    super(name, age, color, sound, isFriendly);
    this.likesMilk = likesMilk;
  }
}

class Parrot extends PetAnimal {
  constructor(name, age, color, sound, isFriendly, canTalk) {
    super(name, age, color, sound, isFriendly);
    this.canTalk = canTalk;
  }
}

const myDog = new Dog('Rocky', 3, 'Brown', 'Woof!', true, 'Labrador');
const myCat = new Cat('Misty', 2, 'White', 'Meow!', true, true);
const myParrot = new Parrot('Polly', 1, 'Green', 'Squawk!', true, true);

console.log(myDog);
console.log(myCat);
console.log(myParrot);

/*
7. DRY প্রিঞ্চিপাল উদাহরণসহ ব্যাখা কর?  */
//! DRY মানে হলো "Don't Repeat Yourself" — অর্থাৎ, কোডে একই কাজ বারবার না লিখে একটা জায়গায় লিখে সেটিকে বারবার ব্যবহার করা। DRY ব্যবহারে কোড ছোট হয়, পরিষ্কার হয়, Maintain করা সহজ হয়। একই কাজ বারবার লিখলে ভুল হওয়ার সুযোগ বাড়ে, তাই DRY মেনে কোড লেখা ভালো প্র্যাকটিস।

/*---------------------------------------------------------------------------------------------------
                              Prototypical chain- এর সিক্রেট রিলেশন
--------------------------------------------------------------------------------------------------*/
/*
1. জাভাস্ক্রিপ্ট ইনহেরিটেন্স কীভাবে কাজ করে ? */
//~ জাভাস্ক্রিপ্টে ইনহেরিটেন্স প্রোটোটাইপ (Prototype) ব্যবস্থার মাধ্যমে কাজ করে। একটি অবজেক্ট বা ক্লাস অন্য একটি অবজেক্ট বা ক্লাস থেকে প্রপার্টি ও মেথড উত্তরাধিকার (inherit) করে।

/*
2. প্রোটোটাইপিক্যাল ইনহেরিটেন্স কী জিনিস? */
//^ প্রোটোটাইপিক্যাল ইনহেরিটেন্সনে একটি অবজেক্ট আরেকটি অবজেক্টের প্রপার্টি (বৈশিষ্ট্য) ও মেথড (কার্যক্ষমতা) ধার করে নেয়, এবং এটি ঘটে প্রোটোটাইপ চেইন নামক একটি ধারার মাধ্যমে। জাভাস্ক্রিপ্টে প্রতিটি অবজেক্টের পিছনে একটি [[Prototype]] লুকানো থাকে (ES6 এ একে __proto__ বলেও দেখা যায়)। এই [[Prototype]] হলো আরেকটি অবজেক্টের রেফারেন্স। যখন আমরা কোনো প্রপার্টি বা মেথড কল করি, তখন জাভাস্ক্রিপ্ট প্রথমে সেটি সেই অবজেক্টের নিজের মধ্যে খোঁজে। যদি না পায়, তাহলে তার [[Prototype]] অবজেক্টে খোঁজে, তারপর আবার তার প্রোটোটাইপে — এভাবে একটার পর একটা খুঁজে যেতে থাকে যতক্ষণ না null পৌঁছায়। এই ধারাকেই বলে প্রোটোটাইপ চেইন।

/*
3. একটা person অবজেক্ট বানিয়ে ফেল, যেটাতে শুধু name প্রোপার্টি আছে। এখন চেক কর, এর প্রোটোটাইপে কিছু আছে কি না। থাকলে সেখান থেকে যেকোনো একটা মেথড ইউজ করে দেখ, কী আউটপুট দেখায়। */
const person = { name: 'tufayil' };
console.log(Object.getPrototypeOf(person));
console.log(person.hasOwnProperty('name'));

/*
4. তুই student নামে একটা অবজেক্ট বানাইলি। এই অবজেক্টের মধ্যে কোনো toString নামে মেথড লিখলি না। তাহলে তুই কি student.toString() ইউজ করতে পারবি? কেন পারবি? */
const student = {
  id: 1010,
  class: 12,
};
console.log(student.toString()); //& হ্যাঁ, ইউজ করা যাবে। কারণ: student অবজেক্টের মধ্যে toString মেথড না থাকলেও, জাভাস্ক্রিপ্ট Object.prototype থেকে সেটা ইনহেরিট করে নেয়।
