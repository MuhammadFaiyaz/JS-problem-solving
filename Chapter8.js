/*---------------------------------------------------------------------------------------------------
                                  Object-এর অবজেকশন
--------------------------------------------------------------------------------------------------*/
/*
1. তুই teacher নামে একটা অবজেক্ট বানা। এইটার মধ্যে টিচারের নাম থাকবে। উনি কোন সাবজেক্ট পড়ান, সেটার নাম থাকবে; স্যারের বয়স, বাসা কোথায়— এই টাইপের পাঁচটা জিনিস থাকবে। */
let teacher = {
  Name: 'Murad',
  subject: 'English',
  age: 39,
  home_address: 'ProfessorPara, Chandpur',
  income: 45000,
};

/*
2. গাছ (tree) নামে একটা object তৈরি কর, যার মধ্যে থাকবে, এইটা কী গাছ, উচ্চতা কেমন, বয়স কত, ফলের নাম কী ইত্যাদি। */
let tree = {
  Name: 'mango',
  height: '30 feet',
  age: 30, //in years
  fruit_name: 'mango',
};

/*
3. তোর আশেপাশে কোনো প্রাণী থাকলে (গরু, বিড়াল, কুকুর, ইঁদুর, তেলাপোকা, মশা, মাছি, পিঁপড়া, টিকটিকি, মানুষ বা অন্য কোনো প্রাণী থাকলে), সেটার জন্য একটা অবজেক্ট লিখে ফেল। */
let man = {
  Name: 'Abu Bakar',
  age: 21,
  className: 'honors 1st year',
  subject: 'Economy',
  college: 'Chandpur Govt. College',
};

/*
4. তোর আব্বুর জন্য father নামে একটা অবজেক্ট বানিয়ে ফেল। সেখানে উনার নাম, পেশা, বয়স, সন্তানের সংখ্যা ইত্যাদি তথ্য দিয়ে ফেল। */
let father = {
  Name: 'Mohammad Zakir Hossain',
  proffession: 'farmer',
  age: 58,
  children: 2,
};

/*
5. একটা বাইক(motorbike) নিয়ে object বানা। সেখানে ব্রান্ডের নাম, টায়ারের সংখ্যা, রং, সর্বোচ্চ গতি আর দাম থাকবে। */
let motorbike = {
  brandName: 'Yamaha',
  tireNumber: 2,
  maxSpeed: 180, // km/hr
  price: 250000, // tk.
  color: 'Blue',
};

/*
6. একটি পাখি (bird) অবজেক্ট তৈরি কর, যেখানে পাখির নাম, রং, খাদ্য ইত্যাদি প্রপার্টি থাকবে। */
let bird = {
  Name: 'parrot',
  color: 'green',
  food: 'seeds',
};

/*
7. একটা laptop অবজেক্ট তৈরি কর, যেখানে থাকবে ব্রান্ডের নাম, প্রসেসর, র‍্যাম, দাম, আর ডিসপ্লের সাইজ ইত্যাদি ডাটা থাকবে। */
let laptop = {
  brand: 'Dell',
  processor: 'intel core i5',
  ram: '4gb',
  price: 17500, // tk.
  displaySize: '15.6 inch',
};

/*---------------------------------------------------------------------------------------------------
                             ঘরের ভিতর ঘর, মশা আমার পর
--------------------------------------------------------------------------------------------------*/

/*
1. তুই player অবজেক্ট তৈরি করবি। নাম, বয়স, স্পোর্টস, টিম ইত্যাদি প্রোপার্টি থাকবে। তারপর সেই অবজেক্ট থেকে dot notation দিয়ে তার টিমের নাম console কর। */
let player = {
  name: 'Tanzim Hasan Sakib',
  age: 25,
  sports: 'cricket',
  team: 'bangladesh',
};
console.log(player.team);

/*
2. একটা laptop অবজেক্ট তৈরি কর। তার brand, price, hardDisc, ram, screenSize ইত্যাদি প্রোপার্টি থাকবে। dot notation দিয়ে screenSize বের করে দেখ।*/
let laptOp = {
  brand: 'Dell',
  price: 17500, // tk.
  hardDisc: '64Gb SSD',
  ram: '4gb',
  screenSize: '15.6 inch',
};
console.log(laptOp.screenSize);

/*
3. তোর একটা প্রিয় জায়গা আছে, যার নাম favPlace। তার মধ্যে কিছু তথ্য আছে। যেমন, name: "Cox's
Bazar", distance: "400km", আর popularity: "high"। bracket notation দিয়ে popularity প্রোপার্টি console log কর। */
let favPlace = {
  name: "Cox's Bazar",
  distance: '400km',
  popularity: 'high',
};
console.log(favPlace['popularity']);

