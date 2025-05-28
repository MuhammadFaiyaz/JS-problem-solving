/*---------------------------------------------------------------------------------------------------
                                          type দেখে হাইপ
  --------------------------------------------------------------------------------------------------*/

/*
1. "typeof" ব্যবহার করে প্রোগ্রাম লিখে দেখ, কোন ভেরিয়েবলের মান কী ধরনের। ধর, একটা ভেরিয়েবল
"price" ডিক্লেয়ার কর, যার মান 555, এখন console-এ এই টাইপ চেক কর। */
const myImage = './images/dataType.jpg';
console.log(myImage); // string
const price = 555;
console.log(typeof price); // number

/*
2. একটা ভেরিয়েবল "learning" ডিক্লেয়ার কর, যার মান true, আর সেটা console.log() দিয়ে আউটপুট কর। পরে "typeof" ব্যবহার করে দেখ, এটা কী ধরনের ভেরিয়েবল।*/
const learning = true;
console.log(learning);
console.log(typeof learning); // boolean

/*
3. megaCity নামক একটা ভেরিয়েবলের মধ্যে মান হিসেবে "Dhaka" আছে। এইবার "typeof" ব্যবহার করে দেখ, এই ভেরিয়েবলটা কী ধরনের। */
const megaCity = 'Dhaka';
console.log(typeof megaCity); // string

/*
4. খুব কাকফাটা গরমে কপালে হাত দিয়ে দেখলি, গা পুড়ে যায় যায় অবস্থা। সেই মুহুর্তেই তুই temperature" নামে একটা ভেরিয়েবল ডিক্লেয়ার করলি, যার মান 102.5। এটা কী ধরনের ভেরিয়েবল, সেটা "typeof" দিয়ে
চেক কর। */
const temperature = 102.5;
console.log(typeof temperature); // number

/*
5. ক্ষিধার চোটে তুই "isHungry" নামে একটা ভেরিয়েবল বানায় ফেললি, আর সেটার মান true। এখন console.log() আর "typeof" ব্যবহার করে এর টাইপ দেখ। */
const isHungry = true;
console.log(isHungry); // true
console.log(typeof isHungry); // boolean

/*
6. একটা ভেরিয়েবলের নাম "isRich", যার মান true। এখন console-এ এইটার টাইপ চেক কর। */
const isRich = true;
console.log(isRich); // true
console.log(typeof isRich); // boolean

/*---------------------------------------------------------------------------------------------------
                                    let দিয়ে শুরু, বদলাবে গুরু
---------------------------------------------------------------------------------------------------*/

/*
1. তোর বর্তমান বয়স age নামে একটি ভেরিয়েবলে রাখ। কনসোলে প্রিন্ট কর। তারপর age ভেরিয়েবলে নতুন মান সেট কর এবং আবার কনসোলে প্রিন্ট কর।*/
let age = 21;
console.log(age);
age = 25;
console.log(age);

/*
2. তোর পকেটে এখন 500 টাকা আছে, pocketMoney নামে একটি ভেরিয়েবলে রাখ। পরে pocketMoney- এর মান 150 সেট কর এবং কনসোলে প্রিন্ট কর। */
let pocketMoney = 500;
pocketMoney = 150;
console.log(pocketMoney);

/*
3. তুই 4 ঘণ্টা পড়াশোনা করার পরিকল্পনা করেছিস, studyTime নামে একটি ভেরিয়েবলে রাখ। পরে
studyTime-এর মান আপডেট করে তুই আসলেই আজকে যত ঘণ্টা পড়াশোনা করছস, সেটা সেট কর। মান যদি শূন্য হয়, তাহলে 0-ই সেট কর এবং কনসোলে দেখ। */
let studyTime = 4;
studyTime = 1;
console.log(studyTime);

/*
4. তোর মোট 3 জন বন্ধু আছে, friendsCount নামে একটি ভেরিয়েবলে এই সংখ্যা রাখ। পরে তোর 2 জন ফ্রেন্ড তোকে ছেড়ে চলে গেল। এখন friendsCount-এর মান আপডেট কর এবং কনসোলে সেটার আউটপুট দেখ */
let friendsCount = 3;
friendsCount = 1;
console.log(friendsCount);

