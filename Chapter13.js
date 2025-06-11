/*---------------------------------------------------------------------------------------------------
                                    map- কইরা দেন ভাই
--------------------------------------------------------------------------------------------------*/
/*
1. একটা স্ন্যাক্সের দোকানে বিভিন্ন আইটেম আছে, যেগুলার দাম এভাবে আছে: [30, 45, 20, 60, 10]। তুই
সবগুলা আইটেমের দাম 13 টাকা করে বাড়াইতে চাস। এই কাজটা map দিয়ে করে দেখ। */
const snackItems = [30, 45, 20, 60, 10];
const newPrice = snackItems.map(price => price + 13);
console.log(newPrice);

/*
2. ধর, তোর একটা নামের লিস্ট আছে [ 'Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']। তুই চাস, লিস্ট থেকে 5 অক্ষরের বেশি যাদের নাম, শুধু তাদেরকে একটা আলাদা লিস্টে রাখবি। filter দিয়ে করে দেখ কীভাবে হবে। */
const footballer = ['Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo'];
const favFootballer = footballer.filter(Name => Name.length > 5);
console.log(favFootballer);
/*
3. তোর একটা number লিস্ট আছে [10, 15, 20, 25, 30, 35]। তুই এমন একটা প্রোগ্রাম লিখে দেখ, যা 20- এর ওপরে প্রথম যে সংখ্যাটা আছে, সেটা খুঁজে বের করে দিবে। */
const number = [10, 15, 20, 25, 30, 35];
const moreThan20 = number.find(num => num > 20);
console.log(moreThan20);

/*
4. তোর কিছু হাইটের ডেটা আছে, যেমন: [65, 70, 68, 72, 68, 73]। 69 ইঞ্চির বেশি লম্বা যাদের হাইট আছে, তাদের শুধু খুঁজে বের কর filter দিয়ে। */
const height = [65, 70, 68, 72, 68, 73];
const selectedHeight = height.filter(h => h > 69);
console.log(selectedHeight);

/*
5. তোর কাছে কিছু সংখ্যা আছে: [7, 10, 15, 20, 25, 30]। তুই চাস প্রত্যেক সংখ্যা 3 দিয়ে ভাগ করলে কত হয়, সেটা এক এক করে দেখতে। map ইউজ করে প্রোগ্রাম লিখ। */
const someDigits = [7, 10, 15, 20, 25, 30];
const dividedDigits = someDigits.map(digit => digit / 3);
console.log(dividedDigits);

/*
6. তোর বন্ধুদের নামের লিস্ট আবারও আছে['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']। থার্ড অক্ষর বের করতে চাস প্রত্যেক বন্ধুর নামে। map দিয়ে কাজটা করে ফেল। */
const friendsName = [
  'Leonardo',
  'Brad Pitt',
  'Kate Winslet',
  'Audrey Hepburn',
  'Johnny Depp',
];
const newFriendsName = friendsName.map(Name => Name[2]);
console.log(newFriendsName);

/*
7. ধর, তুই একটা নামের array নিয়া আছিস: ['Tom', 'Harry', 'Sam', 'Jack']। এখন এমন নাম খুঁজে বের কর, যা 'H' দিয়া শুরু হয়। find ইউজ কর। */
const someName = ['Tom', 'Harry', 'Sam', 'Jack'];
const findName = someName.find(name => name.startsWith('H'));
console.log(findName);

/*
8. তুই একটা array [1, 2, 3, 4, 5] নিয়া বসে আছিস। তুই একটা ফাংশন লিখ, যা forEach ইউজ করে প্রতিটা সংখ্যা console - এ প্রিন্ট করে। */
const numberArray = [1, 2, 3, 4, 5].forEach(num => console.log(num));

/*
9. ['cow', 'goat', 'sheep', 'horse'] এই অ্যারে থেকে প্রতিটা নাম forEach দিয়ে console-এ প্রিন্ট কর। */
const animalName = ['cow', 'goat', 'sheep', 'horse'].forEach(name =>
  console.log(name)
);

