/*---------------------------------------------------------------------------------------------------
                                  default ফ্রেন্ডজোন
--------------------------------------------------------------------------------------------------*/
/*
1. এমন একটি ফাংশন তৈরি কর যা তিনটি সংখ্যার যোগফল বের করবে। ডিফল্ট মান হিসেবে প্রতিটি প্যারামিটারের জন্য 0 সেট কর। */
function sumOf3Numbers(num1 = 0, num2 = 0, num3 = 0) {
  const sum = num1 + num2 + num3;
  return sum;
}
const theNumbers = sumOf3Numbers(45, 21, 34);
console.log(theNumbers);

/*
2. তুই এমন একটি ফাংশন লিখবি, যেখানে টাকা জমা দেওয়ার সুযোগ থাকবে। যদি কোনো টাকার পরিমাণ না দেওয়া হয়, তাহলে জমা হিসেবে ডিফল্ট 50 টাকা দেখাবে। */
function payment(money = 50) {
  return money;
}
console.log(payment());
console.log(payment(70));

/*
3. এমন একটি ফাংশন তৈরি কর, যেখানে নাম আর তার মাসিক আয় নিবি। যদি নাম না দেওয়া হয়, তাহলে ডিফল্ট হিসেবে anonymous ইউজ করবি। আর মাসিক আয় দেয়া না থাকলে সেখানে ডিফল্ট হিসেবে 0 ইউজ করবি। */
function userInformation(name = 'Anonymomus', salary = 0) {
  return {
    name: name,
    salary: salary,
  };
}
console.log(userInformation('Faiyaz', 20000));
console.log(userInformation());

/*
 4. এমন একটি ফাংশন লিখ, যা একটি সংখ্যা নেবে এবং সেটার বর্গ বের করবে। যদি সংখ্যা না দেওয়া হয়, সেটার
ডিফল্ট মান 1 রাখ। */
function squareReturn(value = 1) {
  return value * value;
}
console.log(squareReturn(33));
console.log(squareReturn());

/*
5. এমন একটি ফাংশন বানা, যেটা কোনো পণ্যের নাম ও তার মূল্য নিবে। যদি নাম না দেওয়া হয়, তাহলে
"Unknown product" এবং মূল্য না থাকলে 1 সেট কর। */
function productDetails(name = 'Unknown product', price = 1) {
  return {
    name: name,
    price: price,
  };
}
console.log(productDetails('Book Shelf', 5500));
console.log(productDetails());

/*
6. একটা ফাংশন তৈরি কর, যা তোর সব প্রিয় বইয়ের নাম অ্যারে প্যারামিটার হিসেবে নিবে। যদি কোনো প্যারামিটার না পাঠানো হয়, তাহলে ডিফল্ট একটা অ্যারে রাখবি, সেটার মধ্যে একটা মান থাকবে JS book নামে। */
function favouriteBooks(bookName = ['JS book']) {
  return bookName;
}
console.log(
  favouriteBooks([
    "The Noble Qur'an (with English Translation)",
    'Sahih al-Bukhari',
    'Sahih Muslim',
    'Riyad as-Salihin - An-Nawawi',
    'Aqeedah al-Waasitiyyah -Imam Ibn Taymiyyah',
    'Fundamentals of Tawheed - Dr. Abu Ameenah Bilal Philips',
  ])
);
console.log(favouriteBooks());

/*
7. একটি ফাংশন তৈরি কর, যেখানে একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে price এবং quantity থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট মান হিসেবে price 10 এবং quantity 1 সেট কর। ফাংশন total price রিটার্ন করবে। */
function product({ price = 10, quantity = 1 } = {}) {
  return price;
}
console.log(product({ price: 300, quantity: 20 }));
console.log(product());