/*
5. তুই একটা নতুন ফোন কিনছিলি 25000 টাকা দিয়ে। সেটা নিয়ে একটা ভেরিয়েবল ডিক্লেয়ার কর। আর এক মাস পর সেই ফোন বিক্রি করতে গিয়েই দেখস, দাম দিতে চায় 12000 মাত্র, কী আর করবি! phonePrice নামে একটি ভেরিয়েবলের মান প্রথমে 25000 দিবি। তারপর সেটাকে 12000 দিয়ে আপডেট কর এবং কনসোলে দেখা। */
let phonePrice = 25000;
phonePrice = 12000;
console.log(phonePrice);

/* 
6. তোদের ক্লাসে 40টা চেয়ার আছে। কয়দিন পর 2টা চেয়ারের পা ভেঙে গেল। chairsCount নামে একটি ভেরিয়েবলে এই মান আপডেট কর। আরও কয়দিন পর পাশের রুমের সিনিয়র ভাইয়ারা এসে 6টা চেয়ার নিয়ে গেছে। এইবারও chairsCount-এর মান আপডেট কর এবং কনসোলে ফাইনাল মান আউটপুট করে দেখ। */
let chairsCount = 40;
chairsCount = chairsCount - 2;
chairsCount = chairsCount - 6;
console.log(chairsCount);

/*
7. তুই আজকে 3 ঘণ্টা খেলা করার পরিকল্পনা করেছিস, playTime নামে একটি ভেরিয়েবলে রাখ। পরে playTime-এর মান আপডেট করে আসলেই তুই কত ঘণ্টা খেলা করেছিস, সেটি সেট কর। যদি তুই না খেলিস, তাহলে playTime-এর মান 0 সেট কর এবং কনসোলে দেখ। */
let playTime = 3;
playTime = 0;
console.log(playTime);

/*---------------------------------------------------------------------------------------------------
                                    comment এর সিমেন্ট
  --------------------------------------------------------------------------------------------------*/

/*
1. তুই score নামে একটা ভেরিয়েবল লিখ। এখন এইটা কীসের স্কোর, সেটা ভেরিয়েবলের নাম দেখে বুঝা যাচ্ছে না। তাই এই ভেরিয়েবল ডিক্লেয়ার করার ওপরে এক লাইন কমেন্ট লিখ। কমেন্টে থাকবে, এইটা কীসের স্কোর।
*/
let score = 227; // today zimbabwe made 227 runs against bangladesh in the 1st ODI match
console.log(score);

/*
2. এখন radius নামে একটা ভেরিয়েবল লিখ। তারপর এইটা কীসের রেডিয়াস, সেটা বুঝানোর জন্য তিন লাইনের কমেন্ট লিখ। প্রত্যেক লাইনের আগে স্ল্যাশ চিহ্ন দিয়ে কমেন্ট লিখবি।*/
let radius = 5;
// it is the
//  radius of
// a circle
console.log(radius);

/*
3. তোর পছন্দের জামা কয়টা, সেটা নিয়ে dress নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। তারপর সেটার ওপর মাল্টিলাইন কমেন্ট লিখ স্ল্যাশ এবং এস্টেরিস্ক চিহ্ন দিয়ে।*/
let dress = 10;
/* these are my favorite. 
they are very beautiful.
they are very expensive. */
console.log(dress);

/*
4. তোকে একটা গিফট হিসেবে 100 টাকা দেওয়া হয়েছে, giftMoney নামে একটা ভেরিয়েবলে রাখ। তারপর কমেন্টে লিখবি, এই টাকা কী কারণে দেওয়া হয়েছে।*/
let giftMoney = 100; // this is my eid selami or bonus money
console.log(giftMoney);