/*---------------------------------------------------------------------------------------------------
                                every লিটনের some flat
--------------------------------------------------------------------------------------------------*/
/*
1. একটা অ্যারে বানা, যেটার নাম numbers এবং দেখা, এই অ্যারেতে 100-এর বড় কোনো সংখ্যা আছে কি না। */
const numbers = [
  12, 45, 67, 23, 89, 34, 90, 100, 56, 78, 44, 22, 11, 98, 65, 33, 77, 88, 99,
  24, 66, 15, 18, 30, 139,
];
console.log(numbers.some(num => num > 100));

/*
2. একটা অ্যারে বানা, যেখানে সব এলিমেন্টের মান 5 দিয়ে ভাগ যায় কি না, তা চেক করার জন্য every মেথড
ব্যবহার কর। */

const NumberArray = [12, 45, 67, 23, 89];
console.log(NumberArray.every(num => num % 5 == 0));

/*
3. words নামের একটা অ্যারে তৈরি কর এবং চেক কর, অন্তত একটি শব্দ "hello"-এর সমান কি না। */
const word = [
  'apple',
  'banana',
  'cherry',
  'dragon',
  'elephant',
  'flower',
  'grape',
];
console.log(word.some(name => name === 'hello'));
/*
4. ages নামের একটা অ্যারে তৈরি কর এবং দেখা, সবার বয়স 18-এর বেশি কি না। */
const ages = [20, 25, 30, 35, 40, 45, 50, 60];
console.log(ages.every(age => age > 18));
/*---------------------------------------------------------------------------------------------------
                                Reduce করে একটা করে দাও
--------------------------------------------------------------------------------------------------*/
/**
1. তোর কাছে একটা array আছে: [5, 10, 15, 20, 25]। তুই একটা প্রোগ্রাম লিখে দেখ, সব সংখ্যার যোগফল কত হয় reduce দিয়ে। */
const digit = [5, 10, 15, 20, 25];
const summation = digit.reduce((acc, cv) => acc + cv, 0);
console.log(summation);

/*
2. তুই একটা দোকানের মালিক। তোর পণ্যগুলা: [{ name: 'shampoo', price: 100 }, { name: 'soap', price: 50 }, { name: 'toothpaste', price: 75 }]। সব পণ্যের মোট দাম বের কর reduce ব্যবহার করে। */
const products = [
  { name: 'shampoo', price: 100 },
  { name: 'soap', price: 50 },
  { name: 'toothpaste', price: 75 },
];
const totalPrice = products.reduce((acc, cv) => acc + cv.price, 0);
console.log(totalPrice);

/*
3. ধর, তুই একটা product - এর list বানাইছিস: [{ name: 'Pen', price: 5 }, { name: 'Book', price: 50 }, { name: 'Bag', price: 100 }]। এবার সব পণ্যের দাম যোগ কর reduce দিয়ে। */
const productList = [
  { name: 'Pen', price: 5 },
  { name: 'Book', price: 50 },
  { name: 'Bag', price: 100 },
];
const TotalPrice = productList.reduce((acc, cv) => acc + cv.price, 0);
console.log(TotalPrice);

/*
4. reduce দিয়ে[1, 2, 3, 4, 5] সব সংখ্যার গুণফল বের কর। */
const multiply = [1, 2, 3, 4, 5];
const multiplyNum = multiply.reduce((acc, cv) => acc * cv, 1);
console.log(multiplyNum);
/*
5.[10, 20, 30, 40, 50] এই অ্যারে reduce ব্যবহার করে সর্বোচ্চ মান বের কর। */
const Highest = [10, 20, 30, 40, 50];
const HighestNumber = Highest.reduce((acc, cv) => (acc < cv ? cv : acc), 0);
console.log(HighestNumber);

/*
6. একটা অ্যারে বানা [100, 200, 300, 400]। reduce দিয়ে সব সংখ্যার যোগফল বের কর এবং ইনিশিয়াল ভ্যালু হিসেবে 50 ব্যবহার কর। */
const anArray = [100, 200, 300, 400];
const adiition = anArray.reduce((acc, cv) => acc + cv, 50);
console.log(adiition);

