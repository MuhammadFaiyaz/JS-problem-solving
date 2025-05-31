/*---------------------------------------------------------------------------------------------------
                                  Loop- এর লুটপাট
--------------------------------------------------------------------------------------------------*/
/*
1. তুই 5টা পছন্দের সাবজেক্টের নাম লেখ। তারপর প্রোগ্রাম লিখে দেখ, কীভাবে লুপ ব্যবহার করে সব সাবজেক্টের নাম আলাদাভাবে প্রিন্ট হবে। */
let favouriteSubjects = ['Aqidah', 'Quran Hifj', 'Hadis', 'Tafsir', 'Tarikh'];
for (const favouriteSubject of favouriteSubjects) {
  console.log(favouriteSubject);
}

/*
2. তোর একদম পছন্দের খাবার গুলোর নাম লেখ। এখন লুপ ব্যবহার করে প্রোগ্রাম লিখে দেখ, কীভাবে সব খাবারের নাম আলাদা আলাদা করে প্রিন্ট হবে। */
let deliciousFoods = [
  'Beef',
  'Mutton',
  'Deshi Chicken',
  'Biriani',
  'Curd',
  'Sweet',
  'Milk',
];
for (const deliciousFood of deliciousFoods) {
  console.log(deliciousFood);
}

/*
3. একটা অ্যারের মধ্যে তোর ফ্যামিলি মেম্বারদের জন্মসাল লিখে ফেল। তারপর লুপ চালিয়ে সবার জন্মসাল আউটপুট
হিসেবে দেখা। */
let dateOfBirth = [' 2000', ' 2001', ' 2002', ' 2003', ' 2004', ' 2005'];
for (const date of dateOfBirth) {
  console.log(date);
}

/*
4. ক্রিকেট বা ফুটবল খেলায় তোর প্রিয় একাদশের একটা টিম বানিয়ে তোর প্রিয় খেলোয়াড়দের নাম একটা অ্যারের মধ্যে রাখ। তারপর কনসোল লগ করে সব খেলোয়াড়দের নাম আউটপুট হিসেবে দেখবি। */
let bangladeshCricketers = [
  'Tanzim Hasan',
  'Muhammad Mrittunjoy',
  'Mashrafe Mortaza',
  'Tamim Iqbal',
  'Mahmudullah Riyad',
  'Mushfiqur Rahim',
  'Mustafizur Rahman',
  'Sabbir Rahman',
  'Rubel Hossain',
  'Shafiul Islam',
  'Mohammad Saifuddin',
];
for (const bangladeshCricketer of bangladeshCricketers) {
  console.log(bangladeshCricketer);
}

/*
5. নেক্সট কবে কবে তোর পরীক্ষা আছে, সেই তারিখগুলা অ্যারের মধ্যে লিখে ফেল। তারপর লুপ ব্যবহার করে পরীক্ষার তারিখগুলা কনসোল লগ কর। */
let examDates = ['1 January', '2 February', '3 March', '4 April', '5 May'];
for (const examDate of examDates) {
  console.log(examDate);
}

/*---------------------------------------------------------------------------------------------------
                                  While পাতলা ডাইল
--------------------------------------------------------------------------------------------------*/
/*
1. while লুপ দিয়ে 10 বার কনসোল লগ কর। আমি প্রতিদিন মিনিমাম 3 ঘণ্টা করে প্রোগ্রামিং প্র্যাকটিস করব। */
let programming = 0;
while (programming < 10) {
  console.log('I will practice programming 3 hours daily');
  programming++;
}

/*2. তুই 1 থেকে 20 পর্যন্ত সংখ্যা লিখবি একটা while লুপ দিয়ে। */
let initial = 1;
while (initial < 21) {
  console.log(initial);
  initial++;
}

/*
3. while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর। */
let initialValue = 50;
while (initialValue <= 100) {
  console.log(initialValue);
  initialValue++;
}

/*
4. একটি while লুপ দিয়ে 1 থেকে 10 পর্যন্ত সংখ্যাগুলো প্রিন্ট করার সময় সংখ্যাগুলাকে 3 দিয়ে গুণ করে
ফেলবি। তাহলে কিন্তু 3-এর নামটা হয়ে যাবে। */
let initialVALUE = 1;
while (initialVALUE <= 10) {
  console.log(initialVALUE * 3);
  initialVALUE++;
}

