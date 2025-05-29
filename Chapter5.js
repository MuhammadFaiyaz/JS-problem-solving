/*---------------------------------------------------------------------------------------------------
                                    Condition: নো কনফিউশন;
--------------------------------------------------------------------------------------------------*/

/*
1. তোর আম্মু বলছে, 6টার আগে বাসায় ফিরলে তোকে নাস্তা খাওয়াবে। আর দেরি করলে ঝাড়ুর বাড়ি দিবে। এই শর্তের জন্য কোড কর। */
const currentHour = 17; // 24-hour format
if (currentHour < 18) {
  console.log('Mom will feed me snacks');
} else {
  console.log('Mom will hit me with a broom.');
}

/*
2. একটা মোবাইল অ্যাপে যদি লগইন সফল হয়, তাহলে "Welcome!" দেখাবে। যদি ব্যর্থ হয়, "Get Lost!"
দেখাবে। এই শর্তের জন্য প্রোগ্রাম লিখ। */
const appLogin = true;
if (appLogin == true) {
  console.log('Welcome');
} else {
  console.log('Get Lost');
}

/*
3. তুই যদি 5 কি. মি. দৌড়াস, তাহলে তোকে চকলেট খেতে দিবে। যদি না দৌড়াস, তাহলে তোর মোটা ভুঁড়ি হবে। এই শর্তের জন্য প্রোগ্রাম লিখ। */
const joggingDistance = 5; // in km
if (joggingDistance == 5) {
  console.log('I will give you chocolate');
} else {
  console.log("You're going to get fat!");
}

/*
4. ধর, তোর বাবা বলেছে, যদি তুই পরীক্ষায় ৪০-এর বেশি পেয়ে পাস করিস, তাহলে তোকে বাইক কিনে দিবে। কিন্তু যদি কম হয়, তাহলে বাইক দিবে না। একটা প্রোগ্রাম লিখে দেখ, তুই বাইক পাবি কি না, যদি তোর নম্বর 85 হয়। */
const myAnnualExamScore = 85; // out of 100
if (myAnnualExamScore >= 80) {
  console.log('I will buy you a bike.');
} else {
  console.log("You won't get a bike.");
}

/* 
5. যদি মুভির শো রাত ৭টার আগে হয়, তাহলে তুই মুভি দেখবি। যদি পরে হয়, তাহলে বাসায় গিয়ে নাকে তেল দিয়ে ঘুমাবি। এর জন্য প্রোগ্রাম লিখ। */
const movieShowTime = 22; // 10 pm
if (movieShowTime < 21) {
  console.log('I will go to the movie.');
} else {
  console.log('No need to go to the movie.');
}

/*
6. তাপমাত্রা 30 ডিগ্রি বা তার বেশি হয়, তাহলে এয়ার কন্ডিশনার চালাবি। আর কম হলে কম্বল মুড়ি দিয়েই ঘুমাবি। এর জন্য কোড লিখ। */
const temperature = 23; // in Celsius
if (temperature >= 30) {
  console.log('On the AC');
} else {
  console.log('I can use blanket');
}

/*---------------------------------------------------------------------------------------------------
                                    ছাত্র যখন পাত্র
--------------------------------------------------------------------------------------------------*/

/*
1. একটি প্রোগ্রাম লিখ। যেটা চেক করবে, বয়স 18-এর বেশি কি না এবং উচ্চতা 60 ইঞ্চির বেশি কি না। তাহলে সে গাড়ি ঠেলবে, না হয় সে গাড়িতে বসে থাকবে। */
let AGE = 18;
let HEIGHT = 61; // in inch
if (AGE > 18 && HEIGHT > 60) {
  console.log('He will push the car');
} else {
  console.log("He won't push the car");
} // output: He won't push the car

