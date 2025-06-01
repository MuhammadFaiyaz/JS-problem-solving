/*---------------------------------------------------------------------------------------------------
                                  ফাংশন, নো টেনশন
--------------------------------------------------------------------------------------------------*/

/*
1. জুস খাও নামে একটা ফাংশন লিখ। যেটাকে কল করলে আউটপুট দিবে— এই নাও লেবুর জুস। */
function juiceKhao() {
  console.log('Ai nao Lemon juice');
}
juiceKhao();

/* 
2. এখন myRoutine নামে একটা ফাংশন লিখ। এইটার ভিতরে থাকবে, প্রতিদিন সকালে ঘুম থেকে উঠে তুই কী কী কাজ করস, সেগুলার লিস্ট। একটা একটা করে কাজের নাম এক একলাইনে কনসোল লগ দিয়ে লিখবি। */
function myRoutine() {
  console.log('At first take wadu');
  console.log('Complete my Fazr Salat');
  console.log('read Al Quranul Karim');
  console.log('Seat for study');
}
myRoutine();

/*
3. তোর পরিবারের জন্য একটা ফাংশন লিখ। তুই যেকোনো একটা নাম দে। তারপর এইটার মধ্যে তোর যত পরিবারের সদস্য আছে, তাদের নাম এক এক করে আউটপুট করে দেখাবি।*/
function myFamily() {
  console.log('Abir (father)');
  console.log('Meghla (mother)');
  console.log('Bristy (sister)');
}
myFamily();

/*
4. একটা taskDone নামে ফাংশন লিখ। ফাংশনটাতে তোর সারাদিনের ৫টা কাজ একেক লাইনে কনসোল লগ দিয়ে দেখা। */
function taskDone() {
  console.log('Performing All Salat');
  console.log('Reading the Quran');
  console.log('Reading book');
  console.log('Preparing notes');
  console.log('helping the communities');
}
taskDone();

/* 
5. greetMe নামে ফাংশন লিখ। ফাংশন কল করলে আউটপুটে আসবে Good Morning! Have a great day! */
function greetMe() {
  console.log('Good Mornig! Have a great day!');
}
greetMe();

/*
6. তোর সবচেয়ে ক্লোজ তিন বন্ধুর নাম দেখানোর জন্য getFavFriends নামে ফাংশন লিখ। তারপর সেটার ভিতরে তোর ক্লোজ তিন বন্ধুর নাম আউটপুট হিসেবে দেখাবি। */
function getFavFriends() {
  console.log('Saad');
  console.log('Hamza');
  console.log('Talha');
}
getFavFriends();

/* 
7. introduceMyself নামে ফাংশন লিখ। ফাংশন কল করলে তোর নাম, বয়স, ঠিকানা, ফোন নাম্বার, উচ্চতা আর তোর প্রিয় খাবার আউটপুট হিসেবে দেখা। */
function introduceMyself() {
  console.log('Mohammad Faiyaz Khan');
  console.log('21');
  console.log('HamanKardi, Chandpur Sadar');
  console.log('01**********99');
  console.log('5 feet 8 inch');
  console.log('beef & biriani');
}
introduceMyself();

/*---------------------------------------------------------------------------------------------------
                                  এক লিটার প্যারামিটার
--------------------------------------------------------------------------------------------------*/
/*
1. পিতা ও পুত্রের বয়সের সমষ্টি বের করার একটা ফাংশন লিখ। */
function sum_OfAge(fatherAge, sonAge) {
  sum = fatherAge + sonAge;
  console.log(sum);
}
sum_OfAge(41, 23);

/*
2. তোর এক বন্ধু তোকে বলল ক্যালকুলেটর বানাতে, কিন্তু ক্যালকুলেটরে শুধু যোগ বা বিয়োগ করার অপশন থাকলে হবে না। একটা ফাংশন লিখ, যেখানে দুইটা সংখ্যার গুণ বের করে দেখাস। যেমন, যদি 20 আর 15 পাঠালে আউটপুট হবে 300. */
function multiplication(firstNum, secondNum) {
  multiplication = firstNum * secondNum;
  console.log(multiplication);
}
multiplication(20, 15);

/*
3. একটা ফাংশন লিখ, যেটা তিনটা সাবজেক্টের পরীক্ষার মার্কসের সমষ্টি তোকে দিবে। */
function additionOfMarks(sub1, sub2, sub3) {
  addition = sub1 + sub2 + sub3;
  console.log(addition);
}
additionOfMarks(95, 98, 96);