/*
5. একটি while লুপ দিয়ে 111 থেকে 110 পর্যন্ত সংখ্যাগুলো প্রিন্ট করার সময় সংখ্যাগুলাকে 2 দিয়ে ভাগ করে ফেলবি। */
let initialValue1 = 111;
while (initialValue1 >= 110) {
  console.log(initialValue1 / 2);
  initialValue1--;
}

/*---------------------------------------------------------------------------------------------------
                                  লুপ দিয়ে যোগফল
--------------------------------------------------------------------------------------------------*/

/*
1. while লুপ দিয়ে 50 থেকে 100 পর্যন্ত সংখ্যা প্রিন্ট কর। */
let startingNumber = 50;
while (startingNumber <= 100) {
  console.log(startingNumber);
  startingNumber++;
}

/*
2. while লুপ দিয়ে 5 থেকে 15 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর। */
let startingNumber1 = 5;
let sum = 0;
while (startingNumber1 <= 15) {
  sum = sum + startingNumber1;
  startingNumber1++;
}
console.log('Sum:', sum);

/*
3. তুই এক স্কুলে 1 থেকে 50 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটা while লুপ ব্যবহার করে সেই
সংখ্যাগুলোর যোগফল বের কর। */
let studentRoll = 1;
let sumOfRoll = 0;
while (studentRoll <= 50) {
  sumOfRoll = sumOfRoll + studentRoll;
  studentRoll++;
}
console.log('Sum of Roll:', sumOfRoll);

/*
4. while লুপ ব্যবহার করে 21 থেকে 50 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং প্রতিবারের যোগফল দেখাবি। */
let numbers = 21;
let sumOfNumbers = 0;
while (numbers <= 50) {
  sumOfNumbers = sumOfNumbers + numbers;
  console.log(sumOfNumbers);
  numbers++;
}
console.log('Sum of Numbers:', sumOfNumbers);

/*
5. 20 থেকে 40 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং শুধু ফাইনাল যোগফলটা আউটপুট হিসেবে দেখবি। */
let NUM = 20;
let sumOfNUM = 0;
while (NUM <= 40) {
  sumOfNUM = sumOfNUM + NUM;
  NUM++;
}
console.log('Sum:', sumOfNUM);

/*---------------------------------------------------------------------------------------------------
                                  For লুপের খিচুড়ি
--------------------------------------------------------------------------------------------------*/
/*
1. For লুপ দিয়ে 150 থেকে 170 পর্যন্ত সংখ্যা প্রিন্ট কর। */
for (let i = 150; i <= 170; i++) {
  console.log(i);
}

/*
2. তুই এক স্কুলে 31 থেকে 58 পর্যন্ত ছাত্রদের রোল নম্বর লিস্ট করবি, তারপর একটা for লুপ ব্যবহার করে সেই
সংখ্যাগুলোর যোগফল বের কর। */
let summationOfRoll = 0;
for (let index = 31; index <= 58; index++) {
  console.log(index);
  summationOfRoll = summationOfRoll + index;
}
console.log('Sum of Roll:', summationOfRoll);

/*
3. For লুপ দিয়ে 25 থেকে 75 পর্যন্ত সংখ্যাগুলোর যোগফল বের কর এবং যোগফল শেষে প্রিন্ট কর। */
let add = 0;
for (let index = 25; index <= 75; index++) {
  add = add + index;
}
console.log('Sum of num: ', add);

/*---------------------------------------------------------------------------------------------------
                                  জোড় বিজোড় লুপের শর্ত
--------------------------------------------------------------------------------------------------*/
/*
1. তোর কাজ হবে 20 থেকে 50 পর্যন্ত যে সকল সংখ্যা 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা। */
for (let index = 20; index <= 50; index += 1) {
  if (index % 7 == 0) {
    console.log(index);
  }
}

