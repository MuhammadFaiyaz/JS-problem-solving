// পাশের বাসার আন্টির তুলনা

let mySandwiches = 7;
let brotherSandwiches = 5;
console.log(mySandwiches > brotherSandwiches); // true. I eat more sandwiches than my brother

let myClass = 45;
let otherClass = 50;
console.log(myClass < otherClass); // true. Other class has more students than my class.

let myNumbers = 75;
let friendNumbers = 75;
console.log(myNumbers == friendNumbers); // true. My numbers are equal to my friend's numbers.

let myTargetSavings = 100;
let mySavings = 95;
console.log(myTargetSavings >= mySavings); // false. My savings are not equal to my target savings.

console.log(10 != 7); // true. 10 is not equal to 7.;

console.log(20 <= 15); // false. 20 is not less than or equal to 15.

let myExamScore = 45;
let friendExamScore = 97;
console.log(friendExamScore < myExamScore); // false. My friend's exam score is not less than my exam score.

// ভারিএবলের তুলনা কখনো ভুলো না

let brotherAge = 10;
let myAge = 15;
console.log(brotherAge <= myAge);

let passScore = 33;
let myScore = 45;
console.log(myScore >= passScore);

let jamburaFruit = 567;
let kodbelFruit = 354;
console.log(kodbelFruit < jamburaFruit); // true. Kodbel fruit is cheaper than jambura fruit.

let myFinishedBooks = 10;
let myFriendReadingBooks = 12;
console.log(myFinishedBooks == myFriendReadingBooks); // false. My finished books are not equal to my friend's reading books.

let myBuiscuits = 15;
let myFriendBuiscuits = 20;
console.log(myBuiscuits < myFriendBuiscuits); // true. My buiscuits are less than my friend's buiscuits.

let realMadridGoals = 2;
let barcelonaGoals = 3;
console.log(realMadridGoals < barcelonaGoals); // true. Real Madrid score less goals than barcelona.

let myName = 'Rahim';
let myFriendName = 'Karim';
console.log(myName == myFriendName); // false. My name is not equal to my friend's name.

let myStudy = true;
let myFriendStudy = false;
console.log(myStudy == myFriendStudy); // false. My study is not equal to my friend's study.

// ডাবল নাকি ট্রিপল ===

let myMoney = 50;
let myFriendMoney = '50';
console.log(myMoney == myFriendMoney); // true. My money is equal to my friend's money.
console.log(myMoney === myFriendMoney); // false. My money is not equal to my friend's money.

let programmingLanguage = 'JavaScript';
let programmingLanguage2 = 'JavaScript';
console.log(programmingLanguage == programmingLanguage2); // true. My programming language is equal to my friend's programming language.
console.log(programmingLanguage === programmingLanguage2); // true. My programming language is equal to my friend's programming language. The main reason is that both are string type. There will no effect if we use double or single quotes as both mean the same data type.

let newNumber = 25;
let newNumber2 = '25';
console.log(newNumber == newNumber2); // true. My new number is equal to my friend's new number.
console.log(newNumber === newNumber2); // false. My new number is not equal to my friend's new number. The main reason is that one is number type and the other is string type. So, they are not equal.

let fruit = 'apple';
let fruit2 = 'apple';
console.log(fruit == fruit2); // true. My fruit is equal to my friend's fruit. Because boyh contains the same string value.
console.log(fruit === fruit2); // true. My fruit is equal to my friend's fruit. Because boyh contains the same string value and both are string type.

let strangeVariable = 'test';
let strangeVariable2 = 'TEST';
console.log(strangeVariable == strangeVariable2); // false.
console.log(strangeVariable === strangeVariable2); // false. The main reason is that both are string type but the value is not equal. So, they are not equal

let variableX = 15;
let variableY = '20';
console.log(variableX != variableY); // true. The main reason is that both are number type and string type. So, they are not equal.
console.log(variableX !== variableY); // true. The main reason is that both are number type and string type. So, they are not equal.

let variableA = 'hello'; // in the book page no:- 73 , writter wrote hello which is not correct as ther is no quotation mark. so It will show us reference error. Hence, I added quotation mark to make it a string.
let variableB = 'Hello';
console.log(variableA == variableB); // false. The main reason is the value is not equal.
console.log(variableA === variableB); // false.Though the value is equal, the value is not equal.
