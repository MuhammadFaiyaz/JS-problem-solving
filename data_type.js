//type দেখে হাইপ

const myImage = './images/dataType.jpg';
console.log(myImage); // string
const price = 555;
console.log(typeof price); // number

const learning = true;
console.log(learning);
console.log(typeof learning); // boolean

const megaCity = 'Dhaka';
console.log(typeof megaCity); // string

const temparature = 102.5;
console.log(typeof temparature); // number

const isHungry = true;
console.log(typeof isHungry); // boolean

const isRich = true;
console.log(typeof isRich); // boolean

// let দিএ শুরু, বদলাবে গুরু

let age = 21;
console.log(age);
age = 25;
console.log(age);

let pocketMoney = 500;
pocketMoney = 150;
console.log(pocketMoney);

let studyTime = 4;
studyTime = 1;
console.log(studyTime);

let friendsCount = 3;
friendsCount = 1;
console.log(friendsCount);

let phonePrice = 25000;
phonePrice = 12000;
console.log(phonePrice);

let chairsCount = 40;
chairsCount = chairsCount - 2;
chairsCount = chairsCount - 6;
console.log(chairsCount);

let playTime = 3;
playTime = 0;
console.log(playTime);

// comment এর সিমেন্ট

let score = 227; // today zimbabwe made 227 runs against bangladesh in the 1st ODI match

let radius = 5;
// it is the
//  radius of
// a circle

let dress = 10;
/* these are my favorite. 
they are very beautiful.
they are very expensive. */

let giftMoney = 100; // this is my eid selami or bonus money

let stdyTime = 4; /* this is my study time in hours
                    I will study 2 hours in the morning and 2 hours in the evening.
                    I will study math and english. these are my favorite subjects.
                    i have to memorize some important topics. besides, I have to practice some math problems. I will also practice some english grammar and writing skills.*/

let sendMoney = 1050; // this is my pocket money. I will send this money to my friend. he will get 1000 taka. the service charge is 50 taka. so, I will send 1050 taka.

let pay = 730; //  I am paying 671 taka. the delivery fee is 59 taka. total payment is 730 taka.

// ও মেয়ে, তোর name দিবো কি?
let favoriteFood = 'Biriyani';

let city = 'Chittagong';
let City = 'Dhaka';
console.log(city);
console.log(City);

let userName = 'Johan';
let username = 'Jovan';
console.log(userName);
console.log(username);

let homeAddress = 'GT Road/1200, Demra, Dhaka';

/*
let super = 45;
console.log(super);*/ // invalid variable name

/*
let class = 'Honors 1st year';
console.log(class); // invalid variable name */

// The method of variable declaration is wrong given below. We cannot declare a variable with a number at the beginning. But we can declare a variable with a number at the middle or end.
/*
let 2ndPosition = 'Hashim Amla'; // invalid variable name
*/

// Parse এর ভিতর নানরুটি (NaN)
let funnyNumber = '20';
let funnyNumberInt = parseInt(funnyNumber);
console.log(funnyNumberInt + 10);

let valueOf_Pie = '3.14159';
let valueOf_PieInInteger = parseInt(valueOf_Pie);
console.log(valueOf_PieInInteger);

let playBoy = 'premikBoy';
console.log(parseInt(playBoy));

let num1 = 3.456;
let num2 = 2.789;
let sum = num1 + num2;
console.log(sum.toFixed(2));

let string1 = '56.78';
let string2 = '12.34';
let num3 = parseFloat(string1);
let num4 = parseFloat(string2);
let sum2 = num3 + num4;
console.log(sum2);

let float1 = '10.5678';
let float2 = '5.4321';
let num5 = parseFloat(float1);
let num6 = parseFloat(float2);
let sum3 = num5 + num6;
console.log(sum3.toFixed(1));

let float3 = '42.45689754';
console.log(parseFloat(float3).toFixed(3)); // 42.457