/*
2. এইবার 40 থেকে 40 পর্যন্ত যে সকল সংখ্যা 5 দিয়ে এবং 7 দিয়ে বিভাজ্য, তা আউটপুট হিসেবে দেখা। */
for (let index = 40; index <= 80; index++) {
  if (index % 7 == 0 && index % 5 == 0) {
    console.log(index);
  }
}

/*
3. এখন তোর প্রবলেম হলো 1 থেকে 40 পর্যন্ত যে সকল সংখ্যা 13 দিয়ে বিভাজ্য, তাদের যোগফল কর। */
let newSum = 0;
for (let index = 1; index <= 40; index++) {
  if (index % 13 == 0) {
    newSum = newSum + index;
  }
}
console.log('Total :', newSum);

/*
4. For লুপ দিয়ে 1 থেকে 50 পর্যন্ত লুপ চালাবি। তবে লুপ চালানোর সময় লুপ ভেরিয়েবলের মান প্রত্যেকবার 4 করে বাড়াবি। */
for (let index = 1; index <= 50; index += 4) {
  console.log(index);
}

/*
5. 0 থেকে 100 পর্যন্ত সব সংখ্যাগুলো প্রিন্ট কর, যা 9 এবং 6 দিয়ে বিভাজ্য। */
for (let index = 0; index <= 100; index++) {
  if (index % 9 == 0 && index % 6 == 0) {
    console.log(index);
  }
}

/*
6. 1 থেকে 50 পর্যন্ত এমন সংখ্যাগুলো প্রিন্ট কর, যা 3 এবং 4 উভয়ের দ্বারা বিভাজ্য এবং সংখ্যাগুলোর যোগফল বের কর। */
let NEWsum = 0;
for (let index = 1; index <= 50; index++) {
  if (index % 3 == 0 && index % 4 == 0) {
    console.log(index);
    NEWsum = NEWsum + index;
  }
}
console.log('Total:', NEWsum);

/*---------------------------------------------------------------------------------------------------
                                  লুপের Break-আপ
--------------------------------------------------------------------------------------------------*/

/*
1. ধর, তুই 1 থেকে 30 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু তোর ইচ্ছা হলো, 15-এর পরে প্রিন্ট করা বন্ধ হবে, থেমে যাবে। */
for (let index = 1; index <= 30; index++) {
  console.log(index);
  if (index >= 15) {
    break;
  }
}

/*
2. তুই 1 থেকে 40 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু এমনভাবে, যেন 7 দিয়ে বিভাজ্য সংখ্যাগুলো বাদ যায়। যেমন- 7, 14, 21, ইত্যাদি বাদ যাবে। একটা প্রোগ্রাম লিখ, যেখানে এই সংখ্যাগুলো স্কিপ হবে। */
for (let index = 1; index <= 40; index++) {
  if (index % 7 == 0) {
    continue;
  }
  console.log(index);
}

/*
3. তুই 1 থেকে 15 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু 9 বাদে। একটা প্রোগ্রাম লিখ, যেখানে 9 স্কিপ হয়ে যাবে আর বাকিসব সংখ্যা প্রিন্ট হবে। */
for (let index = 1; index <= 15; index++) {
  if (index == 9) {
    continue;
  }
  console.log(index);
}

/*
4. 1 থেকে 20 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 12 বাদে। 12 স্কিপ হয়ে যাবে এবং বাকিসব সংখ্যা প্রিন্ট হবে। */
for (let index = 1; index <= 20; index++) {
  if (index == 12) {
    continue;
  }
  console.log(index);
}

/*
5. 1 থেকে 25 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 3 দিয়ে বিভাজ্য সংখ্যা বাদ যাবে। */
for (let index = 1; index <= 25; index++) {
  if (index % 3 == 0) {
    continue;
  }
  console.log(index);
}

/*
6. 91 থেকে 120 পর্যন্ত সংখ্যা প্রিন্ট কর, কিন্তু 10 দিয়ে ভাগ যায়, এমন সংখ্যা পেলে প্রিন্ট করা বন্ধ হয়ে যাবে, থেমে যাবে। */
for (let index = 91; index <= 120; index++) {
  if (index % 10 == 0) {
    continue;
  }
  console.log(index);
}