/*
4. বয়স বের করার একটা ফাংশন লিখ। যেটাকে তুই তোর কোন বছর জন্ম, সেটা বলবি। তারপর ফাংশনের ভিতরে এই বছর থেকে তোর জন্মসাল বিয়োগ করলে তোকে বলবে, তুই কত বছর বুইড়া হইছস (মানে তোর বয়স কত হইছে)। */
function my_age(params) {
  my_age = 2025 - params;
  console.log(my_age);
}
my_age(2004);

/*
5. তুই একটা দোকানে গেছিস, যেখানে প্রতিটা লাউ কেনার জন্য 35 টাকা লাগবে। এখন একটা ফাংশন লিখ, যা প্যারামিটার হিসেবে নিবে, তুই লাউয়ের জন্য কত টাকা দিতে চাস। তারপর ভাগ করে বলবে, তুই কয়টা লাউ কিনতে পারবি। */
function guard(params) {
  guard = params / 35;
  console.log(Math.floor(guard));
}
guard(247);

/*
6. একটি ফাংশন লিখ, যেখানে চারটা সংখ্যার গড় বের করবে। */
function average(int1, int2, int3, int4) {
  avg = (int1 + int2 + int3 + int4) / 4;
  console.log(avg);
}
average(23, 86, 567, 89);

/*
7. একজন দোকানদার প্রত্যেকটা আইটেমে 250 টাকা লাভ করে। একটা ফাংশন লিখ, যেখানে কোনো একটা জিনিসের কেনা দাম দিবি, তাহলে সে বিক্রির দাম (selling price) দিবে। */
function profit(buyingPrice) {
  sellingPrice = buyingPrice + 250;
  console.log(sellingPrice);
}
profit(250);

/*
8. একটি ফাংশন লিখ, তারপর সেই ফাংশনকে তোর জন্মসাল প্যারামিটার হিসেবে দিবি। তারপর সে বলে দিবে, কোন বছর তোর বয়স 100 বছর হবে। */
function birthYear(birthYear) {
  centuryYear = birthYear + 100;
  console.log(centuryYear);
}
birthYear(2004);

/*
9. একটি ফাংশন লিখ, যেখানে প্যারামিটার হিসেবে দিবি, প্রতিদিন তুই কয় ঘণ্টা সময় মোবাইল ফোন ইউজ করস। তারপর সেই ফাংশন বের করবে, মাসে তুই কত ঘণ্টা সময় মোবাইল ফোন ইউজ করস। ধরে নে, এক মাসে 30 দিন হয় */
function useMobilePhone(dailyUse) {
  monthlyUse = dailyUse * 30;
  console.log(monthlyUse);
}
useMobilePhone(5); // in hours

/*---------------------------------------------------------------------------------------------------
                              return করোঃ ফাংশনের প্রেম
--------------------------------------------------------------------------------------------------*/

