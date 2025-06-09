/*---------------------------------------------------------------------------------------------------
                                Destructuring ভাংচুর চানাচুর
--------------------------------------------------------------------------------------------------*/
/*
1. অবজেক্ট থেকে brand প্রোপার্টি আলাদা কর। const product = { name: "Laptop", price : 50000, brand: "Dell" }; */
const product = { name: 'Laptop', price: 50000, brand: 'Dell' };
const { brand } = product;
console.log(brand); // Output: Dell

/*
2. Item অবজেক্ট থেকে phone এবং price প্রোপার্টি ডিস্ট্রাকচারিং কর। const item = { name:
"Mobile", price: 20000, phone: "Samsung" }। */
const Item = { name: 'Mobile', price: 20000, phone: 'Samsung' };
const { price, phone } = Item;
console.log(price, phone); // Output: 20000 Samsung

/*
3. অ্যারে থেকে প্রথম দুইটা উপাদান বের কর। const colors = ["red", "blue", "green", "yellow"]; */
const colors = ['red', 'blue', 'green', 'yellow'];
const [elem1, elem2] = colors;
console.log(elem1, elem2); // Output: red blue

/*
4. তিনটা সংখ্যার একটা অ্যারে থেকে `destructuring` করে সেকেন্ড সংখ্যাটা আলাদা করে second নামক ভেরিয়েবলে রাখ। */
const numbers = [10, 20, 30];
const [, second, ,] = numbers;
console.log(second); // Output: 20

/*
5. অ্যারের প্রথম এবং শেষ উপাদানকে destructuring করে two এবং eight নামের ভেরিয়েবলে রাখ। const digits = [2, 4, 6, 8]। */
const digits = [2, 4, 6, 8];
const [two, eight] = digits;
console.log(two, eight); // Output: 2 8

/*
6. ফাংশন রিটার্ন থেকে ডিস্ট্রাকচারিং করে প্রথম এবং দ্বিতীয় ভ্যালু আলাদা কর। function multiply(a, b) { return [a * 3, b * 3]; }। */
function multiply(a, b) {
  return [a * 3, b * 3];
}
const [resultA, resultB] = multiply(3, 4);
console.log(resultA);
console.log(resultB);

/*
7. person অবজেক্ট থেকে name এবং city আলাদা কর। আর phone না থাকলে ডিফল্ট ভ্যালু N/A সেট কর। const person = { name: "Rahim", city: "Dhaka" }।*/
const person = { name: 'Rahim', city: 'Dhaka' };
const { name, city, Phone = 'N/A' } = person;
console.log(name, city, Phone); // Output: Rahim Dhaka N/A

/*
8. teacher অবজেক্ট থেকে name এবং profession - এর ভ্যালু বের কর, যেখানে profession - এর নাম alias
হিসেবে job রাখ। const teacher = { name: "Maria", profession: "Teacher" }। */
const teacher = { name: 'Maria', profession: 'Teacher' };
const { name: alias, profession: job } = teacher;
console.log(alias, job); // Output: Maria Teacher

/*---------------------------------------------------------------------------------------------------
                                বাকিরা Rest এ আছে
--------------------------------------------------------------------------------------------------*/
/*
1. একটা product অবজেক্ট আছে const product = { name: "Laptop", price : 50000, brand: "Dell" }; এইটা থেকে name বাদে বাকি প্রোপার্টিগুলা আলাদা একটা অবজেক্টে রাখ।*/
const Product = {
  Name: 'Laptop',
  price: 50000,
  brand: 'Dell',
};
const { name: Name, ...rest } = Product;
console.log(Name); // Output: Laptop
console.log(rest); // Output: { price: 50000, brand: 'Dell' }

/*
2. const project = { id: 101, title : " Web App", budget: 3000, client: "Tech Corp" }; এখানে title বাদে বাকি প্রোপার্টিগুলা আলাদা একটা অবজেক্টে রাখ। */
const project = {
  id: 101,
  title: 'Web App',
  budget: 3000,
  client: 'Tech Corp',
};
const { title, ...other } = project;
console.log(title); // Output: Web App
console.log(other); // Output: { id: 101, budget: 3000, client: 'Tech Corp' }