/*
4. তুই একটা phone অবজেক্ট বানাস। সেখানে brand, color, price প্রোপার্টি থাকে। ব্রান্ড দিস Nokia, কালার black আর দাম 5000। ব্র্যাকেট নোটেশন দিয়ে দাম বের কর। */
let phone = {
  brand: 'Nokia',
  color: 'black',
  price: 5000,
};
console.log(phone['price']);

/*
5. একটা library অবজেক্ট তৈরি কর। তার মধ্যে name Public Library, location Dhaka আর books: 5000 প্রোপার্টি থাকবে। dot notation দিয়ে location বের কর। */
let library = {
  name: 'Public Library',
  location: 'Dhaka',
  books: 5000,
};
console.log(library.location);

/*
6. একটা movie অবজেক্ট বানা। যার title Inception, director Nolan, rating 9। bracket notation দিয়ে rating প্রোপার্টি বের কর। */
let movie = {
  title: 'Inception',
  director: 'Nolan',
  rating: 9,
};
console.log(movie['rating']);

/*
7. একটা college অবজেক্ট বানা। যার নাম ndc, স্থাপিত(established) 1949, গ্রুপ(groups)['Science', 'Arts', 'Commerce']। এইবার তোর কাজ হবে সেকেন্ড groups - এর মান অর্থাৎ 1 ইনডেক্সের মান বের কর। */
let college = {
  name: 'ndc',
  established: 1949,
  group: ['Science', 'Arts', 'Commerce'],
};
console.log(college.group[1]);

/*
8. একটা family অবজেক্ট বানা। যার মধ্যে একটা প্রোপার্টি হবে father সেটার মানও আরেকটা অবজেক্ট এবং ফাদারের মধ্যে তোর আব্বুর নাম, বয়স এবং পেশা(profession) থাকবে। একইভাবে family অবজেক্টে mother নামে আরেকটা প্রোপার্টি থাকবে, সেই প্রোপার্টির মানও আরেকটা অবজেক্ট। আর mother - এর অবজেক্টের মধ্যে তোর আম্মুর নাম, বয়স আর পেশা থাকবে। এখন তোর কাজ হচ্ছে, mother - এর age প্রোপার্টি বের কর। তারপর তোর আব্বুর age-এর মান বের কর। তারপর এই দুইটা age-এর যোগফল বের করে সেটা আউটপুট হিসেবে দেখা। */
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

/*---------------------------------------------------------------------------------------------------
                              জোড়ায় জোড়ায় entries কর
--------------------------------------------------------------------------------------------------*/

/*
1. বই নামে একটা অবজেক্ট বানিয়ে ফেল। সেটার মধ্যে বইয়ের নাম, লেখক, দাম ইত্যাদি থাকবে। তারপর অবজেক্টের সব প্রোপার্টি (keys) এবং সব ভ্যালু (values) কনসোল লগ কর। */
let book = {
  name: 'Sahih Al Bukhari',
  author: 'Imam Bukhari',
  price: 2800,
};
let objEnt = Object.entries(book);
console.log(objEnt);

/*
2. এই অবজেক্টটিতে চেক কর, author প্রোপার্টি আছে কি না। const article = { title: "Learning JS", category: "Programming" }; */
const article = {
  title: 'Learning js',
  category: 'Programming',
};
let articleKeys = Object.keys(article);
let checkArticle = articleKeys.includes('author');
console.log(checkArticle);

/*
3. তোকে ল্যাপটপ নামের একটা অবজেক্ট দেয়া হলো— const laptop={ brand: "Dell", model: "Inspiron", price: 45000 }; এইবার for...in লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং তার মান প্রিন্ট কর। */
const Laptop = {
  brand: 'Dell',
  model: 'Inspiron',
  price: 45000,
};
for (const key in Laptop) {
  const value = Laptop[key];
  console.log(key, value);
}

/*
4. একটা phone নামের অবজেক্ট আছে। const phone = { brand: "Samsung", model: "Galaxy s21", price: 85000 }; এইটার জন্য Object.keys ব্যবহার করে for...of লুপ চালিয়ে প্রতিটি প্রোপার্টি এবং
তার মান কনসোল লগ কর। */
const Phone = {
  brand: 'Samsung',
  model: 'Galaxy S21',
  price: 85000,
};
let PhoneKey = Object.keys(Phone);
for (const key of PhoneKey) {
  console.log(key, Phone[key]);
}