/*
2. একটি প্রোগ্রাম লিখ। যা চেক করবে, একজন শিক্ষার্থী ভর্তি হওয়ার যোগ্য কি না। গণিত স্কোর ৪০-এর বেশি অথবা ইংরেজি স্কোর 85-এর বেশি হতে হবে। আর এইগুলার কোনোটাই সত্যি না হলে বলবি— তোকে বিয়ে দিয়ে দিব।*/
let mathScore = 90;
let englishScore = 85;
if (mathScore > 80 || englishScore > 85) {
  console.log('You are eligible for the addmission.');
} else {
  console.log('Toke biye dewa hobe.');
} // output: You are eligible for the addmission.

/*
3. একজন স্টুডেন্টের GPA যদি 5 হয় এবং পরিবারের মাসিক আয় 10000 - এর কম হয়, তাহলে সে স্কলারশিপ পাবে। না হয় তাকে বেতন দিয়ে পড়তে হবে। */
let GPA = 4.43;
let familyIncome = 5000; // in BDT
if (GPA == 5 && familyIncome < 10000) {
  console.log('You are eligible for the scholarship.');
} else {
  console.log(
    'You are not eligible for the scholarship. You have to study with paying money.'
  );
} // output: You are not eligible for the scholarship. You have to study with paying money.

/*
4. একজন চাকরিপ্রার্থী পরীক্ষা দিতে পারবে, যদি তার বয়স 30-এর কম হয় এবং কাজের অভিজ্ঞতা 2 বছরের বেশি হয়। আর না হয় চাকরির পরীক্ষা দিতে পারবে না। এমন একটা প্রোগ্রাম লিখ। */
let ageOfCandidate = 25;
let experience = 3; // in years
if (ageOfCandidate < 30 && experience > 2) {
  console.log('You are eligible for the written test.');
} else {
  console.log('You are not eligible for the written test.');
} // output: You are eligible for the written test.

/*
5. তোর ফ্রিজের ভেতর ডিমের সংখ্যা 12-এর বেশি অথবা মুরগি না থাকে, তাহলে তুই ডিমের কোরমা রান্না করবি। আর না হলে পাউরুটি আর কলা খাবি। এমন একটা কোড লিখ। */
let numberOfEggs = 11;
let haveChickens = false;
if (numberOfEggs > 12 || haveChickens == false) {
  console.log('I will eat Korma of egg.');
} else {
  console.log('I will eat bread and banana.');
} // output: I will eat Korma of egg.

/*
6. একজন মানুষের যদি শরীরের তাপমাত্রা 100 ডিগ্রির বেশি অথবা কাশি থাকে, তাহলে সে ডাক্তারের কাছে যাবে। নচেৎ সে কাঁথা মুড়ি দিয়ে শুয়ে থাকবে। এর জন্য একটা প্রোগ্রাম লিখ। */
let Temperature = 103; // in Fahrenheit
let haveCough = true;
if (Temperature > 100 || haveCough == true) {
  console.log('I will go to the doctor.');
} else {
  console.log('I will sleep wrapped in a blanket.');
} // output: I will go to the doctor.

/*
7. একজন শিক্ষার্থীকে পরীক্ষা দিতে দেয়া হবে, যদি তার উপস্থিতি 80 শতাংশের বেশি এবং হোমওয়ার্ক জমা দেয়া থাকে। নচেৎ অটো ফেল। এই শর্তের জন্য প্রোগ্রাম লিখ। */
let attendance = 75; // in percentage
let homeworkCompleted = true;
if (attendance > 80 && homeworkCompleted == true) {
  console.log('You are eligible for the exam.');
} else {
  console.log('You are auto fail.');
} //output: You are auto fail.

/*
8. যদি তোর বাসার বিদ্যুৎ চলে যায় এবং মোবাইলে চার্জ না থাকে, তাহলে তুই পড়তে বসবি। না হলে ভিডিও গেম খেলবি। এর জন্য কোড লিখ। */
let haveElectricity = true;
let chargeofMobile = 0;
if (haveElectricity == true && chargeofMobile < 10) {
  console.log('I will go for study.');
} else {
  console.log('I will play video games.');
} // output: I will go for study.