/*
8. এমন একটি ফাংশন বানা, যেখানে একটি অ্যারে প্যারামিটার নিবে। প্রতিটি উপাদানকে 2 দিয়ে গুণ করে নতুন অ্যারে রিটার্ন করবে। যদি অ্যারে না দেওয়া হয়, ডিফল্ট হিসেবে [5, 10, 15] সেট কর। */
function arrayMaster(array = [5, 10, 15]) {
  const newArray = [];
  for (const element of array) {
    newArray.push(element * 2);
  }
  return newArray;
}
console.log(arrayMaster([2, 4, 6, 8]));
console.log(arrayMaster());

/*
9. একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে principal এবং rate থাকবে। যদি অবজেক্ট না পাঠানো হয়, ডিফল্ট principal 1000 এবং rate 5 রাখ। ফাংশন simple interest হিসাব কর, এই ফর্মুলা দিয়ে (principal * rate / 100), তাহলে রেজাল্ট রিটার্ন করবে। */
function simpleInterest({ principal = 1000, rate = 5 }) {
  const result = (principal * rate) / 100;
  return result;
}
console.log(simpleInterest({}));
console.log(simpleInterest({ principal: 3000, rate: 120 }));

/*
10. একটি ফাংশন তৈরি কর, যা একটি অবজেক্ট প্যারামিটার নিবে। অবজেক্টে salary এবং tax থাকবে। যদি
অবজেক্ট না পাঠানো হয়, ডিফল্ট salary 50000 এবং tax 10 সেট কর। ফাংশন এর ভিতরে ট্যাক্স এর পার্সেন্ট
দিয়ে ট্যাক্স এর টাকার পরিমান বের করবি তারপর স্যালারি থেকে ট্যাক্স এর টাকার পি পরিমান বিয়োগ করে
রেজাল্ট রিটার্ন করবি। */
function taxChecker({ salary = 50000, tax = 10 }) {
  const taxAmount = (salary * tax) / 100;
  const result = salary - taxAmount;
  return result;
}
console.log(taxChecker({ salary: 250000, tax: 20 }));
console.log(taxChecker({}));

/*---------------------------------------------------------------------------------------------------
                                Template String ডিসটিং ডিসটিং
--------------------------------------------------------------------------------------------------*/
/*
1. টেমপ্লেট স্ট্রিংয়ের মাধ্যমে দুটি সংখ্যার বিয়োগফল দেখা। যেমন: The difference between 100 and 20 is 801 */
const firstNumber = 100;
const secondNumber = 20;
console.log(
  `The difference between ${firstNumber} and ${secondNumber} is ${
    firstNumber - secondNumber
  }`
);

/*
2. একটি অবজেক্ট employee তৈরি কর, যেখানে name, age এবং salary থাকবে। টেমপ্লেট স্ট্রিং দিয়ে তার নাম, বয়স এবং স্যালারি দেখা। */
const employee = {
  name: 'Faiyaz',
  age: 25,
  salary: 50000,
};
console.log(
  `Emplyoee name is ${employee.name}, age is ${employee.age} and his salary is ${employee.salary} Tk.`
);

/*
3. fruits নামে একটি অ্যারে তৈরি কর। টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা যে, তোর পছন্দের তৃতীয় ফলটি কী। 50 এবং const b = 10 থাকলে টেমপ্লেট স্ট্রিং দিয়ে দেখা The division of a and b is 5 । */
const fruits = ['Apple', 'Banana', 'Orange'];
console.log(`My favourite fruit is ${fruits[2]}.`);

/*
4. const a = 50 এবং const b = 10 থাকলে টেমপ্লেট স্ট্রিং দিয়ে দেখা The division of a and b is 10. */
const a = 50;
const b = 10;
console.log(`The division of a and b is ${a / b}.`);

/*
5. const person = { firstName: "Amit", lastName: "Kumar" }; টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা Full Name: Amit Kumar | */
const person = {
  firstName: 'Amit',
  lastName: 'Kumar',
};
console.log(`Full name: ${person.firstName} ${person.lastName}.`);