/*
1. একটা ফাংশন লিখ, যাতে কোনো কন্ডিশনের ভিত্তিতে নাম্বার 10-এর বেশি হলে true রিটার্ন করবে, আর না হলে false রিটার্ন করবে। */
function isMoreThan10(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(isMoreThan10(45));

/*
2. তুই একটা ফাংশন লিখ, যা সংখ্যা নিবে আর তারপর সেই সংখ্যা যদি 13 দিয়ে সমানভাবে ভাগ যায়, তাহলে true রিটার্ন দিবে, না হয় false রিটার্ন দিবে। */
function userNumber(userNumber) {
  if (userNumber % 13 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(userNumber(165));

/*
3. তুই একটা রেস্টুরেন্টে গিয়েছিস, সেখানে ভাত (rice), তরকারি (curry) আর ড্রিঙ্কস (drinks) খাবি। একটা ফাংশন লিখ, যাতে খাবারের মোট দাম যোগ করে মোট বিল রিটার্ন করবে। */
function bill(rice, curry, drinks) {
  return rice + curry + drinks;
}
console.log(bill(30, 30, 20));

/*
4. এমন একটা ফাংশন বানা, যেখানে বয়স দিলে সেটি 18-এর বেশি হলে "Eligible for Voting" রিটার্ন করবে, আর না হলে "Not Eligible"। */
function userAge(age) {
  if (age > 18) {
    return console.log('Eligible for voting');
  } else {
    return console.log('Not Eligible ');
  }
}
userAge(21);

/* 
5. একটা ফাংশন লিখ, যেখানে একটি ভেরিয়েবল স্ট্রিং হিসেবে দিবি, আর সেটার দৈর্ঘ্য রিটার্ন করবে।*/
function lengthOfString(string) {
  return console.log(string.length);
}
const myCountry = 'Bangladesh';
lengthOfString(myCountry);

/*
6. তুই একটা ফাংশন লিখ, যা তিনটা সংখ্যার গড় বের করে রিটার্ন করবে। */
function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log(average(34, 40, 49));

/*
7. একটা ফাংশন লিখ, যেটা চেক করবে, কোনো একটা সংখ্যা নেগেটিভ কি না। যদি নেগেটিভ (negative) নাম্বার
হয়, তাহলে সেটাকে -1 দিয়ে গুণ করে রেজাল্ট রিটার্ন করবে। */
function negativeChecker(num) {
  if (num < 0) {
    return num * -1;
  } else {
    return console.log('not a negative number');
  }
}
console.log(negativeChecker(-56));

/*---------------------------------------------------------------------------------------------------
                                    ফাংশনের দংশন
--------------------------------------------------------------------------------------------------*/

/*
1. তোর দেওয়া array-এর মধ্যে যতগুলো উপাদান আছে, উপাদানের সংখ্যা জোড় নাকি বিজোড়, তা চেক কর। ফাংশন লিখে এটা করে দেখ। */
function array(num) {
  const len = num.length;
  if (len % 2 == 0) {
    return 'Even number';
  } else {
    return 'Odd number';
  }
}
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(array(Array));

/*
2. ধর, তোকে এমন একটা ফাংশন বানাতে হবে, যেটাতে একটা নাম পাস করলে সেটার প্রথম অক্ষরটা রিটার্ন করবে। ধর 'Raju' দিলে 'R' রিটার্ন করবে। */
function firstLetter(Name) {
  return Name.charAt(0);
}
console.log(firstLetter('Faiyaz'));

/*
3. তুই একটা ফাংশন বানাবি, যেটাতে একটা সংখ্যা দিবি। ফাংশনটা চেক করবে, সংখ্যাটা 10-এর বড় কি না। বড় হলে 10 দিয়ে ভাগ করবে। আর 10-এর ছোট হলে 10 দিয়ে গুণ করবে। তারপর রেজাল্ট রিটার্ন করবে। */
function checkNumber(params) {
  if (params > 10) {
    const bigNum = params / 10;
    return bigNum;
  } else {
    const smallNum = params * 10;
    return smallNum;
  }
}
console.log(checkNumber(45));

/*
4. একটা ফাংশন বানা, যেটা একটা array নিবে এবং array-এর প্রথম এবং দ্বিতীয় উপাদান যোগ করে যোগফল রিটার্ন করবে। */
function newArray(array) {
  const addition = array[0] + array[1];
  return addition;
}
const totalMarks = [44, 48, 41, 43];
console.log(newArray(totalMarks));

/*
5. একটা ফাংশন বানাবি, যেটা কোনো সংখ্যা n পাবে, আর সেই সংখ্যা দ্বিগুণ করে রিটার্ন করবে, যদি n পজিটিভ হয়। যদি n নেগেটিভ হয়, তাহলে তিনগুণ করে রিটার্ন করবে। */
function makeDoubleOrTriple(num) {
  if (num > 0) {
    return num * 2;
  } else {
    return num * 3;
  }
}
console.log(makeDoubleOrTriple(44));
console.log(makeDoubleOrTriple(-22));

/*
6. তুই এমন একটা ফাংশন লিখবি, যা দুইটা নাম নিবে, প্রথম নাম আর দ্বিতীয় নাম। যদি প্রথম নামের দৈর্ঘ্য দ্বিতীয় নামের দৈর্ঘ্যের চেয়ে বেশি হয়, তাহলে true রিটার্ন করবে, না হলে false । */
function nameComparison(firstName, secondName) {
  if (firstName.length > secondName.length) {
    return true;
  } else {
    return false;
  }
}
console.log(nameComparison('Faiyaz', 'Nayem'));
console.log(nameComparison('Faiyaz', 'Nayeem'));
/*
7. তুই এমন একটি ফাংশন লিখ, যা দুইটি সংখ্যা নিবে এবং তাদের গুণফল রিটার্ন করবে। তবে, গুণফল 100-এর বেশি হলে শুধু তার অর্ধেক রিটার্ন করবে। */
function multiplication(num1, num2) {
  const multiply = num1 * num2;
  if (multiply > 100) {
    return multiply / 2;
  } else {
    return multiply;
  }
}
console.log(multiplication(10, 11));
console.log(multiplication(10, 7));

/*---------------------------------------------------------------------------------------------------
                                ধাপে ধাপে ফাংশনের জংশন
--------------------------------------------------------------------------------------------------*/

/*
1. তোর এক বন্ধুর কাছে কিছু নম্বর আছে: [5, 15, 8, 7]। ওর চাওয়া অনুযায়ী, শুধু বিজোড় সংখ্যাগুলার যোগফল বের করে দে। এই কাজের জন্য একটা ফাংশন লিখে ফলাফলটা রিটার্ন কর। */
function sumOfOddNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 !== 0) {
      sum = sum + number;
    }
  }
  return sum;
}
const friendsNumber = [5, 15, 8, 7];
const total = sumOfOddNumbers(friendsNumber);
console.log(total);