/*
3. const programmer = { name: "Sophia", language: "JavaScript", experience : 5,
specialty: "Frontend", tools: "React" }; এখানে language আর specialty আলাদা প্রোপার্টি হিসেবে রেখে বাকিগুলা details নামে একটা অবজেক্টে রাখ। */
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

/*
4. একটা সংখ্যার array আছে। [10, 20, 3, 30, 300, 3000] এইটা থেকে প্রথম দুইটা উপাদান বাদে বাকিগুলা আলাদা আরেকটা array-এর মধ্যে রাখ ।*/
const number = [10, 20, 3, 30, 300, 3000];
const [first, Second, ...restNumbers] = number;
console.log(first);
console.log(Second); // Output: 20
console.log(restNumbers); // Output: [3, 30, 300, 3000]

/*
5. একটা function লেখ, যেটা দুইটা প্যারামিটার বাদে বাকিসব প্যারামিটারকে রেস্ট অপারেটর দিয়ে ধরে রাখবে। ফাংশনটি সেই বাকি প্যারামিটারগুলোর যোগফল রিটার্ন করবে।*/
function SumOfRestOperator(a, b, ...rest) {
  const sum = rest.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
console.log(SumOfRestOperator(1, 2, 3, 4, 5)); // Output: 1 2 [3, 4, 5]

/*
6. একটা ফাংশন লেখ, যে সব প্যারামিটারকে রেস্ট অপারেটর দিয়ে একটা array-তে রাখবে, তারপর আর্গুমেন্টগুলো যোগ করবে। ফাংশনটি array-এর উপাদানগুলোর গড় রিটার্ন করবে। */
function newFunction(...array) {
  let sum = array.reduce((total, num) => total + num, 0);
  return sum / array.length;
}
console.log(newFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

/*---------------------------------------------------------------------------------------------------
                                পাউরুটির উপর মাখনের Spread
--------------------------------------------------------------------------------------------------*/
/*
1. নতুন একটা অ্যারে বানা, যেখানে প্রথম উপাদান হবে "variable", তারপরের উপাদানগুলো আসবে const technologies = ["Condition", "array", "loop"], অ্যারে Spread Operator দিয়ে কপি করে। */
const technologies = ['Condition', 'array', 'loop'];
const newTechnologies = ['variable', ...technologies];
console.log(technologies);
console.log(newTechnologies);

/*
2. myFruits নামে নতুন একটা অ্যারে তৈরি কর, যেখানে const fruits = ["Apple", "Banana", "Mango"], এই অ্যারেটার উপাদানগুলো থাকবে আর শেষে papaya, orange থাকবে। */
const fruits = ['Apple', 'Banana', 'Mango'];
const myFruits = [...fruits, 'papaya', 'orange'];
console.log(fruits);
console.log(myFruits);

/*
3. তিনটা অ্যারে আছে const frontEnd = ["JavaScript"], const backEnd = ["Node.js"], const database = ["MongoDB"], এগুলোকে Spread Operator দিয়ে একটাতে একত্রিত কর। */
const frontEnd = ['JavaScript'];
const backEnd = ['Node.js'];
const database = ['MongoDB'];
const fullStack = [...frontEnd, ...backEnd, ...database];
console.log(fullStack);

/*
4. const website = { name: "MySite", type: "e-commerce", status: "active" } এই অবজেক্টে নতুন প্রোপার্টি theme: "dark" যোগ করে নতুন অবজেক্ট তৈরি কর এবং প্রিন্ট কর। */
const website = { name: 'MySite', type: 'E-commerce', status: 'active' };
const updatedWebsite = { ...website, theme: 'dark' };
console.log(website);
console.log(updatedWebsite);

/*
5. const young = { name: "Arif", age: 30, country: "B Baria" } এই অবজেক্টের একটি কপি তৈরি কর এবং country বাদে বাকিসব প্রোপার্টি নতুন অবজেক্টে রেখে প্রিন্ট কর।*/
const young = { name: 'Arif', age: 30, country: 'B Baria' };
const { country, ...others } = young;
console.log(others);

/*
6. const car = { make: "Toyota", model: "Corolla", year: 2020 } এই অবজেক্টের একটি কপি তৈরি কর এবং year আপডেট করে 2032 করে নতুন অবজেক্ট তৈরি কর।*/
const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
const updateCar = { ...car, year: 2032 };
console.log(car);
console.log(updateCar);

/*---------------------------------------------------------------------------------------------------
                                Export-import বিজনেস
--------------------------------------------------------------------------------------------------*/

/*
1. export এবং import -এর মধ্যে পার্থক্য কী ? উভয় কীভাবে কাজ করে ? */
/* export হচ্ছে JavaScript-এর একটা কিওয়ার্ড, যেটা দিয়ে আমি একটা ফাইল (module) থেকে কোনো ভেরিয়েবল, ফাংশন বা ক্লাস বাইরে পাঠাতে পারি, যেন অন্য ফাইল থেকে সেটা ব্যবহার করা যায়।

math.js (ফাইল)
export const add = (a, b) => a + b; //  add ফাংশনকে আমরা বাইরের ফাইলের জন্য এক্সপোর্ট করেছি।

import হচ্ছে এমন একটি কিওয়ার্ড, যেটা দিয়ে আমি অন্য কোনো ফাইল থেকে export করা জিনিসগুলো আমার ফাইলে এনে ব্যবহার করতে পারি। 

 app.js (ফাইল)
import { add } from './math.js';
console.log(add(3, 2)); // Output: 5

*/

/*
2. default export কী ? এর মাধ্যমে ইমপোর্ট করার সময় কী সুবিধা হয় ?*/
/*
default export হলো এমন একটি export পদ্ধতি যেখানে আমি একটি ফাইলে মাত্র একটি ফাংশন, অবজেক্ট, ভেরিয়েবল বা ক্লাসকে "default" হিসেবে এক্সপোর্ট করতে পারি। এক ফাইলে শুধু একটিই default export থাকতে পারে। এটি ইমপোর্ট করার সময় {} দিতে হয় না।

 */

/*
3. as কি - ওয়ার্ড কীভাবে নাম পরিবর্তন করতে সাহায্য করে ?*/

/**as হচ্ছে JavaScript - এর import ও export এ ব্যবহৃত একটি কিওয়ার্ড, যার মাধ্যমে আমরা কোনো ভেরিয়েবল, ফাংশন, বা ক্লাসের নাম পরিবর্তন করে ব্যবহার করতে পারি।

ধরি, একটা ফাইলে add নামে কিছু এক্সপোর্ট করা আছে। কিন্তু আমি চাইছি আমার ফাইলে ওটা sum নামে ব্যবহার করতে।

math.js:
export const add = (a, b) => a + b;

(another file) app.js
import { add as sum } from './math.js';
console.log(sum(2, 3)); // Output: 5
এখানে add নামটা ইমপোর্ট করে আমরা sum নামে ব্যবহার করেছি as দিয়ে।

এক্সপোর্ট করার সময়ও নাম পরিবর্তন করতে পারি।
math.js:
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

export { add as addition, sub as subtraction };

(another file) app.js
import { addition, subtraction } from './math.js';

console.log(addition(10, 5)); // Output: 15

 */

/*
4. নাম দিয়ে export আর Default export -এর মধ্যে পার্থক্য কী ?*/
/**
 * কখনো ইচ্ছামতো নাম দিয়ে ইম্পোরট করতে চাইলে যে ফাইল থেকে ইম্পোরট করবো হয় এক্সপোর্ট এর পর ডিফল্ট use করবি (তখন ইচ্ছামতো নাম use করতে পারবো এবং {} use করাও লাগবে না।)
 */

/*
5. এক ফাইল থেকে একাধিক default export কি সম্ভব ? কিভাবে সম্ভব ? */
/** না সম্ভব নয়। */
