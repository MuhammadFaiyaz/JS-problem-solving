/*---------------------------------------------------------------------------------------------------
                                প্রাইমারি স্কুলের primitive
--------------------------------------------------------------------------------------------------*/
/*
1. একটি ভ্যারিয়েবল বানা, যার নাম হবে num এবং সেটাতে 15 রাখ। আরেকটি ভ্যারিয়েবল বানা, যার নাম হবে
copy এবং num-এর মান সেট কর। এবার copy-এর মান পরিবর্তন করে 25 কর। এরপর console.log-এ num এবং copy-এর মান দেখ। দুইটা কি সেইম নাকি আলাদা আলাদা। */
let num = 15;
let copy = num;
copy = 25;
console.log('Num is:', num, 'and copy is:', copy);

/*
2. একটি অ্যারে তৈরি কর, যার নাম হবে arr এবং সেটাতে [1, 2, 3] থাকবে। সেটি আরেকটি ভ্যারিয়েবলে সেট কর। কপি করা ভ্যারিয়েবলে 88 যোগ কর। তারপর প্রথম এবং কপি করা অ্যারে কনসোল লগ করে দেখ, দুইটা কি ডিফারেন্ট আউটপুট দেখাচ্ছে? */
let arr = [1, 2, 3];
let anotherArr = arr;
anotherArr.push(88);
console.log('This is arr:', arr, 'and this is:', anotherArr);

/*
3. একটি অবজেক্ট বানা, যার নাম হবে language, যার মধ্যে দুটি প্রোপার্টি থাকবে name এবং age। name হবে JS এবং age হবে 30। language অবজেক্টটি একটি নতুন ভ্যারিয়েবল newVersion-এ সেট কর। এরপর newVersion-এ নতুন প্রোপার্টি যোগ কর, যেটার key হবে location এবং value হবে Browser | console.log ব্যবহার করে person এবং newPerson-এর মান দেখাও । */
let language = { name: 'JS', age: 30 };
let newVersion = language;
newVersion.location = 'Browser';
console.log(language);
console.log(newVersion);

/*---------------------------------------------------------------------------------------------------
                                ডিফাইনহীন  undefined
--------------------------------------------------------------------------------------------------*/
/*
2. তুই একটা ভ্যারিয়েবল ডিক্লেয়ার করলি, কিন্তু কোনো ভ্যালু দিলি না। এবার সেটা কনসোলে প্রিন্ট কর আর দেখ, কী আসে। */
let book;
console.log(book);

/*
3. তোর একটা ফাংশন আছে, যা দুইটা নাম্বার যোগ করে, কিন্তু কোনো রিটার্ন স্টেটমেন্ট নেই। এখন ওই ফাংশনটাকে কল করে কনসোলে দেখ, রিটার্ন কী আসছে। */
function name34(a, b) {
  return;
}
console.log(name34(2, 3));

/*
4. [10, 20, 30, 40, 50]। তারপর এর মধ্যে থেকে 2 ইনডেক্স (যেটাতে 30 আছে) এলিমেন্টটি ডিলিট কর। পরে ঐ ইনডেক্সে গিয়ে দেখ, কীরকম আউটপুট আসে।*/
let number = [10, 20, 30, 40, 50];
delete number[2];
console.log(number[2]);

/*
5. যোগ করার একটা ফাংশন লিখে ফেলেছিস function sum(a, b, c) { }। আর এই ফাংশনকে কল করছস sum(5, 10); এইভাবে। এইবার ফাংশনের ভিতরে কনসোল লগ করে দেখ, থার্ড প্যারামিটারের মান কী। কেন সেটা হয়েছে।*/
function sum(a, b, c) {
  console.log(c);
}
sum(5, 10);

/*
6. const student = { name: "serious sojib", roll: 1, masks: 99 }; এই অবজেক্ট থেকে student- এর marks পেতে গেলে কত পাবি। সেটা কেন পাচ্ছস?*/
const student = { name: 'serious sojib', roll: 1, masks: 99 };
console.log(student.marks); // it is undefined because the obj studen contains 'masks' not the 'marks'