/*
9. শার্টের দাম 1000 টাকার বেশি হলে এবং কুপন থাকলে তোকে 20 পারসেন্ট ডিসকাউন্ট দেয়া হবে। এর জন্য প্রোগ্রাম লিখ। */
let shirtPrice = 790; // in BDT
let cuponCode = 'DISCOUNT20';
if (shirtPrice > 1000 && cuponCode == 'DISCOUNT20') {
  console.log('You will get 20% discount.');
} else {
  console.log('You will not get any discount.');
} // output: You will not get any discount.

/*---------------------------------------------------------------------------------------------------
                                    ডিস্কাউন্টখেকো else-if
--------------------------------------------------------------------------------------------------*/

/*
1. তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে 5% ডিসকাউন্ট, আর 6000 টাকার বেশি কেনাকাটা করলে 15% ডিসকাউন্ট দিবি। যদি এক বন্ধু এসে 4500 টাকার জিনিস কিনে, তবে তাকে কত টাকা দিতে হবে? */
let price = 4500;
if (price > 6000) {
  let discount = price * 0.15; // 15% discount
  let pay = price - discount;
  console.log(`You have to pay ${pay}tk.`);
} else if (price > 3000) {
  let discount = price * 0.05; // 5% discount
  let pay = price - discount;
  console.log(`You have to pay ${pay}tk.`);
} else {
  console.log(`You have to pay ${price}tk.`);
}

/*
2. তুই একটি রেস্টুরেন্ট চালাচ্ছোস, যেখানে 12 বছরের নিচে বাচ্চাদের ফ্রি খাওয়ানো হয় এবং 60 বছরের ওপরের মানুষকে 50% ডিসকাউন্ট দেওয়া হয়, বাকিদের পুরা টাকা দিতে হয়।*/
let age = 25;
if (age < 12) {
  console.log('Child wiil get full discount.');
} else if (age > 60) {
  console.log('Senior citizen will get 50% discount.');
} else {
  console.log('No discount available. You have to pay the full bill.');
}

/*
3. যদি কারো ব্যাংক একাউন্টে ব্যালেন্স 1000 টাকার কম হয়, তাহলে বলবি, "ডিপোজিট কর।" 1000 থেকে 5000- এর মধ্যে হলে বলবি, "বিন্দাস লাইফ এনজয় কর।" আর 5000-এর বেশি হলে বলবি, "তুই ধনী, আমাকে বিয়া
কর।"*/
let accountBalance = 11687;
if (accountBalance < 1000) {
  console.log('Make a deposit.');
} else if (accountBalance >= 1000 && accountBalance <= 5000) {
  console.log('Bindas life, Enjoy your life.');
} else {
  console.log('You are rich. Marry me.');
}

/*
4. একটা পরীক্ষায় যদি কোনো ছাত্রের মার্কস 50-এর কম হলে বলবি "Fail", 50 থেকে 80-এর মধ্যে হলে বলবি "Pass", আর 80-এর বেশি হলে বলবি "A+'"। */
let examScore = 75;
if (examScore > 80) {
  console.log('Congratulations! You got A+.');
} else if (examScore < 50) {
  console.log('You are failed.');
} else {
  console.log('You passed.');
}

/*
5. কোনো বইয়ের পৃষ্ঠাসংখ্যা 100-এর কম হলে বলবি "Small book", 100 থেকে 500-এর মধ্যে হলে বলবি "Mid-size book", আর 500-এর বেশি হলে বলবি "heart-attack size book"। */
let totalPage = 796;
if (totalPage < 100) {
  console.log('Small book.');
} else if (totalPage > 500) {
  console.log('Heart-attack size book.');
} else {
  console.log('Mid-size book.');
}