/*---------------------------------------------------------------------------------------------------
                                      চট করে sort কর
--------------------------------------------------------------------------------------------------*/
/*
1. অ্যারেটাকে ছোট থেকে বড় সাজিয়ে দে: const numbers = [50, 12, 25, 8, 15]; */
const Numbers = [50, 12, 25, 8, 15];
const sortingNumbers = Numbers.sort((a, b) => a - b);
console.log(Numbers);

/*
2. একটা array numbers = [13, 2, 45, 9, 6]; ব্যবহার করে descending order-এ sort কর। */
const array_numbers = [13, 2, 45, 9, 6];
const new_array_numbers = array_numbers.sort((a, b) => b - a);
console.log(new_array_numbers);

/*
3. বন্ধুদের age অনুসারে sorting করে দেখা const friends = [{name: 'Ali', age: 29}, {name:
'Sara', age: 22}, {name: 'Tariq', age: 35}]; */
const friends = [
  { name: 'Ali', age: 29 },
  { name: 'Sara', age: 22 },
  { name: 'Tariq', age: 35 },
];
friends.sort((a, b) => a.age - b.age);
console.log(friends);

/*
4. একটা নামের array দিয়ে প্রতিটি নামকে alphabetically সাজিয়ে দেখাও: const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];*/
const names = ['nabil', 'zubayer', 'sarwar', 'delwar'];
names.sort();
console.log(names);

/*---------------------------------------------------------------------------------------------------
                                     উল্টাপথের  reverse
--------------------------------------------------------------------------------------------------*/
/*
1. একটা names array দিয়ে নামগুলো reverse করে দেখ: const names = ['Zara', 'Tariq', 'Amir', 'Lina']; */
const names1 = ['Zara', 'Tariq', 'Amir', 'Lina'];
names1.reverse();
console.log(names1);

/*
2. numbers-এর array দিয়েও reverse কর: const numbers = [1, 4, 9, 7]; */
const numbers1 = [1, 4, 9, 7];
numbers1.reverse();
console.log(numbers1);
/*
3. অবজেক্টওয়ালা অ্যারেকে reverse কর: const users = [{name: 'Ali', age: 30}, {name: 'Sara', age: 25}, {name: 'Tariq', age: 35}]; */
const users = [
  { name: 'Ali', age: 30 },
  { name: 'Sara', age: 25 },
  { name: 'Tariq', age: 35 },
];
users.reverse();
console.log(users);

/*---------------------------------------------------------------------------------------------------
                                নাইস নাইস slice splice
--------------------------------------------------------------------------------------------------*/
/*
1. একটা অ্যারে বানা fruits নামে, যেখানে উপাদানগুলো Apple, Banana, Cherry, Date। এবার slice ব্যবহার করে Banana থেকে Cherry পর্যন্ত বের করে আলাদা অ্যারেতে রাখ। */
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
console.log(fruits.slice(1, 3));

/*
2. cars নামে একটা অ্যারে আছে, যার মধ্যে Tesla, BMW, Toyota, Ford আছে। slice দিয়ে শুধু Tesla আর BMW রাখ । */
const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
console.log(cars.slice(0, 2));

/*
3. movieList নামে একটা অ্যারে, যেখানে Inception, Titanic, Joker, Avatar, Interstellar আছে। splice দিয়ে Joker আর Avatar বাদ দিয়ে তার জায়গায় Batman আর Superman যোগ কর। */
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];
console.log(movieList.splice(2, 2, 'Batman', 'Superman'));
console.log(movieList);

/*
4. players নামে একটা অ্যারে, যার উপাদান Messi, Ronaldo, Neymar, Mbappe। splice ব্যবহার করে Neymar বাদ দিয়ে Halland যোগ কর। */
const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
players.splice(2, 1, 'Halland');
console.log(players);