/*---------------------------------------------------------------------------------------------------
                                পল্টিবাজ নট (!), ডাবল দিলে কট
--------------------------------------------------------------------------------------------------*/
/*
1. একটা if কন্ডিশনের মধ্যে 'false' লিখে চেক কর। 'false' কি সত্য টাইপের ভ্যালু হিসেবে আচরণ করে, নাকি
করে না। */
if ('false') {
  console.log(true);
} else {
  console.log('False');
}

/*
2. একটা খালি অবজেক্টে { } কোনো প্রোপার্টি নাই। এইটা কী falsy একটা ভ্যালু। চেক কর if-এর ভিতরে শর্ত হিসেবে লিখে। */
if ({}) {
  console.log(true);
} else {
  console.log('False');
}

/*
3. একটা খালি অ্যারে [ ] কোনো উপাদান নাই। এইটা কি truthy ভ্যালু। চেক কর if-এর ভিতরে শর্ত হিসেবে লিখে। */
if ([]) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

/*
4. একটা অ্যারে [ ] আছে, এইটার সামনে !! দিলে কী পাওয়া যাবে। */
console.log(!![]);

/*---------------------------------------------------------------------------------------------------
                                == এর বেইজ্জতি Type coercion
--------------------------------------------------------------------------------------------------*/
/*
1. তুই একটা প্রোগ্রাম লিখে চেক কর, যদি true আর 1 ডাবল ইকুয়াল হয়, তবে “same” দেখাবে, আর না হলে “different” দেখাবে। */
if (true == 1) {
  console.log('same');
} else {
  console.log('different');
}

/*
2. তুই দুইটা আলাদা object তৈরি কর, তারপর ট্রিপল ইকুয়াল দিয়ে চেক কর, তারা সমান কি না। যদি সমান না হয়, তাহলে কেন, তা চিন্তা কর। */
const studentDeatails = { name: 'Faiyaz', id: 305 };
const studentDeatail = { name: 'Faiza', id: 306 };
if (studentDeatails === studentDeatail) {
  console.log('same');
} else {
  console.log('different');
}

/*
3. একটা array তৈরি কর, তারপর আরেকটা ভেরিয়েবলে ওই array টাকে reference হিসেবে রাখ। এবার
ট্রিপল ইকুয়াল দিয়ে চেক কর, এই দুইটা সমান কি না। */
const flower = ['Lily', 'Lotus', 'Rose', 'Delly'];
const flower2 = flower;
if (flower === flower2) {
  console.log('Equal');
} else {
  console.log('Not equal');
}

/*
4. একটা ফাংশন লিখ, যেখানে প্রথম প্যারামিটার হলো কোনো সংখ্যা আর দ্বিতীয় প্যারামিটার হলো boolean | ফাংশনটা চেক করবে, এই দুইটা মান ডাবল ইকুয়াল কি না, আর আউটপুট দেখাবে। */
function name(a, b) {
  if (a == b) {
    console.log('Equal');
  } else {
    console.log('Not equal');
  }
}
name(34, false);

/*
5. খালি string এবং false সমান কি না, সেটা ডাবল ইকুয়াল দিয়ে চেক করে দেখ। */
if ('' == false) {
  console.log("'' and false are equal");
}

/*
6. null এবং undefined-কে ট্রিপল ইকুয়াল দিয়ে তুলনা কর এবং এর আউটপুট কী হয়, তা দেখ। */
if (null == undefined) {
  console.log('null and undefined are equal');
}

/*
7. 1 === '1' চেক কর এবং জাভাস্ক্রিপ্ট কীভাবে টাইপ কনভার্সন করে, তা ব্যাখ্যা কর। */
if (1 === '1') {
  console.log('both are eual');
} else {
  console.log('Not equal');
} /* In JS number and string are two different types. '===' checks both the value and type, so the reslt is 'Not equal'. */

/*---------------------------------------------------------------------------------------------------
                                     কল মি  callback
--------------------------------------------------------------------------------------------------*/
/*
1. একটি ফাংশন লিখ, তার ভিতরে আরেকটি ফাংশন প্যারামিটার হিসেবে পাঠিয়ে তাকে কল কর এবং রেজাল্ট দেখ। */
function country(a, b, c, countryName) {
  countryName(a, b, c);
}
function city(params, params2, params3) {
  console.log('Favourite countries are', params, ',', params2, ',', params3);
}
country('Saudi Arabia', 'Syria', 'Kuwait', city);