/*
5. তুই ঠিক করলি 7 ঘণ্টা পড়ালেখা করবি। studyTime নামে একটি ভেরিয়েবলে রাখ। তার ওপর চার-পাঁচ লাইনের কমেন্ট লিখ, এই 7 ঘণ্টার মধ্যে কোন কোন সাবজেক্টের কী কী জিনিস তুই কতক্ষণ ধরে পড়বি।*/
let stdyTime = 4; /* this is my study time in hours
                    I will study 2 hours in the morning and 2 hours in the evening.
                    I will study math and english. these are my favorite subjects.
                    i have to memorize some important topics. besides, I have to practice some math problems. I will also practice some english grammar and writing skills.*/
console.log(stdyTime);

/*
6. তোর মোবাইল পেমেন্টের জন্য sendMoney নামে একটি ভেরিয়েবল ডিক্লেয়ার কর। তার ওপর দুই লাইনের কমেন্ট লিখ, যাকে মানি সেন্ড করতেছস, সে কত টাকা পাবে, আর সার্ভিস ফি কত টাকা।*/
let sendMoney = 1050; // this is my pocket money. I will send this money to my friend. he will get 1000 taka. the service charge is 50 taka. so, I will send 1050 taka.
console.log(sendMoney);

/*
7. তুই অনলাইন থেকে একটা প্রোডাক্ট অর্ডার করছস। তোর কাছ থেকে মোট কত টাকা নিবে, সেটা pay নামে একটা ভেরিয়েবলে রাখ। তারপর ওপরে এক লাইন কমেন্ট লিখবি। এই টাকার মধ্যে প্রোডাক্টের দাম এবং ডেলিভারি ফি যোগ করা আছে।*/
let pay = 730; // I am paying 671 taka. the delivery fee is 59 taka. total payment is 730 taka.
console.log(pay);

/*---------------------------------------------------------------------------------------------------
                                    ও মেয়ে, তোর name দিবো কি?
  --------------------------------------------------------------------------------------------------*/

/*
1. তুই একটা প্রোগ্রাম লিখে দেখ, যেখানে তুই ভেরিয়েবল ডিক্লেয়ার করবি camelCase ব্যবহার করে। ধর, তোর প্রিয় খাবার নামে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার কর। আর সেটার মান দে।*/
let favoriteFood = 'Biriyani'; // this is my favorite food
console.log(favoriteFood);

/*
2. তুই দেখ, ভেরিয়েবলের নাম case-sensitive কি না। একটা প্রোগ্রাম লিখে দুইটা ভেরিয়েবল ডিক্লেয়ার করবি, একটার নাম "city", আরেকটার নাম "City"। প্রথমটার মান "Chittagong" আর দ্বিতীয়টার মান "Dhaka" দে। console.log() দিয়ে দুইটা আউটপুট দেখ।*/
let city = 'Chittagong';
let City = 'Dhaka';
console.log(city);
console.log(City);

/*
3. তুই userName নামে একটা ভেরিয়েবল ডিক্লেয়ার করবি এবং তার মান Johan দে। এবার username নামে আরেকটা ভেরিয়েবল ডিক্লেয়ার করবি এবং তার মান Jovan দে। দুইটা আউটপুট দেখ console.log() দিয়ে।*/
let userName = 'Johan';
let username = 'Jovan';
console.log(userName);
console.log(username);

/*
4. আমার বাসার ঠিকানা (বাসরের ঠিকানা বলি নাই কিন্তু) নামে ইংরেজিতে একটা ভেরিয়েবল ডিক্লেয়ার করবি। camelCase ব্যবহার করে ভেরিয়েবল ডিক্লেয়ার করবি। তারপর এইটার স্ট্রিং একটা মান সেট করবি। */
let homeAddress = 'GT Road/1200, Demra, Dhaka'; // this is my home address
console.log(homeAddress);

/*
5. সুপার ওভারে কত রান হইছে, সেটার জন্য super নামে একটা ভেরিয়েবল ডিক্লেয়ার কর এবং মান সেট কর। করার পর যে আউটপুট দেখতে পাচ্ছস, সেটা কি ঠিক আছে নাকি কোনো সমস্যা আছে।*/
/*
let super = 45;
console.log(super);*/ // invalid variable name

