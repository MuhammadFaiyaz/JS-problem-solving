/*---------------------------------------------------------------------------------------------------
                                  উল্টোপথের  do ... while 
--------------------------------------------------------------------------------------------------*/
// 1. items নামে একটি ভেরিয়েবল থাকবে, যার মান 3। do...while ব্যবহার কর। আর লুপের শর্ত হবে যতক্ষণ items 5-এর বেশি ততক্ষণ লুপ চলবে। লুপের ভিতরে items এর মান কনসোল লগ করে দেখ কোন আউটপুট পাওয়া যায় কিনা।
let items = 3;
do {
  console.log(items);
} while (items > 5);

// 2. এইবার attempts নামে একটা ভেরিয়েবল থাকবে। চেক করবি, এই attempts-এর মান 10-এর নিচে কি না। যদি 10-এর কম হয়, তাহলে do...while লুপ চলবে। এর লুপের ভিতরে attempts-এর মান এক এক করে বাড়বে। আর তুই যখন শুরু করবি, তখন attempts ভেরিয়েবলের প্রাথমিক মান 12 ।
let attempts = 12;
do {
  console.log(attempts);
  attempts++;
} while (attempts < 10);

// 3. name নামে ভেরিয়েবল থাকবে, যার মান হবে "John"। এরপর do...while লুপ চালাবি। লুপের ভিতরে প্রত্যেকবার name-এর পিছনে n যোগ করবি। আর লুপের শর্তে চেক করবি, name-এর length এর মান 10- এর কম কি না। কম হলে লুপ চলতে থাকবে।
let name = 'John';
do {
  name += 'n';
  console.log(name);
} while (name.length < 10);

/*---------------------------------------------------------------------------------------------------
                          Switch টিপে case জিতো 
--------------------------------------------------------------------------------------------------*/
// 1. একটা mobile নামে ভেরিয়েবল থাকবে। সেখানে brand-এর নাম থাকবে। ব্র্যান্ডের ওপর নির্ভর করে switch দিয়ে ডিফারেন্ট case-এ কনসোল লগ করবি কোন দেশ থেকে সেই ব্র্যান্ড এসেছে। ব্র্যান্ড Apple হলে USA, Samsung হলে Korea, Xiaomi হলে China, আর অন্য কিছু হলে Unknown Source লিখবি।

const mobile = 'Oppo';
switch (mobile) {
  case 'apple':
    console.log('USA');
    break;
  case 'Samsung':
    console.log('Korea');
    break;
  case 'Xiaomi':
    console.log('China');
    break;

  default:
    console.log('Unknown Source');
}

// 2. browser নামে একটা ভেরিয়েবল থাকবে। সেটার মান Chrome, Brave, Safari বা অন্য কিছু হতে পারে। কনসোল লগ করবে "Best for developers", যদি Chrome হয়, "Privacy focused", যদি Brave হয়, "Apple users choice", যদি Safari হয়। অন্য কিছু হলে দেখাবে "Unsupported browser"। এইটা কিন্তু প্রথমে if-else দিয়ে করবি। তারপর switch দিয়ে করবি।
const browser = 'Chrome';
if (browser === 'Chrome') {
  console.log('Best for developers');
} else if (browser === 'Brave') {
  console.log('Privacy focused');
} else if (browser === 'Safari') {
  console.log('Apple users choice');
} else {
  console.log('Unsupported browser');
}

const Browser = 'Asil';
switch (Browser) {
  case 'Chrome':
    console.log('Best for developers');
    break;
  case 'Brave':
    console.log('Privacy focused');
    break;
  case 'Safari':
    console.log('Apple users choice');
    break;

  default:
    console.log('Unsupported browser');
}

// 3. এইবার paymentMethod নামে ভেরিয়েবল থাকবে। সেটার মান cash, credit, debit বা অন্য কিছু হতে পারে। paymentMethod অনুযায়ী কনসোল লগ করবি। cash হলে দেখাবি "Pay with cash", credit হলে দেখাবি "Pay with credit card", debit হলে দেখাবি "Pay with debit card", অন্য কিছু হলে দেখাবি "Invalid payment method"। এইটা switch দিয়ে করবি।
let paymentMethod = 'Nagad';
switch (paymentMethod) {
  case 'cash':
    console.log('Pay with cash');
    break;
  case 'credit':
    console.log('Pay with credit card');
    break;
  case 'debit':
    console.log('Pay with debit card');
    break;

  default:
    console.log('Invalid payment method');
}

// 4. একটা membership নামে ভেরিয়েবল থাকবে। সেখানে free, silver, gold বা platinum-এর মান থাকবে। membership অনুযায়ী দেখাবি ইউজারের পারমিশন। যেমন, free হলে "Access limited content", silver "Access most content", gold "Access premium content", platinum হলে "Full access"। এইটা শুধু if-else দিয়ে করবি।
let membership = 'platinum';
if (membership === 'free') {
  console.log('Access limited content');
} else if (membership === 'silver') {
  console.log('Access most content');
} else if (membership === 'gold') {
  console.log('Access premium content');
} else if (membership === 'platinum') {
  console.log('Full access');
}

