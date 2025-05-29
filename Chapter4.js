/*---------------------------------------------------------------------------------------------------
                                    পাশের বাসার আন্টির তুলনা
  --------------------------------------------------------------------------------------------------*/
/*
1.তুই আর তোর ছোট ভাইয়ের মধ্যে খাবার কে বেশি খেয়েছে, সেটা তুলনা করবি। তুই 7টা স্যান্ডউইচ খেয়েছিস, আর তোর ছোট ভাই 5টা খেয়েছে। একটা প্রোগ্রাম লিখে দেখ, কে বেশি খেয়েছে।
*/
let mySandwiches = 7;
let brotherSandwiches = 5;
console.log(mySandwiches > brotherSandwiches); // true. I eat more sandwiches than my brother

/*
2. তোর ক্লাসে 45 জন ছাত্র আছে, আর পাশের ক্লাসে 50 জন। একটা প্রোগ্রাম লিখে দেখ, কোন ক্লাসে বেশি ছাত্র
আছে।*/
let myClass = 45;
let otherClass = 50;
console.log(myClass < otherClass); // true. Other class has more students than my class.

/*
3. তুই আর তোর বন্ধু পরীক্ষায় নম্বর পেয়েছিস। তুই 75 পেয়েছিস, আর তোর বন্ধু পেয়েছে 75। একটা প্রোগ্রাম লিখে চেক কর, তোর আর তোর বন্ধুর নম্বর সমান কি না। */
let myNumbers = 75;
let friendNumbers = 75;
console.log(myNumbers == friendNumbers); // true. My numbers are equal to my friend's numbers.

/*
4. তুই 100 টাকা জমানোর টার্গেট করেছিস। এখন পর্যন্ত 95 টাকা জমাইছিস। একটা প্রোগ্রাম লিখে চেক কর, তুই টার্গেটে পৌঁছাইছিস কি না বা তার চেয়ে বেশি জমাইছিস কি না ।*/
let myTargetSavings = 100;
let mySavings = 95;
console.log(myTargetSavings >= mySavings); // false. My savings are not equal to my target savings.

/*
5. একটা প্রোগ্রাম লিখে দেখ, 10 এবং 7 কি অসমান (Different)। */
console.log(10 != 7); // true. 10 is not equal to 7.;

/*
6. 
20 কি 15-এর চাইতে কম বা সমান কি না, সেটা চেক কর।*/
console.log(20 <= 15); // false. 20 is not less than or equal to 15.

/*
7. তুই আর তোর বন্ধু একই সাথে পরীক্ষা দিছস। পরীক্ষার দেয়ার পর তোর বন্ধু কেঁদে কেঁদে বুক ভাসিয়ে ফেলছে। তার পরীক্ষা জঘন্য হইছে, সে ফেল করবে। এক মাস পরে রেজাল্টে দেখা গেছে, তুই পাইছস 45 নম্বর আর বন্ধু পাইছে 97 নম্বর। এইবার চেক করে দেখ, তোর বন্ধু কি তোর চাইতে কম নম্বর পাইছে কি না।*/
let myExamScore = 45;
let friendExamScore = 97;
console.log(friendExamScore < myExamScore); // false. My friend's exam score is not less than my exam score.

/*---------------------------------------------------------------------------------------------------
                                    ভারিএবলের তুলনা কখনো ভুলো না
--------------------------------------------------------------------------------------------------*/

/*
1. তোর ছোট ভাইয়ের বয়স 10 বছর, আর তোর বয়স 15 বছর। একটা প্রোগ্রাম লিখে দেখ, তোর ছোট ভাইয়ের বয়স কি তোর বয়স থেকে কম বা সমান কি না। */
let brotherAge = 10;
let myAge = 15;
console.log(brotherAge <= myAge);

/*
2. একটা পরীক্ষায় পাস মার্কস 33। ধর, তুই 45 পেয়েছিস। চেক কর, তুই পাস করেছিস কি না। */
let passScore = 33;
let myScore = 45;
console.log(myScore >= passScore);

/*
3. দুইটা ভেরিয়েবলে জাম্বুরা আর কদবেলের দাম রাখা হলো। জাম্বুরা কি কদবেলের চেয়ে সস্তা কি না, সেটার তুলনা কর। */
let jamburaFruit = 567;
let kodbelFruit = 354;
console.log(kodbelFruit < jamburaFruit); // true. Kodbel fruit is cheaper than jambura fruit.

/*
4. তুই 10টা বই পড়েছিস, আর তোর বন্ধু পড়ছে 10টা। চেক কর, তোরা কি সমান সংখ্যক বই পড়েছিস কি না। 
*/
let myFinishedBooks = 10;
let myFriendReadingBooks = 12;
console.log(myFinishedBooks == myFriendReadingBooks); // false. My finished books are not equal to my friend's reading books.

/*
5. তোর কাছে 15টা বিস্কুট আর তোর বন্ধুর কাছে 20টা। চেক কর, তুই কি তোর বন্ধুর থেকে কম বিস্কুট পেয়েছিস কি না।*/
let myBuiscuits = 15;
let myFriendBuiscuits = 20;
console.log(myBuiscuits < myFriendBuiscuits); // true. My buiscuits are less than my friend's buiscuits.