/*
6. তুই কোন ক্লাসে পড়স, সেটা লেখার জন্য class নামে একটা ভেরিয়েবল লিখ। তারপর আউটপুট এ দেখ, কী
  দেখায়।*/
/* let class = 'Honors 1st year';
console.log(class); // invalid variable name */

/* 
7.
সেকেন্ড পজিশনে কে ব্যাট করবে, সেটার জন্য 2ndPosition নামে একটা ভেরিয়েবল লিখে সেখানে একজন ব্যাটসম্যানের নাম লিখে দে। দেখ আউটপুট দেখায় কি না। যদি সমস্যা করে, তাহলে কী করা লাগে, সেটা কমেন্ট করে ভেরিয়েবলের ওপরে লিখ।*/
// The method of variable declaration is wrong given below. We cannot declare a variable with a number at the beginning. But we can declare a variable with a number at the middle or end.
/*
let 2ndPosition = 'Hashim Amla'; // invalid variable name
*/

/*---------------------------------------------------------------------------------------------------
                                    Parse এর ভিতর নানরুটি (NaN)
--------------------------------------------------------------------------------------------------*/

/*
1. ধর তুই একটা মজার অঙ্ক করছিস। তুই ‘20’ লিখে ফেললি, কিন্তু সেটা স্ট্রিং আকারে। স্ট্রিং থেকে আসল সংখ্যায় কনভার্ট করে তার সাথে 10 যোগ করতে পারবি?*/
let funnyNumber = '20';
let funnyNumberInt = parseInt(funnyNumber);
console.log(funnyNumberInt + 10);

/*
2. তোর কাছে একটা ভগ্নাংশ আকারে মান আছে, যেমন '3.14159'। এই মানটা পূর্ণসংখ্যায় রূপান্তর করার জন্য একটা প্রোগ্রাম লিখ ।*/
let valueOf_Pie = '3.14159';
let valueOf_PieInInteger = parseInt(valueOf_Pie);
console.log(valueOf_PieInInteger);

/*
3. তুই 'premikBoy' নামের একটা স্ট্রিংকে সংখ্যা বানানোর চেষ্টা কর। দেখ কী আউটপুট দেয়।*/
let playBoy = 'premikBoy';
console.log(parseInt(playBoy));

/*
4. তুই 3.456 আর 2.789 যোগ করলি। আউটপুটে তুই দশমিকের পর মাত্র 2 ঘর পর্যন্ত দেখতে চাস। কীভাবে দেখাবি? একটা প্রোগ্রাম লিখ। */
let num1 = 3.456;
let num2 = 2.789;
let sum = num1 + num2;
console.log(sum.toFixed(2));

/*
5. ধর, তুই '56.78' আর '12.34' স্ট্রিং আকারে পাইলি। এখন এই দুইটা যোগ করে কীভাবে আসল সংখ্যা বের করবি? সেটা বের করার একটা প্রোগ্রাম লিখ। */
let string1 = '56.78';
let string2 = '12.34';
let num3 = parseFloat(string1);
let num4 = parseFloat(string2);
let sum2 = num3 + num4;
console.log(sum2);

/*
6. ধর, তোর কাছে '10.5678' আর '5.4321' আছে। তুই আউটপুটে দশমিকের পর 1 ঘর পর্যন্ত দেখতে চাস। সেটা কীভাবে দেখাবি? */
let float1 = '10.5678';
let float2 = '5.4321';
let num5 = parseFloat(float1);
let num6 = parseFloat(float2);
let sum3 = num5 + num6;
console.log(sum3.toFixed(1));

/*
7. এখন '42.45689754'-কে দশমিকের পর ও ঘর পর্যন্ত রাউন্ড কর।*/
let float3 = '42.45689754';
console.log(parseFloat(float3).toFixed(3)); // 42.457