/*
2. ফাংশন লিখ, যেটি একটি অবজেক্ট প্যারামিটার নিবে এবং callback-এর মাধ্যমে অবজেক্টের সব কিগুলো
কনসোলে দেখাবে। */
function myTeacher(obj, callback) {
  const keys = Object.keys(obj);
  keys.forEach(element => {
    callback(element);
  });
}

function printKey(key) {
  console.log(key);
}
const teacher = {
  name: 'Mr.Abdur Rahman',
  subject: 'Mathematics',
  age: 40,
  email: 'abdur_rahman.teacher@example.com',
  isActive: true,
};
myTeacher(teacher, printKey);

/*
3. numberProcessor নামে একটি ফাংশন লিখ, যেটি একটি সংখ্যা এবং একটি callback নিবে এবং সংখ্যাটিকে 5 দিয়ে ভাগ করে callback-এর মাধ্যমে আউটপুট দেখাবে। */
function numberProcessor(num, callback) {
  const result = num / 5;
  callback(result);
}
function printNum(answer) {
  console.log(answer);
}
numberProcessor(55, printNum);

/*
4. তুই ফাংশনের ভিতর থেকে অন্য একটা ফাংশন কল করবি, যেমন greeting ফাংশনের ভিতরে greetingHandler()
ফাংশন কল করা হয়েছে। একবার তুই একটা প্রোগ্রাম লিখে দেখ, যেখানে প্রথম ফাংশনটি অন্য ফাংশনকে কল করবে এবং ফাংশনের আউটপুট কনসোলে দেখাবে। */
function greeting() {
  greetingHandler();
}
function greetingHandler() {
  console.log('As-Salamu Alaikum');
}
greeting();

/*---------------------------------------------------------------------------------------------------
                                ফাংশন স্কোপ, লোকাল স্কোপ 
--------------------------------------------------------------------------------------------------*/
/*
1. একটা গ্লোবাল ভেরিয়েবল taxRate ডিক্লেয়ার কর, যার মান হবে 15 । এইখানে taxRate-এর মান বলতে ট্যাক্স রেটের পার্সেন্টেজ বুঝায়। এরপর একটা ফাংশন লিখ, যেটা একজন মানুষের ইনকামকে ইনপুট হিসেবে নিবে। তারপর ফাংশনের ভিতরে taxRate-এর পার্সেন্টেজ ইউজ করে ট্যাক্সের পরিমাণ কত হবে, সেটা রিটার্ন করবে। */
let taxRate = 15;
function taxAmount(income) {
  let totalTax = (income / 100) * taxRate;
  console.log(totalTax);
}
taxAmount(180000);

/*
2. একটা ফাংশন বানা, যেটার মধ্যে let দিয়ে insideSecret নামে ভেরিয়েবল ডিক্লেয়ার কর। এইটার মান হবে “internal secret hiding place” । ফাংশনের বাইরে থেকে insideSecret এক্সেস করতে চেষ্টা কর। */
function name(params) {
  let insideSecret = 'internal secret hiding place';
}
// console.log(insideSecret);  ❌ ReferenceError: insideSecret is not defined

/*
3. if ব্লকের ভিতরে let দিয়ে temperature ভেরিয়েবল ডিক্লেয়ার কর এবং সেই ব্লকের বাইরে থেকে এক্সেস করার চেষ্টা কর। */
if (true) {
  let tempareture = '35'; /* in deg */
}
//console.log(temperature); ❌ ReferenceError: temperature is not defined

/*
4. একটা ফাংশন বানা, যার নাম হবে schoolDetails। এই ফাংশনের ভেতরে school Name নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। এরপর schoolDetails ফাংশনের ভেতরে আরেকটা nested ফাংশন বানা, যার নাম হবে displaySchoolName। এই nested ফাংশন outer ফাংশনের school Name ভেরিয়েবল এক্সেস করে সেটা console এ প্রিন্ট করবে। ফাংশনগুলো কল করার সময় যেন আউটপুটে স্কুলের নাম দেখা যায়। এখন বাহির থেকে schoolDetails ফাংশনকে কল কর। */

function schoolDetails() {
  let schollName = 'Hamankardi Polly Mongal High School';
  function displaySchoolName(params) {
    console.log(schollName);
  }
  displaySchoolName();
}
schoolDetails();