/*
6. একটা ফুটবল ম্যাচে রিয়াল মাদ্রিদ 2টা গোল করছে, আর বার্সা 3টা গোল করছে। চেক কর, রিয়াল মাদ্রিদ কি বার্সার চেয়ে কম গোল করেছে কি না।*/

let realMadridGoals = 2;
let barcelonaGoals = 3;
console.log(realMadridGoals < barcelonaGoals); // true. Real Madrid score less goals than barcelona.

/*
7. তোর নাম "Rahim", আর তোর বন্ধুর নাম "Karim"। চেক কর, তোর নাম কি তোর বন্ধুর নামের সমান কি না।*/
let myName = 'Rahim';
let myFriendName = 'Karim';
console.log(myName == myFriendName); // false. My name is not equal to my friend's name.

/*
৪. তুই আজকে পড়াশোনা করেছিস(true), আর তোর বন্ধু পড়াশোনা করেনি(false)। চেক কর, তোরা কি একই রকম কাজ করেছিস কি না।*/
let myStudy = true;
let myFriendStudy = false;
console.log(myStudy == myFriendStudy); // false. My study is not equal to my friend's study.

/*---------------------------------------------------------------------------------------------------
                                    ডাবল নাকি ট্রিপল ===
--------------------------------------------------------------------------------------------------*/

/*
1. তোর কাছে 50 টাকা আছে, আর বন্ধুর কাছে আছে "50" টাকা (স্ট্রিং হিসেবে)। একটা প্রোগ্রাম লিখে দেখ, 50 == "50" দিলে আর 50 === "50" দিলে আউটপুট কী আসবে। */
let myMoney = 50;
let myFriendMoney = '50';
console.log(myMoney == myFriendMoney); // true. My money is equal to my friend's money.
console.log(myMoney === myFriendMoney); // false. My money is not equal to my friend's money.

/*
2. তোর প্রোগ্রামিং নোটবুকে "JavaScript" লিখে রেখেছিস, আর এটা একটা স্ট্রিং টাইপ ডাটা। এখন তুই দেখতে  চাস "JavaScript" ==  'JavaScript' আর "JavaScript"=== 'JavaScript' দিলে কী আউটপুট আসবে। ব্যাখ্যা কর, কেন একই আউটপুট আসছে। */
let programmingLanguage = 'JavaScript';
let programmingLanguage2 = 'JavaScript';
console.log(programmingLanguage == programmingLanguage2); // true. My programming language is equal to my friend's programming language.
console.log(programmingLanguage === programmingLanguage2); // true. My programming language is equal to my friend's programming language. The main reason is that both are string type. There will no effect if we use double or single quotes as both mean the same data type.

/*
3. একটা প্রোগ্রাম লিখে দেখ, 25 এবং "25"-এর মধ্যে 25 == "25" এবং 25 === "25" দিলে কী আউটপুট আসবে এবং কেন সেটা হয়, সেটা কমেন্ট করে লিখ। */
let newNumber = 25;
let newNumber2 = '25';
console.log(newNumber == newNumber2); // true. My new number is equal to my friend's new number.
console.log(newNumber === newNumber2); // false. My new number is not equal to my friend's new number. The main reason is that one is number type and the other is string type. So, they are not equal.

/*
4. "apple" এবং "apple" লিখে তুলনা করলে, "apple"=="apple" এবং "apple"==="apple"-এর আউটপুট কী হবে। */
let fruit = 'apple';
let fruit2 = 'apple';
console.log(fruit == fruit2); // true. My fruit is equal to my friend's fruit. Because boyh contains the same string value.
console.log(fruit === fruit2); // true. My fruit is equal to my friend's fruit. Because boyh contains the same string value and both are string type.

/*
5. একটা প্রোগ্রাম লিখে দেখ, "test" এবং "TEST"-এর মধ্যে "test" == "TEST" এবং "test" === "TEST"-এর
আউটপুট কী হবে। */
let strangeVariable = 'test';
let strangeVariable2 = 'TEST';
console.log(strangeVariable == strangeVariable2); // false.
console.log(strangeVariable === strangeVariable2); // false. The main reason is that both are string type but the value is not equal. So, they are not equal

/*
6. variableX-এর মান 15 আর variableY-এর মান "20" দিলে variableX ! = variabley এবং variableX !== variableY-এর আউটপুট কী হবে। */
let variableX = 15;
let variableY = '20';
console.log(variableX != variableY); // true. The main reason is that both are number type and string type. So, they are not equal.
console.log(variableX !== variableY); // true. The main reason is that both are number type and string type. So, they are not equal.

/*
7. variableA-এর মান hello আর variableB-এর মান "Hello"। এখন variableA == variableB এবং variableA == variableB চেক করার প্রোগ্রাম লিখো। */
let variableA = 'hello'; // in the book page no:- 73 , writter wrote hello which is not correct as ther is no quotation mark. so It will show us reference error. Hence, I added quotation mark to make it a string.
let variableB = 'Hello';
console.log(variableA == variableB); // false. The main reason is the value is not equal.
console.log(variableA === variableB); // false.Though the value is equal, the value is not equal.