// 5. অনলাইনে কোন কিছু অর্ডার দিলে orderStatus থাকে। তাই এই orderStatus নামে ভেরিয়েবল থাকবে। সেটা pending, shipped, delivered বা cancelled হতে পারে। status অনুযায়ী কনসোল লগ করবি। যেমন, pending "Your order is being processed", shipped "Your order is on the way", delivered "Your order has been delivered", cancelled "Your order was cancelled".
const orderStatus = 'cancelled';
switch (orderStatus) {
  case 'pending':
    console.log('Your order is being processed');
    break;
  case 'shipped':
    console.log('Your order is on the way');
    break;
  case 'delivered':
    console.log('Your order has been delivered');
    break;
  case 'cancelled':
    console.log('Your order was cancelled');
    break;
}

// 6. একটা grade নামে ভেরিয়েবল থাকবে। সেটার মান A, B, C, D বা F হতে পারে। গ্রেড অনুযায়ী দেখাবি ইউজারের ফলাফল। A হলে "Excellent", B হলে "Good", C হলে "Average", D হলে "Poor", F হলে "Fail"।
const grade = 'A';
switch (grade) {
  case 'A':
    console.log('Excellent');
    break;
  case 'B':
    console.log('Good');
    break;
  case 'C':
    console.log('Average');
    break;
  case 'D':
    console.log('Poor');
    break;
  case 'F':
    console.log('Fail');
    break;

  default:
    console.log('Invalid input');
}

/*---------------------------------------------------------------------------------------------------
                            with Eval ইবলিস
--------------------------------------------------------------------------------------------------*/
// 1. with কী? এইটা কী কাজ করে?
//  with এর মাধ্যমে যেকোনো অবজেক্টের ইচ্ছেমতো স্কোপ সেট করা যায়। যেকোনো অবজেক্টের প্রোপার্টি সরাসরি অ্যাক্সেস করা যায়।

// 2. eval() কী জিনিস। এইটা কেন ইউজ করা উচিত না।
// ইচ্ছেমতো কোড চালানোর একটা ফাংশন যা ইনপুট হিসেবে যেকোনো স্ট্রিং নিবে আর কোডের মতো এক্সিকিউট করবে। ফলে এর মাধ্যমে কোড নষ্ট হয়ে যায় যদি কেউ ভুল ব্যবহার করে। ফলে নিরাপত্তা ঝুঁকি বাড়ায়, আর কোড স্লো হয়ে যায় এবং ডিবাগিংয়ে সমস্যা হয়।

/*---------------------------------------------------------------------------------------------------
                                if যদি IIFE হয় 
--------------------------------------------------------------------------------------------------*/
// 1. IIFE কি জিনিস? এইটা কেন ইউজ করা হয়।
// IIFE মানে হলো Immediately Invoked Function Expression, অর্থাৎ এমন একটি ফাংশন যেটা ডিফাইন করার সাথে সাথেই এক্সিকিউট হয়ে যায়।

// 2. একটা IIFE বানা যেটা নিজে থেকে console এ "I am isolated from outer scope!" প্রিন্ট করবে।
(function () {
  console.log('I am isolated from outer scope!');
})();

// 3. অ্যারো ফাংশন দিয়ে একটা IIFE বানা, যেটা প্রিন্ট করবে "borrow from arrow"।
(() => {
  console.log('borrow from arrow');
})();

// 4. একটা IIFE বানা যেটা temperature প্যারামিটার নেবে এবং কেলভিন থেকে সেলসিয়াসে কনভার্ট করবে। কনভার্ট করার ফর্মুলা হলো: celsius = kelvin - 273.15। তারপর কনভার্ট করা মানটা প্রিন্ট কর।
(function (kelvin) {
  const celcius = kelvin - 273.15;
  console.log(celcius);
})(25);

/*---------------------------------------------------------------------------------------------------
                            use strict- এর কড়া স্যার
--------------------------------------------------------------------------------------------------*/
// 1.  স্ত্রিক্ট মুড কেন ইউজ করা হয়?
//  Strict mode ব্যবহার করা হয় যাতে JavaScript কোড আরও নিরাপদ, পরিষ্কার ও ভুল-প্রতিরোধী হয়।  ভুলভিত্তিক কোড (যেমন undeclared variable) আটকে দেয়। কিছু বিপজ্জনক ফিচার নিষিদ্ধ করে। কোড অপ্টিমাইজ করা সহজ হয় ব্রাউজারের জন্য। বাগ ধরতে সাহায্য করে এবং কোডের মান উন্নত করে।