/*
2. একটা ফাংশন লিখে দেখ, যেটা array-এর প্রথম দুইটা উপাদানের মধ্যে যেটা ছোট সেটাকে রিটার্ন করবে।
উদাহরণস্বরূপ, তুই যদি [20, 45, 78] পাঠাস, ফাংশন 20 রিটার্ন করবে। */
function returnSmallElement(elements) {
  if (elements[0] < elements[1]) {
    return elements[0];
  } else {
    return elements[1];
  }
}
const anArray = [20, 45, 7];
const smallElement = returnSmallElement(anArray);
console.log(smallElement);

/*
3. তুই তোর বয়স একটু লুকিয়ে-চুপিয়ে দেখাতে চাস। ধর, তোর বয়স 18-এর কম হলে তুই রিটার্ন 18, আবার 45- এর বেশি হলে তুই বলবি 45, আর এই দুইটার মাঝখানে কোনো সংখ্যা হলে সরাসরি সেই সংখ্যাটা রিটার্ন করে পাঠিয়ে দিবি। এমন একটা ফাংশন লিখ। */
function myAge(age) {
  return age < 18 ? 18 : age > 45 ? 45 : age;
}

console.log(myAge(56));
console.log(myAge(17));
console.log(myAge(34));

/*
4. তোর এক বন্ধুর কাছে একটা array আছে, যেমন: [2, 4, 5, 7, 8, 32, 45]। এখন এমন একটা ফাংশন তৈরি কর, যেটা শুধু array-এর 4 দিয়ে ভাগ যায়, এমন সংখ্যাগুলোর যোগফল দেখাবে। */
function friendArray(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 4 == 0) {
      sum = sum + number;
    }
  }
  return sum;
}
const friendsArray = [2, 4, 5, 7, 8, 32, 45];
const result = friendArray(friendsArray);
console.log(result);

/*
5. একটা ফাংশন লিখ, যা একটি নাম্বার নিবে এবং সেটি যদি 20-এর কম হয়, তবে নাম্বারটিকে দ্বিগুণ করবে, না হলে 20 দিয়ে ভাগ করবে। */
function number20(numbers) {
  if (numbers > 20) {
    return numbers / 20;
  } else {
    return numbers * 2;
  }
}
console.log(number20(45));
console.log(number20(-13));

/*
6. এমন একটা ফাংশন লিখ, যা array-এর মধ্যে শুধু নেগেটিভ সংখ্যাগুলোর যোগফল রিটার্ন করবে। */
function negativeNumberSum(array) {
  let sum = 0;
  for (const num of array) {
    if (num < 0) {
      sum = sum + num;
    }
  }
  return sum;
}
const numberArray = [-2, 4, 7, -22, 67, -26];
console.log(negativeNumberSum(numberArray));

/*
7. একটা ফাংশন লিখ, যা একটি array নিবে এবং array-এর মধ্যে যে সংখ্যাগুলা 3 দিয়ে ভাগ যায়, তাদের গুণফল রিটার্ন করবি। */

function multiplicationNum(array) {
  let sum = 0;
  for (const element of array) {
    if (element / 3) {
      sum = sum + element;
    }
  }
  return element;
}
console.log(multiplicationNum([23, 6, 3, 9, 45]));