/*
6. একটা প্রোগ্রাম লিখ। যা চেক করবে, তাপমাত্রা 0 ডিগ্রির কম হলে বলবে "Ice", 0 থেকে 20 - এর মধ্যে হলে বলবে "Cool Cool", আর 20 - এর বেশি হলে বলবে "Hot Hot"।*/
let temperatureInCelsius = -5;
if (temperatureInCelsius < 0) {
  console.log('Ice');
} else if (temperatureInCelsius > 20) {
  console.log('Hot hot');
} else {
  console.log('Cool cool');
}

/*
7. তোর একটা গেমিং অ্যাপ আছে। প্লেয়ারের লেভেল 10-এর কম হলে বলবি "novice", 10 থেকে 50-এর মধ্যে
হলে বলবি "Expert", আর 50 - এর বেশি হলে বলবি "Pro Gamer" | */
let playerLevel = 55;
if (playerLevel < 10) {
  console.log('Novice');
} else if (playerLevel > 50) {
  console.log('Pro gamer');
} else {
  console.log('Expert');
}

/*---------------------------------------------------------------------------------------------------
                                    স্যারের বাঁশ বাসায় ঠাস ঠাস
--------------------------------------------------------------------------------------------------*/

/*
1. বন্ধু যদি দাওয়াত দেয়, তাহলে তার জন্মদিনের পার্টিতে তুই যাবি। আর যদি তোকে দাওয়াত না দেয়, তাহলে তাকে ফ্রেন্ডলিস্ট থেকে বের করে দিবি। আর যদি বন্ধু দাওয়াত দিয়ে ফেলে, তাহলে দাওয়াতে যাওয়ার সময় চেক করে দেখবি, পকেটে কত টাকা আছে। যদি 1000 টাকার বেশি থাকে, তাহলে বন্ধুর জন্য একটা গিফট নিয়ে যাবি। না হয় খালি হাতে যাবি।*/
let inviteMe = true;
let moneyForGift = 1100; // in BDT
if (inviteMe == true) {
  console.log('I will go to the party.');
  if (moneyForGift > 1000) {
    console.log('I will buy a gift.');
  } else {
    console.log('I will go to the party without a gift.');
  }
} else {
  console.log('Unfriend him in the social media.');
}

/*
2. যদি তোর বাসায় মেহমান আসে, প্রথমে জিজ্ঞেস করবি, তারা চা খাবে কি না। যদি চা খেতে চায়, তাহলে জিজ্ঞেস করবি, সাথে বিস্কুট খাবে কি না। না চাইলে বলবি, ‘শুধু চা রেডি।' আর যদি চা-ও না খেতে চায়, বলবি, ‘বসে বসে স্টার জলসা দেখুন।*/
let willGuestsHaveTea = true;
let willGuestsHaveBiscuits = false;
if (willGuestsHaveTea == true) {
  console.log('I will serve tea to the guests.');
  if (willGuestsHaveBiscuits == true) {
    console.log('I will serve biscuits with tea.');
  } else {
    console.log('Only tea is ready.');
  }
} else {
  console.log('Just relax and enjoy watching Star Jalsha.');
}

/*
3. তুই একটি অ্যাপ বানিয়েছিস। প্রথমে চেক করবি, ব্যবহারকারীর অ্যাকাউন্ট অ্যাকটিভ কি না। যদি অ্যাকটিভ হয়, তার সাবস্ক্রিপশন চেক করবি। যদি প্রিমিয়াম হয়, তাকে প্রিমিয়াম ফিচার দেখাবি। না হলে বলবি, ‘ফ্রি ভার্সন দেখুন।’*/
let userAccountIsActive = true;
let premiumSubscription = true;
if (userAccountIsActive == true) {
  if (premiumSubscription == true) {
    console.log('You have access to premium content.');
  } else {
    console.log('Use the free version.');
  }
}

