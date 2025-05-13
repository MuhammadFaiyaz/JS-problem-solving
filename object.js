// Object-এর অবজেকশন

let teacher = {
  Name: 'Murad',
  subject: 'English',
  age: 39,
  home_address: 'ProfessorPara, Chandpur',
  income: 45000,
};

let tree = {
  Name: 'mango',
  height: '30 feet',
  age: 30, //in years
  fruit_name: 'mango',
};

let man = {
  Name: 'Abu Bakar',
  age: 21,
  className: 'honors 1st year',
  subject: 'Economy',
  college: 'Chandpur Govt. College',
};

let father = {
  Name: 'Mohammad Zakir Hossain',
  proffession: 'farmer',
  age: 58,
  children: 2,
};

let motorbike = {
  brandName: 'Yamaha',
  tireNumber: 2,
  maxSpeed: 180, // km/hr
  price: 250000, // tk.
  color: 'Blue',
};

let bird = {
  Name: 'parrot',
  color: 'green',
  food: 'seeds',
};

let laptop = {
  brand: 'Dell',
  processor: 'intel core i5',
  ram: '4gb',
  price: 17500, // tk.
  displaySize: '15.6 inch',
};

// ঘরের ভিতর ঘর, মশা আমার পর

let player = {
  name: 'Tanzim Hasan Sakib',
  age: 25,
  sports: 'cricket',
  team: 'bangladesh',
};
console.log(player.team);

let laptOp = {
  brand: 'Dell',
  price: 17500, // tk.
  hardDisc: '64Gb SSD',
  ram: '4gb',
  screenSize: '15.6 inch',
};
console.log(laptOp.screenSize);

let favPlace = {
  name: "Cox's Bazar",
  distance: '400km',
  popularity: 'high',
};
console.log(favPlace['popularity']);

let phone = {
  brand: 'Nokia',
  color: 'black',
  price: 5000,
};
console.log(phone['price']);

let library = {
  name: 'Public Library',
  location: 'Dhaka',
  books: 5000,
};
console.log(library.location);

let movie = {
  title: 'Inception',
  director: 'Nolan',
  rating: 9,
};
console.log(movie['rating']);

let college = {
  name: 'ndc',
  established: 1949,
  group: ['Science', 'Arts', 'Commerce'],
};
console.log(college.group[1]);

let family = {
  father: {
    Name: 'Mohammad Zakir Hossain',
    age: 58,
    proffession: 'farmer',
  },
  mother: {
    Name: 'Atika',
    age: 48,
    proffession: 'homemaker',
  },
};
let fatherAge = family.father.age;
let motherAge = family.mother.age;
let sumOfAge = fatherAge + motherAge;
console.log(sumOfAge);

// জোড়ায় জোড়ায় entries কর

let book = {
  name: 'Sahih Al Bukhari',
  author: 'Imam Bukhari',
  price: 2800,
};
let objEnt = Object.entries(book);
console.log(objEnt);

const article = {
  title: 'Learning js',
  category: 'Programming',
};
let articleKeys = Object.keys(article);
let checkArticle = articleKeys.includes('author');
console.log(checkArticle);

const Laptop = {
  brand: 'Dell',
  model: 'Inspiron',
  price: 45000,
};
for (const key in Laptop) {
  const value = Laptop[key];
  console.log(key, value);
}

const Phone = {
  brand: 'Samsung',
  model: 'Galaxy S21',
  price: 85000,
};
let PhoneKey = Object.keys(Phone);
for (const key of PhoneKey) {
  console.log(key, Phone[key]);
}

let bike = {
  brand: 'Hero',
  price: 120000,
  model: 'Splendor',
};
let bikeValue = Object.values(bike);
console.log(bikeValue);

const books = {
  book1: 'Harry Potters',
  book2: 'The Hobbit',
  book3: 'Game of Thrones',
};
for (const key in books) {
  console.log(books[key]);
}

const Numbers = { a: 10, b: 20, c: 30, d: 40 };
let sum_Of_Numbers = 0;
let numbersValue = Object.values(Numbers);
for (const element of numbersValue) {
  sum_Of_Numbers += element;
  console.log(sum_Of_Numbers);
}

const Player = {
  name: 'Messi',
  team: 'Argentina',
  goals: 91,
};
console.log(Object.values(Player));

const building = {
  floors: 10,
  address: {
    street: 'Main Road',
    city: 'Dhaka',
  },
  type: 'commercial',
};
for (const key in building) {
  console.log(key, building[key]);
}

// Freeze-এ seal মারা

let headphone = {
  brand: 'Sony',
  price: 3000,
  color: 'red',
};
Object.freeze(headphone);
headphone.warrenty = '13 month';
console.log(headphone); // remain unchanged

let PLAYER = {
  name: 'Messi',
  goals: 800,
  club: 'Inter Miami',
};
Object.freeze(PLAYER);
PLAYER.age = 56;
console.log(PLAYER);

const Book = {
  title: 'Harry Potter',
  author: 'JK Rowling',
  pages: 500,
};
Object.seal(Book);
Book.author = 'Faiyaz';
console.log(Book);

let gadjet = {
  name: 'iPhone',
  price: 120000,
  color: 'black',
};
delete gadjet.price;
console.log(gadjet);

let animal = {
  name: 'Tiger',
  location: 'Sundarban',
};
Object.freeze(animal);
animal.location = 'Dhaka';
console.log(animal);

const food = {
  name: 'Pizza',
  price: 500,
  size: 'Large',
};
Object.seal(food);
food.price = 400;
console.log(food);
