/*---------------------------------------------------------------------------------------------------
                                    আসছে তেরে অ্যারে
--------------------------------------------------------------------------------------------------*/
/*
1. তুই একটা অ্যারে বানালি, যেখানে 71 থেকে 79 পর্যন্ত সংখ্যাগুলো রাখ। */
let array = [71, 72, 73, 74, 75, 76, 77, 78, 79];
console.log(array);

/*
2. তোর বাসায় একটা ছোট ফ্রিজ আছে, যেখানে ঠিক 5টা ফল রাখতে পারিস। তুই একটা অ্যারে বানিয়ে তাতে আপেল, কলা, কমলা, আম আর পেয়ারা রাখলি।*/
let fruitArray = ['apple', 'banana', 'orange', 'mango', 'guava'];
console.log(fruitArray);

/*
3. ধর, তুই একদিন বাজারে গিয়েছিলি। তোর ব্যাগে আলু, পেঁয়াজ, বেগুন, মুলা, গাজর, টমেটো, ঢ্যাঁড়স, লাউ, শসা আর পটল 10টা সবজি রাখলি। একটা প্রোগ্রাম লিখে বের কর, ব্যাগে মোট কয়টা সবজি আছে। */
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

/*
4. তোর 5টা প্রিয় সিনেমার নাম একটা অ্যারেতে রাখ। */
let favouriteCinema = [
  'Pather Panchali',
  'Sholay',
  'Baazigar',
  'Titanic',
  'Avatar',
];
console.log(favouriteCinema);

/*
5. একটা অ্যারে লিখ, যেটার মধ্যে 11 থেকে 30-এর মধ্যে বিজোড় সংখ্যাগুলো থাকবে।*/
let oddNumbers = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
console.log(oddNumbers);

/*
6. তোর চারপাশে তাকিয়ে যে যে কালার দেখতে পারতেছস, সেগুলার একটা অ্যারে বানা। তারপর সেই অ্যারের লেন্থ কনসোল লগ কর।*/
let colorArray = ['red', 'green', 'blue', 'yellow', 'black', 'white'];
console.log(colorArray.length); // 6

/*
7. কয়েকটা দেশের রাজধানীর নাম নিয়ে একটা অ্যারেতে রাখ এবং তার লেন্থ কনসোল লগ কর। */
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

/*---------------------------------------------------------------------------------------------------
                                    কার ইনডেক্স কত ছোট
--------------------------------------------------------------------------------------------------*/
/*
1. তুই তোর সব বন্ধুদের নাম একটা অ্যারেতে রাখলি। এখন তুই বের কর, 3 নম্বর ইনডেক্সে কে আছে। */
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

/*
2. তোর 7টা প্রিয় বইয়ের নাম একটা অ্যারেতে রাখ। তারপর দেখ, 5 নম্বর পজিশনের বইয়ের নাম কী। */
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

/*
3. তুই একটা অ্যারে বানালি, যেখানে 1 থেকে 10 পর্যন্ত সংখ্যাগুলো রাখলি। এখন 7 নম্বর পজিশনের মানকে 30
দিয়ে আপডেট কর। */
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
number[7] = 30;
console.log(number);

/*
4. তোর মোবাইলে কিছু গেম আছে এবং তুই সেগুলো একটা অ্যারেতে রাখলি— 'ফ্রি ফায়ার', 'পাবজি', 'ক্যান্ডি ক্রাশ', 'টেম্পল রান'। এখন তুই চাস, 2 নম্বর ইন্ডেক্সের গেমটা পরিবর্তন করে সেখানে ‘সাবওয়ে সার্ফার' রাখবি। একটা প্রোগ্রাম লিখে সেটাই কর।*/
let games = ['Free Fire', 'PUBG', 'Candy Crash', 'Temple Run'];
games[2] = 'Subway Surfer';
console.log(games); // ['Free Fire', 'PUBG', 'Subway Surfer', 'Temple Run']

/*
5. তোর পরিবারের সদস্যের নাম একটা অ্যারেতে রাখ। তারপর থার্ড পজিশনের সদস্যের নাম আউটপুট হিসেবে দেখা। */
let myFamilyMember = ['Zakir Hossain', 'Faiyaz', 'Abdullah'];
console.log(myFamilyMember[2]);

/*
6. তুই প্ল্যান করলি 7টা দেশ ঘুরবি। দেশগুলোর নাম একটা অ্যারেতে রাখ। তারপর 4 নম্বর পজিশনের দেশের নাম
বের কর। */
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

/*
7. তোর পড়ার টেবিলে 4টা জিনিস আছে। সেগুলোর নাম একটা অ্যারেতে রাখ। তারপর 7 নম্বর পজিশনের জিনিসটা কী, সেটি বের কর। */
let studyTable = ['Books', 'Pen', 'Pencil', 'Eraser'];
console.log(studyTable[6]); // undefined

/*---------------------------------------------------------------------------------------------------
                                    push pop- এর পুষ্পা
--------------------------------------------------------------------------------------------------*/

/*
1. সংখ্যার একটা অ্যারে আছে: [10, 20, 30, 40, 50]। এখন এই অ্যারেতে 60 যোগ করে অ্যারেটি আউটপুটে
দেখা।*/
let numberARRAY = [10, 20, 30, 40, 50];
numberARRAY.push(60);
console.log(numberARRAY); // [10, 20, 30, 40, 50, 60]

