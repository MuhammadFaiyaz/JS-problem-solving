// Destructuring ভাংচুর চানাচুর

const product = { name: 'Laptop', price: 50000, brand: 'Dell' };
const { brand } = product;
console.log(brand); // Output: Dell

const Item = { name: 'Mobile', price: 20000, phone: 'Samsung' };
const { price, phone } = Item;
console.log(price, phone); // Output: 20000 Samsung

const colors = ['red', 'blue', 'green', 'yellow'];
const [elem1, elem2] = colors;
console.log(elem1, elem2); // Output: red blue

const numbers = [10, 20, 30];
const [, second, ,] = numbers;
console.log(second); // Output: 20

const digits = [2, 4, 6, 8];
const [two, eight] = digits;
console.log(two, eight); // Output: 2 8

function multiply(a, b) {
  return [a * 3, b * 3];
}
const [resultA, resultB] = multiply(3, 4);
console.log(resultA);
console.log(resultB);

const person = { name: 'Rahim', city: 'Dhaka' };
const { name, city, Phone = 'N/A' } = person;
console.log(name, city, Phone); // Output: Rahim Dhaka N/A

const teacher = { name: 'Maria', profession: 'Teacher' };
const { name: alias, profession: job } = teacher;
console.log(alias, job); // Output: Maria Teacher

// বাকিরা Rest এ আছে

const Product = {
  Name: 'Laptop',
  price: 50000,
  brand: 'Dell',
};
const { name: Name, ...rest } = Product;
console.log(Name); // Output: Laptop
console.log(rest); // Output: { price: 50000, brand: 'Dell' }

const project = {
  id: 101,
  title: 'Web App',
  budget: 3000,
  client: 'Tech Corp',
};
const { title, ...other } = project;
console.log(title); // Output: Web App
console.log(other); // Output: { id: 101, budget: 3000, client: 'Tech Corp' }

const programmer = {
  name: 'Sophia',
  language: ' JavaScript',
  experience: 5,
  speciality: 'Frontend',
  tools: ' React',
};
const { language, speciality, ...details } = programmer;
console.log(language); // Output: JavaScript
console.log(speciality); // Output: Frontend
console.log(details); // Output: { name: 'Sophia', experience: 5, tools: ' React' }

const number = [10, 20, 3, 30, 300, 3000];
const [first, Second, ...restNumbers] = number;
console.log(first);
console.log(Second); // Output: 20
console.log(restNumbers); // Output: [3, 30, 300, 3000]

function SumOfRestOperator(a, b, ...rest) {
  const sum = rest.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
console.log(SumOfRestOperator(1, 2, 3, 4, 5)); // Output: 1 2 [3, 4, 5]

function newFunction(...array) {
  let sum = array.reduce((total, num) => total + num, 0);
  return sum / array.length;
}
console.log(newFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// পাউরুটির উপর মাখনের Spread

const technologies = ['Condition', 'array', 'loop'];
const newTechnologies = ['variable', ...technologies];
console.log(technologies);
console.log(newTechnologies);

const fruits = ['Apple', 'Banana', 'Mango'];
const myFruits = [...fruits, 'papaya', 'orange'];
console.log(fruits);
console.log(myFruits);

const frontEnd = ['JavaScript'];
const backEnd = ['Node.js'];
const database = ['MongoDB'];
const fullStack = [...frontEnd, ...backEnd, ...database];
console.log(fullStack);

const website = { name: 'MySite', type: 'E-commerce', status: 'active' };
const updatedWebsite = { ...website, theme: 'dark' };
console.log(website);
console.log(updatedWebsite);

const young = { name: 'Arif', age: 30, country: 'B Baria' };
const { country, ...others } = young;
console.log(others);

const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
const updateCar = { ...car, year: 2032 };
console.log(car);
console.log(updateCar);

// Export-import বিজনেস

import { add, Multiply } from './if_else.js';
console.log(add(5, 10));
console.log(Multiply(19, 10));
