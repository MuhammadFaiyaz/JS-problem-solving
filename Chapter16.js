/*---------------------------------------------------------------------------------------------------
                                ট্রাক্টর ট্রাক্টর Type Constructor
--------------------------------------------------------------------------------------------------*/
/*
1. একটা ভেরিয়েবল বানা, যার নাম হবে start। এর ভ্যালু হবে '786'। এরপর এই স্ট্রিংটাকে সংখ্যায় রূপান্তর কর। */
const start = +'786';
console.log(start);

/*
2. একটা ভেরিয়েবল বানা, যার নাম willAttend এবং এইটার মান 0 হবে। এখন এই ভেরিয়েবলকে Boolean
টাইপে কনভার্ট কর এবং console - এ দেখা। */
const willAttend = 0;
console.log(Boolean(willAttend));

/*
3. Object কন্সট্রাক্টর দিয়ে একটি অবজেক্ট তৈরি কর, যেখানে city এবং country নামে দুইটা প্রোপার্টি থাকবে। */
const MyCountry = new Object();
MyCountry.city = 'Dhaka';
MyCountry.country = 'Kuwait';
console.log(MyCountry);

/*
4. একটা ভেরিয়েবল বানা, যার নাম হবে total। এর ভ্যালু হবে 1970 । এই সংখ্যাটাকে স্ট্রিংয়ে রূপান্তর কর। */
let total = 1970 + '';
console.log(total);

/*---------------------------------------------------------------------------------------------------
                                   অল্পস্বল্প Math অঙ্ক
--------------------------------------------------------------------------------------------------*/
/*
1. সাতটা সংখ্যা 45, 11, 89, 23, 56, -12, -56-এর মধ্যে সবচেয়ে ছোট সংখ্যা বের কর। */
let sevenNumbers = Math.min(45, 11, 89, 23, 56, -12, -56);
console.log(sevenNumbers);

/*
2. তিনটা সংখ্যা 21, 35, 67-এর মধ্যে সবচেয়ে বড় সংখ্যাটা বের কর। */
const threeNum = Math.max(21, 35, 67);
console.log(threeNum);

/*
3. 7.6 এবং 7.2-কে তার নিকটবর্তী পূর্ণসংখ্যায় রূপান্তর কর। */
console.log(Math.round(7.6));
console.log(Math.round(7.2));

/*
4. 9.8 এবং 5.3-কে তার নিকটবর্তী ছোট পূর্ণসংখ্যায় রূপান্তর কর। */
console.log(Math.floor(9.8));
console.log(Math.floor(5.3));

/*
5. 3.1 এবং 6.9-কে তার নিকটবর্তী বড় পূর্ণসংখ্যায় রূপান্তর কর। */
console.log(Math.ceil(3.1));
console.log(Math.ceil(6.9));

/*
6. Math.abs ব্যবহার করে -34-এর absolute মান বের কর। */
console.log(Math.abs(-34));

/*
7. একটি ফাংশন লিখ, যেটা একটা দশমিকওয়ালা সংখ্যা ইনপুট প্যারামিটার হিসেবে নিবে। তারপর সেই ফাংশনের ভিতরে সেই সংখ্যাটিকে Math.round, Math.floor এবং Math.ceil ব্যবহার করে কনসোল লগ কর। */
function floatingNum(float) {
  console.log(Math.round(float));
  console.log(Math.floor(float));
  console.log(Math.ceil(float));
}
floatingNum(59.49999999999999999);

/*---------------------------------------------------------------------------------------------------
                                 Date with JS Date
--------------------------------------------------------------------------------------------------*/
/*
1. new Date ব্যবহার করে বর্তমানে যে মুহূর্তে কোড চলছে, সেই সময় কনসোলে দেখাও। */
const now = new Date();
console.log(now);

/*
2. নতুন Date অবজেক্ট বানিয়ে তার মধ্যে 2035, 6, 15, 14, 45, 30 সেট কর। */
const dateTime = new Date(2035, 6, 15, 14, 45, 30);
console.log(dateTime);

/*
3. getFullYear ব্যবহার করে বর্তমান বছরের মান কনসোলে দেখাও। */
console.log(new Date().getFullYear());

/*
4. setFullYear ব্যবহার করে একটি Date অবজেক্টের বছর 2040 সেট কর। */
const fixedYear = new Date();
fixedYear.setFullYear(2040);
console.log(fixedYear);

/*
5. getDay ব্যবহার করে 2029-02-16 তারিখের সপ্তাহের দিন এবং সে দিনের নাম বের কর। */
const givenTime = new Date('2029-02-16');
givenTime.getDay();
console.log(givenTime);

/*---------------------------------------------------------------------------------------------------
                              অপারেশন Regular Expression
--------------------------------------------------------------------------------------------------*/

/*
1. একটা বাক্যে "I bought an orange" লেখা আছে, এখন "orange"-কে "grape" দিয়ে পরিবর্তন কর। */
const sen = 'I bought an orange';
const changeSen = /orange/;
console.log(sen.replace(changeSen, 'grape'));

/*
 2. "ana" শব্দটি "I like to have apple and banana" বাক্যে আছে কি না, চেক কর। */
const sentence = 'I like to have apple and banana';
const checking = new RegExp('ana');
console.log(checking.test(sentence));

/*
3. "I am eating apple. apple is good. apple helps me a lot." এখানে "apple" শব্দটি পুরো টেক্সটের মধ্যে সব জায়গায় "JavaScript" দিয়ে পরিবর্তন কর। g ফ্ল্যাগের মাধ্যমে পুরো টেক্সটের সব চেইঞ্জ কর। */
const paragraph = 'I am eating apple. apple is good. apple helps me a lot.';
console.log(paragraph.replace(/apple/g, 'JavaScript'));

/*---------------------------------------------------------------------------------------------------
                                করলে ইউজ Map set থাকবে না রিগ্রেট
--------------------------------------------------------------------------------------------------*/
/*
1. ডুপ্লিকেট বাদ দিয়ে একটা নতুন সেট তৈরি কর [1, 2, 2, 3, 4, 4, 5]। */
const set = [1, 2, 2, 3, 4, 4, 5];
console.log(new Set(set));

/*
2. নতুন একটা সেট বানিয়ে সেখানে 10, 20, 10, 30 এই উপাদানগুলো যোগ কর। তারপর সেটটাকে কনসোলে
দেখাও ৷ */
const seet = new Set();
seet.add(10);
seet.add(20);
seet.add(10);
seet.add(30);
console.log(seet);

/*
3. Set { 10, 20, 30 } থেকে 10 উপাদানটি ডিলিট কর। */
const set2 = new Set([10, 20, 30]);
set2.delete(10);
console.log(set2);

/*
4. Array-এর মধ্যে [1, 2, 3, 4, 2, 1, 5, 5] উপাদানগুলো নিয়ে সেট তৈরি কর এবং সেই সেটকে array-তে রূপান্তর কর। */
const mySet = new Set([1, 2, 3, 4, 2, 1, 5, 5]);
const myarray = [...mySet];
console.log(myarray);
