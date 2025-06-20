/*---------------------------------------------------------------------------------------------------
                              Data তুই পালাবি কোথায়
--------------------------------------------------------------------------------------------------*/
/*
1. তোর কাছে array আছে[{ id: 1, name: 'Mukta', address: 'Chandpur' }]। তুই address প্রিন্ট করতে চাস, তাহলে প্রোগ্রাম লিখে দেখ, কিভাবে address প্রিন্ট করতে হয়। */
const array = [{ id: 1, name: 'Mukta', address: 'Chandpur' }];
console.log(array[0].address);

/*
২. একটা প্রোগ্রাম লিখ, যেখানে const library = { name: 'city library', books: [{ id: 1, title: 'JavaScript Basics', price: 300}, { id: 2, title: 'Python Essentials', price: 500}]} আছে। এবার books array থেকে দ্বিতীয় বইটির price বের কর। */
const library = {
  name: 'city library',
  books: [
    { id: 1, title: 'JavaScript Basics', price: 300 },
    { id: 2, title: 'Python Essentials', price: 500 },
  ],
};
console.log(library.books[1].price);

/*
৩. তোমার কাছে const school = { name: 'Green High', students: [{ id: 1, name: 'Samiha'}, { id: 2, name: 'Kamal'}]} নামক একটি অবজেক্ট আছে। এবার students array থেকে প্রথম শিক্ষার্থীর name প্রিন্ট করতে একটি প্রোগ্রাম লিখ। */
const school = {
  name: 'Green High',
  students: [
    { id: 1, name: 'Samiha' },
    { id: 2, name: 'Kamal' },
  ],
};
console.log(school.students[0].name);

/*
৪. ধরো, একটি অবজেক্ট আছে, const shop = { items: [{ name: 'pen', stock: 100}, { name: 'notebook', stock: 50 }]}। items array থেকে notebook-এর stock বের করতে চাও, তাহলে একটি প্রোগ্রাম লিখে বের কর। */
const shop = {
  items: [
    { name: 'pen', stock: 100 },
    { name: 'notebook', stock: 50 },
  ],
};
console.log(shop.items[1].stock);

/*
৫. const movie = { title: 'Inception', director: { name: 'Nolan', age: 50 }, rating: 8.8 } নামক অবজেক্টে তুমি director-এর name প্রিন্ট করতে চাও। কীভাবে করবে? */
const movie = {
  title: 'Inception',
  director: { name: 'Nolan', age: 50 },
  rating: 8.8,
};
console.log(movie.director.name);

/* 
৬. একটা প্রোগ্রাম লিখ, যেখানে const game = { name: 'football', players: [{ id: 1, name: 'Lionel Messi'}, { id: 2, name: 'Cristiano Ronaldo'}]}। অবজেক্টে প্রথম player-এর name প্রিন্ট করবে। */
const game = {
  name: 'football',
  players: [
    { id: 1, name: 'Lionel Messi' },
    { id: 2, name: 'Cristiano Ronaldo' },
  ],
};
console.log(game.players[0].name);

/*
৭. const vehicle = { type: 'car', features: { color: 'red', brand: { name: 'Toyota',model:'Corolla'}}}; brand এর name প্রিন্ট করতে একটি প্রোগ্রাম লিখ। */
const vehicle = {
  type: 'car',
  features: { color: 'red', brand: { name: 'Toyota', model: 'Corolla' } },
};
console.log(vehicle.features.brand.name);

/*---------------------------------------------------------------------------------------------------
                              নালিশ দিচ্ছে  Nullish Coalescing
--------------------------------------------------------------------------------------------------*/
/*
1. Let x = null; এর ক্ষেত্রে x ??= 75 ব্যবহার করলে আউটপুট কী হবে? */
let x = null;
let y = (x ??= 75);
console.log(y);

/*
2. একটা product অবজেক্টে stock নামের প্রোপার্টি নাই; Nullish Coalescing দিয়ে stock-এর ডিফল্ট মান 0 সেট কর। */
const product = {
  name: 'Laptop',
  price: 50000,
  // এখানে stock নেই
};
console.log(product.stock ?? 0);

/*
3. productDetails অবজেক্টে discount ভেরিয়েবলের মান falsy কোনো কিছু হলে সেটার মান 10 সেট করার কোড লেখ। */
const productDetails = {
  discount: 0, // এটা falsy
};

const finalDiscount = productDetails.discount || 10;
console.log(finalDiscount);

/*
4. Optional Chaining দিয়ে vehicle অবজেক্টে engine নামের প্রোপার্টি চেক কর এবং ডিফল্ট মান 'Engine info missing' যোগ কর। */
const Vehicle = {
  brand: 'Toyota',
  model: 'Corolla',
};

