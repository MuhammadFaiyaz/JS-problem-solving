//আসছে তেরে অ্যারে

let array = [71, 72, 73, 74, 75, 76, 77, 78, 79];

let fruitArray = ['apple', 'banana', 'orange', 'mango', 'guava'];

let vegetableArray = [
  'potato',
  'onion',
  'brinjal',
  'radish',
  'carrot',
  'tomato',
  'ladyfinger',
  'gourd',
  'cucumber',
  'Pointed Gourd',
];
let vegetableArraySize = vegetableArray.length;
console.log(vegetableArraySize); // 10

let favouriteCinema = [
  'Pather Panchali',
  'Sholay',
  'Baazigar',
  'Titanic',
  'Avatar',
]; //

let oddNumbers = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29];

let colorArray = ['red', 'green', 'blue', 'yellow', 'black', 'white'];
console.log(colorArray.length); // 6

let capitalCities = [
  'Dhaka',
  'Delhi',
  'Islamabad',
  'Kathmandu',
  'Thimphu',
  'Colombo',
  'Riyadh',
  'Kabul',
  'Tashkent',
  'Kuala Lumpur',
];
console.log(capitalCities.length); // 10

// কার ইনডেক্স কত ছোট

let friendsName = [
  'Abu Bakar',
  'Umar',
  'Usman',
  'Ali',
  'Omar',
  'Zubair',
  'Abdul Rahman',
  'Abdul Aziz',
  'Abdul Jabbar',
  'Abdul Basit',
];
console.log(friendsName[3]);

let favouriteBooks = [
  'Aqidah al-Tahawiyyah',
  'Sahih Bukhari',
  'Sahih Muslim',
  'Riyad as-Salihin',
  'Al-Adab al-Mufrad',
  'Al-Muwatta',
  'Sunan Abu Dawood',
];
console.log(favouriteBooks[4]); // Al-Adab al-Mufrad

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number[7] = 30;
console.log(number);

let games = ['Free Fire', 'PUBG', 'Candy Crash', 'Temple Run'];
games[2] = 'Subway Surfer';
console.log(games); // ['Free Fire', 'PUBG', 'Subway Surfer', 'Temple Run']

let myFamilyMember = ['Zakir Hossain', 'Faiyaz', 'Abdullah'];
console.log(myFamilyMember[2]);

let touristCountries = [
  'Bangladesh',
  'India',
  'Pakistan',
  'Nepal',
  'Bhutan',
  'Sri Lanka',
  'Maldives',
];
console.log(touristCountries[3]); // Nepal

let studyTable = ['Books', 'Pen', 'Pencil', 'Eraser'];
console.log(studyTable[6]); // undefined

// push pop- এর পুষ্পা

let numberARRAY = [10, 20, 30, 40, 50];
numberARRAY.push(60);
console.log(numberARRAY); // [10, 20, 30, 40, 50, 60]

let someName = ['Sojib', 'Sagor', 'Sakib', 'Sohel'];
someName.push('Sumon');
console.log(someName); // ['Sojib', 'Sagor', 'Sakib', 'Sohel', 'Sumon']

let mobileGame = ['Free Fire', 'PUBG', 'Call of Duty'];
mobileGame.pop();
console.log(mobileGame); // ['Free Fire', 'PUBG']

let multiplesOfTwelve = [24, 36, 48, 60];
multiplesOfTwelve.unshift(12);
console.log(multiplesOfTwelve); // [12, 24, 36, 48, 60]

let bookName = [
  'Sahih al-Bukhari',
  'Sahih Muslim',
  'Riyad as-Salihin',
  'Al-Adab al-Mufrad',
  'Al-Muwatta',
];
bookName.shift('Sahih al-Bukhari');
console.log(bookName); // ['Sahih Muslim', 'Riyad as-Salihin', 'Al-Adab al-Mufrad', 'Al-Muwatta']

// কে include আছে, কে নাই

let fruitName = ['apple', 'banana', 'mango', 'Lithchi'];
if (fruitName.includes('mango') == true) {
  console.log('Mango ache');
} else {
  console.log('Mango nai, Gache oth');
}

let names = ['Babul', 'Alif', 'Choton'];
console.log(names.indexOf('Babul')); // 0

let friendName = ['Rimon', 'Rifat', 'Razib'];
console.log(friendName.indexOf('Rifat')); // 1

let city = ['Dhaka', 'Chittagong', 'Sylhet', 'rajshahi'];
console.log(city.includes('RajShahi'));

let nature = ['Dighi', 'Megh', 'Bristy', 'Borsha'];
if (nature.includes('Bristy') == true) {
  console.log('I need Umbrella');
} else {
  console.log('No rain, No pain');
}

let favouriteSports = ['Football', 'Cricket', 'Volleyball'];
console.log(favouriteSports.includes('Badminton')); // false