/*
4. তোর বাসার ফ্রিজে খাবার আছে কি না, চেক করবি। যদি থাকে, খাবার গরম করবি। আর যদি না থাকে, চেক করবি, ফুড ডেলিভারি অ্যাপ কাজ করছে কি না। কাজ করলে অর্ডার করবি, না হলে বলবি, ‘আজকে আমি রোজা।’*/
let foogInFridge = false;
let foodDeliveryAppWorking = false;
if (foogInFridge == true) {
  console.log('I will heat the food in the microwave.');
} else {
  if (foodDeliveryAppWorking == true) {
    console.log('I will order food from the app.');
  } else {
    console.log('Today I am fasting.');
  }
}

/*
5. ধর, তুই একটা পার্টি করবি। প্রথমে দেখবি, পার্টিতে 100 জনের বেশি গেস্ট আসবে কি না। যদি আসে, তাহলে চেক করবি, সবাই গিফট আনবে কি না। যদি আনে, বলবি, ‘Lets party all night. নচেৎ বলবি, ‘I will party with myself ’*/
const guestInParty = 106;
let willBringGift = false;
if (guestInParty > 100) {
  if (willBringGift == true) {
    console.log("Let's Party all night");
  } else {
    console.log("I'll party with myself.");
  }
}

/*---------------------------------------------------------------------------------------------------
                                    লজিকাল নট (!) ফিজিক্যাল হট
--------------------------------------------------------------------------------------------------*/

/*
1. তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ 3000 টাকার বেশি কেনাকাটা করলে ক্যাশব্যাক 500 টাকা। আর তার কম কেনাকাটা করলে ক্যাশব্যাক ০ টাকা। এখন এই জিনিসটা এক লাইনে লিখ। ভেরিয়েবলের নাম হবে cashback, আর মান সেট করবি টার্নারি অপারেটর ইউজ করে।*/
let purchse = 3600; // in BDT
let cashback; // in BDT
purchse > 3000 ? (cashback = 500) : (cashback = 0);
console.log(`${cashback} cashback available.`);

/*
2. তোর বয়স যদি 15-এর বেশি হয়, তাহলে "Teenager" দেখাবে। আর যদি কম হয়, তাহলে "Child" দেখাবে। এটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ।*/
let myAGE = 25;
myAGE > 15 ? console.log('Teenager') : console.log('Child'); // output: Teenager

/*
3. যদি isLoggedIn-এর মান true হয়, তাহলে "Welcome back"-কে message হিসেবে সেট করবি। আর যদি false হয়, তাহলে "Please login"-কে message হিসেবে সেট করবি। এই জিনিসটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ।*/
let isLoggedIn = false;
isLoggedIn == true
  ? console.log('Welcome back!')
  : console.log('Please log in.');

/*
4. তোর গাড়ির তেলের ট্যাংক যদি full হয়, তাহলে "Ready for a long drive" দেখাবি। আর না হলে "Fill the tank" দেখাবি।*/
let isFuelTankFull = true;
isFuelTankFull == true
  ? console.log('Ready for a long drive.')
  : console.log('fuel the tank.');

/*
5. তুই যদি পরীক্ষায় পাস করিস, তাহলে "Party time" দেখাবি। আর যদি ফেল করিস, তাহলে "Next
Semester e serious study korbo" দেখাবি। এক লাইনে টার্নারি অপারেটর দিয়ে কর।*/
let passInExam = true;
passInExam == true
  ? console.log('Party time')
  : console.log('Next semester e serious study korbo.');

/*
6. যদি sunny ভেরিয়েবলের মান false হয়, তাহলে "Stay home"-কে কনসোল লগ করবি।*/
let sunny = false;
sunny == false ? console.log('Stay home.') : console.log();

/*
7. যদি Expensive ভেরিয়েবলের মান false হয়, তাহলে কনসোল লগ করবি "I will buy this item."*/
let Expensive = false;
Expensive == false ? console.log('I will buy this item.') : console.log();