console.log(vehicle.engine ?? 'Engine info missing'); // Output: undefined

/*
5. Optional Chaining দিয়ে restaurant অবজেক্টে menu নামে প্রোপার্টি রিড কর এবং সেট না থাকলে 'Menu not available' রিটার্ন কর। */
const restaurant = {
  name: 'Food Heaven',
  location: 'Dhaka',
  open: true,
  rating: 4.5,
};
console.log(restaurant.menu ?? 'Menu not available');

/*
6. profile অবজেক্টে social অবজেক্টে twitter নামের প্রোপার্টি চেক কর Optional Chaining দিয়ে। twitter না থাকলে 'Twitter handle not available' প্রিন্ট কর। */
const profile = {
  name: 'Faiyaz',
  age: 25,
  email: 'faiyaz@example.com',
};
console.log(profile?.social?.twitter ?? 'Twitter handle not available');

/*---------------------------------------------------------------------------------------------------
                              শর্টকার্টে শর্ট সার্কিট 
--------------------------------------------------------------------------------------------------*/
/*
1. একটি ভেরিয়েবল a-কে 59 সেট করে এক বার post-increment এবং এক বার pre-increment করে দেখ, আউটপুট কী হয়। */
let a = 59;
let c = a++;
let b = ++a;
console.log(b);
console.log(c);

/*
2. oranges ভেরিয়েবলের প্রাথমিক মান 100। oranges-কে 15 দিয়ে ভাগ কর এবং এই শর্টকাট অপারেটর ব্যবহার কর। */
let oranges = 100;
console.log((oranges /= 15));

/*
3. একটি ভেরিয়েবল mango = 20। mango &&= 10 ব্যবহার করলে ভেরিয়েবলের নতুন মান কী হবে, কেন? */
let mango = 20;
mango &&= 10;
console.log(mango); // ? mango-এর নতুন মান হবে 10। এর কারণ হলো &&= অপারেটরটি (লজিক্যাল AND অ্যাসাইনমেন্ট) এমনভাবে কাজ করে যে, variable যদি ট্রুথি হয় তাহলে ভ্যলু পরিবর্তন হয়।

/*
4. bananas ভেরিয়েবলের মান 50। এর সাথে 4 গুণ করে সেই মানটি নিজেই ধরে রাখতে হলে কোন শর্টকাট অপারেটর ব্যবহার করবি? */
let bananas = 50;
console.log((bananas *= 4)); // *= অপারেটরটি ব্যবহার করতে হবে।

/*
5. একটি truthy ভেরিয়েবল grapes = 19 দিয়ে ||= অপারেটরের ব্যবহার করলে এর মান কী হবে এবং কেন? */
let grapes = 19;
grapes ||= 78;
console.log(grapes); // ! grapes-এর মান অপরিবর্তিত থাকে। এর কারণ হলো ||= (লজিক্যাল OR অ্যাসাইনমেন্ট) অপারেটরটি কেবলমাত্র তখনই ভ্যলু পরিবর্তন করে যখন বাম দিকের অপারেন্ডটি "falsy" হয়। যেহেতু 19 একটি "truthy" মান, তাই শর্তটি পূরণ হয় না এবং grapes-এর মান অপরিবর্তিত থাকে।

/*
6. apples = apples - 10 এই স্টেটমেন্টটি শর্টকাট অপারেটর ব্যবহার করে লেখ। */
let apples = 10;
apples -= 10;
console.log(apples);

/*
7. let price = undefined; এবং price ||= 90 ব্যবহার করে প্রমাণ কর যে, price-এর মান পরিবর্তিত হয়েছে।*/
let price = undefined;
price ||= 90;
console.log(price);

/*
8. একটি falsy ভেরিয়েবল tomato = 0। এতে mango &&= 5 ব্যবহার করলে আউটপুট কী হবে এবং কেন? */
let tomato = 0;
tomato &&= 5;
console.log(tomato); // ^ 0 একটি falsy value, তাই tomato &&= 5 এক্সিকিউট করবে না এবং tomato এর মান আগের মতোই থাকবে।

/*
9. apples = 15 হলে, apples %= 6 ব্যবহার করলে আউটপুট কত হবে এবং সেট কেন তত হবে? */
apples = 15;
apples %= 6;
console.log(apples); // & output is 3|  ১৫ কে ৬ দিয়ে ভাগ করলে ভাগশেষ (remainder) হয় ৩, তাই apples %= 6 করলে apples এর নতুন মান হবে 3।