/*
2. তুই কিছু নাম লিখে রাখছিস অ্যারেতে: 'সজিব', 'সাগর', 'সাকিব', 'সোহেল'। এখন তোর মনে হলো নতুন বন্ধু 'সুমন'কে এই অ্যারেতে যোগ করতে হবে। একটা প্রোগ্রাম লিখে দেখ, সুমনকে সবার শেষে যোগ কর। */
let someName = ['Sojib', 'Sagor', 'Sakib', 'Sohel'];
someName.push('Sumon');
console.log(someName); // ['Sojib', 'Sagor', 'Sakib', 'Sohel', 'Sumon']

/*
3. তোর মোবাইলে যে যে গেম ইনস্টল করা আছে, সেগুলা একটা অ্যারেতে রাখ। তারপর সবার শেষে যে গেমের নাম দেয়া আছে, সেটা রিমুভ করে ফেল। এরপর তোর অ্যারেতে কী কী গেম বাকি রইল, সেগুলা আউটপুট হিসেবে দেখা। */
let mobileGame = ['Free Fire', 'PUBG', 'Call of Duty'];
mobileGame.pop();
console.log(mobileGame); // ['Free Fire', 'PUBG']

/*
4. এই অ্যারেতে [24, 36, 48, 60]। একদম প্রথম উপাদান হিসেবে 12-কে যোগ করে পুরা অ্যারেটা আউটপুট হিসেবে দেখা। */
let multiplesOfTwelve = [24, 36, 48, 60];
multiplesOfTwelve.unshift(12);
console.log(multiplesOfTwelve); // [12, 24, 36, 48, 60]

/*
5. তোর কাছে 5টি বইয়ের নাম দিয়ে একটা অ্যারে আছে। এখন তুই সবার প্রথম বইটা পড়ে শেষ করে ফেলছস। তাই প্রথম বইয়ের নামটা অ্যারে থেকে রিমুভ করে ফেল। তারপর বাকি নামগুলো আউটপুটে দেখা । */
let bookName = [
  'Sahih al-Bukhari',
  'Sahih Muslim',
  'Riyad as-Salihin',
  'Al-Adab al-Mufrad',
  'Al-Muwatta',
];
bookName.shift('Sahih al-Bukhari');
console.log(bookName); // ['Sahih Muslim', 'Riyad as-Salihin', 'Al-Adab al-Mufrad', 'Al-Muwatta']

/*---------------------------------------------------------------------------------------------------
                                  কে include আছে, কে নাই
--------------------------------------------------------------------------------------------------*/

/*
1. তুই একটা প্রোগ্রাম বানাতে চাস, যেটাতে ‘আম’ নামক একটা ফল লিস্টে আছে কি না, সেটা চেক করবে। যদি থাকে, তবে আউটপুটে বলবে, ‘আম আছে’, আর না থাকলে বলবে, ‘আম নেই, গাছে উঠ’। ফলের অ্যারেতে ‘আপেল’, ‘কলা’, ‘আম’ ও ‘লিচু’ আছে। */
let fruitName = ['apple', 'banana', 'mango', 'Lithchi'];
if (fruitName.includes('mango') == true) {
  console.log('Mango ache');
} else {
  console.log('Mango nai, Gache oth');
}

/*
2. তুই একটা অ্যারে বানালি, যেখানে নামগুলো আছে— ‘বাবুল’, ‘আলিফ’, ‘ছোটন’। এখন প্রোগ্রাম লিখে দেখ, বাবুলের ইনডেক্স নাম্বার কত। */
let names = ['Babul', 'Alif', 'Choton'];
console.log(names.indexOf('Babul')); // 0

/*
3. ধর, তুই বন্ধুদের নামের একটা লিস্ট বানিয়েছিস অ্যারেতে— ‘রিমন’, ‘রিফাত’, ‘রাজিব’। এখন তোর মনে হলো, ‘রিফাত’-এর অবস্থানটা ভুলে গেছিস। একটা প্রোগ্রাম লিখে রিফাতের ইনডেক্স বের কর। */
let friendName = ['Rimon', 'Rifat', 'Razib'];
console.log(friendName.indexOf('Rifat')); // 1

/*
4. তুই কিছু শহরের নাম লিখে রাখছিস— ‘Dhaka', 'Chittagong', ‘Sylhet’। এখন তুই ভাবলি, আরেকটা শহরের নাম যোগ করবি, কিন্তু ভুলে ছোট হাতের rajshahi যোগ করে ফেললি। এবার প্রোগ্রাম লিখে চেক কর, Rajshahi আছে কি না। */
let city = ['Dhaka', 'Chittagong', 'Sylhet', 'rajshahi'];
console.log(city.includes('RajShahi'));

/*
5. একটা প্রোগ্রাম বানিয়ে ‘বৃষ্টি’ নামক উপাদান আছে কি না, চেক কর। যদি থাকে, তাহলে আউটপুটে বলবি ‘I need umberalla', না থাকলে বলবি ‘No rain no pain’। অ্যারেতে ‘দীঘি’, ‘মেঘ’, ‘বৃষ্টি’ ও ‘বর্ষা’ আছে। */
let nature = ['Dighi', 'Megh', 'Bristy', 'Borsha'];
if (nature.includes('Bristy') == true) {
  console.log('I need Umbrella');
} else {
  console.log('No rain, No pain');
}

/*
6. তোর প্রিয় খেলাধুলার একটা অ্যারে আছে— ‘ফুটবল’, ‘ক্রিকেট’, ‘ভলিবল’। এখন তুই চেক করতে চাস ‘ব্যাডমিন্টন' নামক খেলাটি অ্যারেতে আছে কি না।' */
let favouriteSports = ['Football', 'Cricket', 'Volleyball'];
console.log(favouriteSports.includes('Badminton')); // false