/*
5. তুই একটা bike অবজেক্ট বানাস, যেখানে brand: "Hero", price: 120000, আর model: "Splendor" প্রোপার্টিগুলো থাকবে। Object values () মেথড ব্যবহার করে সব ভ্যালুগুলো বের কর। */
let bike = {
  brand: 'Hero',
  price: 120000,
  model: 'Splendor',
};
let bikeValue = Object.values(bike);
console.log(bikeValue);

/*
6. const books={ book1 "Harry Potter", book 2 "The Hobbit", book 3 "Game of Thrones" }; এর ওপরে লুপ চালিয়ে সব বইয়ের নাম কনসোল লগ কর। */
const books = {
  book1: 'Harry Potters',
  book2: 'The Hobbit',
  book3: 'Game of Thrones',
};
for (const key in books) {
  console.log(books[key]);
}

/* 
7. সংখ্যার একটি অবজেক্ট দিলাম— const numbers = { a: 10, b: 20, c: 30, d: 40 }; এইবার বুদ্ধি খাটিয়ে এই অবজেক্টের সব প্রোপার্টির ভ্যালুগুলোর যোগফল বের কর। */
const Numbers = { a: 10, b: 20, c: 30, d: 40 };
let sum_Of_Numbers = 0;
let numbersValue = Object.values(Numbers);
for (const element of numbersValue) {
  sum_Of_Numbers += element;
  console.log(sum_Of_Numbers);
}

/*
৪. একটা player অবজেক্ট বানা, যেখানে name Messi, team Argentina, আর goals 91 থাকবে।
Object.values ব্যবহার করে সব ভ্যালু বের কর। */
const Player = {
  name: 'Messi',
  team: 'Argentina',
  goals: 91,
};
console.log(Object.values(Player));

/*
9. একটা building অবজেক্ট বানা, যার মধ্যে floors 10, address {street Main Road, city Dhaka}, আর type Commercial। এখন একটা for...in লুপ চালিয়ে সব প্রোপার্টি আর ভ্যালু প্রিন্ট কর। */
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

/*---------------------------------------------------------------------------------------------------
                                  Freeze-এ seal মারা
--------------------------------------------------------------------------------------------------*/

/*
1. ধর, তোর একটা headphone অবজেক্ট আছে, যার মধ্যে brand: "Sony", price: 3000, আর color: "red"। Object.freeze() মেথড ব্যবহার করে অবজেক্টটা freeze কর। এরপর আরেকটা নতুন প্রোপার্টি যোগ করতে চেষ্টা কর। দেখ, কাজ করে কি না । */
let headphone = {
  brand: 'Sony',
  price: 3000,
  color: 'red',
};
Object.freeze(headphone);
headphone.warrenty = '13 month';
console.log(headphone); // remain unchanged

/*
2. const player = { name Messi, goals 800, club Inter Miami }; Object.freeze () মেথড ব্যবহার করে অবজেক্ট ফ্রিজ কর। তারপর নতুন প্রোপার্টি যোগ করে দেখ, কাজ করে কি না। */
let PLAYER = {
  name: 'Messi',
  goals: 800,
  club: 'Inter Miami',
};
Object.freeze(PLAYER);
PLAYER.age = 56;
console.log(PLAYER);

/*
3. const book = { title Harry Potter, author JK Rowling, pages 500 }; Object.seal() ব্যবহার করে অবজেক্ট সিল কর। তারপর author প্রোপার্টি চেঞ্জ করে দেখ। */
const Book = {
  title: 'Harry Potter',
  author: 'JK Rowling',
  pages: 500,
};
Object.seal(Book);
Book.author = 'Faiyaz';
console.log(Book);

/* 
4. একটা gadget অবজেক্ট বানা, যার মধ্যে name iPhone, price 120000, আর color Black থাকবে। delete ব্যবহার করে price ডিলিট কর। */
let gadjet = {
  name: 'iPhone',
  price: 120000,
  color: 'black',
};
delete gadjet.price;
console.log(gadjet);

/*
5. একটা animal অবজেক্ট বানা, যার মধ্যে name Tiger, location Sundarban থাকবে। এখন এমন কিছু কর, যাতে টাইগারের লোকেশন চেইঞ্জ করা না যায়। */
let animal = {
  name: 'Tiger',
  location: 'Sundarban',
};
Object.freeze(animal);
animal.location = 'Dhaka';
console.log(animal);

/*
6. const food={ name Pizza, price 500, size Large }; এমন কিছু কর, যাতে food-এর মধ্যে নতুন প্রোপার্টি যোগ করা যাবে না। তবে চাইলে দাম বাড়ানো বা কমানো যাবে। */
const food = {
  name: 'Pizza',
  price: 500,
  size: 'Large',
};
Object.seal(food);
food.price = 400;
console.log(food);