/*
6. একটি অ্যারে animals = ["Cat", "Dog", "Elephant"] তৈরি কর এবং টেমপ্লেট স্ট্রিং ব্যবহার করে দেখা My favorite animals are Cat, Dog, Elephant */
const animals = ['Cat', 'Dog', 'Elephant'];
console.log(`My favourite animals are ${animals.join(', ')}`);

/*
7. তোর কাছে স্টুডেন্ট নামে একটা অবজেক্ট আছে, সেই স্ট্রিংয়ের মধ্যে তার নাম আছে, তার বয়স আছে এবং তার তিনটা সাবজেক্টের মার্কস দেয়া আছে results নামক একটা প্রোপার্টির মধ্যে। যেটার মান একটা অ্যারে। এখন তোর কাজ হবে একটা টেমপ্লেট স্ট্রিং দিয়ে একটা স্ট্রিংয়ের মধ্যে এই স্টুডেন্টের নাম, তার তিনটা সাবজেক্টের রেজাল্টের গড় দেখানো। গড় দেখানোর জন্য তিনটা সাবজেক্টের মান যোগ করে তিন দিয়ে ভাগ করবি। */
const student = {
  name: 'Faiyaz',
  age: 25,
  results: [87, 90, 84],
};
const subjectAvg =
  student.results.reduce((sum, mark) => sum + mark, 0) / student.results.length;
console.log(
  `Student name: ${student.name}, average of ressults: ${subjectAvg}`
);

/*---------------------------------------------------------------------------------------------------
                                তির ধনুকের arrow function
--------------------------------------------------------------------------------------------------*/
/*
1. একটি array-এর প্রথম ইনডেক্সের মান রিটার্ন করবে, এমন একটা অ্যারো ফাংশন লিখ। */
const getFirstIndex = array => array[0];
const first = getFirstIndex([10, 20, 30, 40]);
console.log(first);

/*
2. তিনটি সংখ্যা নিয়ে তাদের গুণফল রিটার্ন করে, এমন একটা অ্যারো ফাংশন লিখ। */
const multiplyThreeNumbers = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiplyThreeNumbers(2, 3, 4));

/*
3. এমন একটি arrow function তৈরি কর, যা কোনো প্যারামিটার নেয় না শুধু "unknown" রিটার্ন করে।*/
const noParam = () => 'unknown';
console.log(noParam());

/*
4. একটি object-এর মধ্যে নাম এবং পকেটে কত টাকা আছে এমন দুইটা প্রপার্টি আছে। এখন এমন একটা অ্যারো
ফাংশন লিখ, যেটা টাকার পরিমাণকে 5 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।  */
const garmentWorker = {
  name: 'Rafat',
  money: 2000,
};
const divideMoney = () => garmentWorker.money / 5;
console.log(divideMoney());

/*
5. জাভাস্ক্রিপ্টে কোনো একটা অ্যারের শেষ উপাদান পাওয়ার জন্য শেষ উপাদানের ইনডেক্স বের করতে হয়। শেষ উপাদানের ইনডেক্স বের করার সিস্টেম হচ্ছে, অ্যারের লেংথ বের করে সেটা থেকে 1 বিয়োগ করবি। এইটা আগে একটু প্র্যাকটিস করে ফেল। তারপর একটি array-এর প্রথম ও শেষ উপাদান যোগ করে যোগফল রিটার্ন করবে, এমন একটা arrow function লিখে ফেল। */
const myNumber = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const sum = array => array[0] + array[array.length - 1];
console.log(sum(myNumber));

/*
6. এমন একটা ফাংশন তৈরি কর, যা দুইটা সংখ্যা যোগ করবে। প্রথম সংখ্যা না থাকলে 10, আর দ্বিতীয় সংখ্যা না থাকলে 5 ধরে যোগফল দেখাবে। এইটা Arrow function দিয়ে করবি। */
const sum2 = (number1 = 10, number2 = 5) => number1 + number2;
console.log(sum2(20, 30));
console.log(sum2());
