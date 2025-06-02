/*---------------------------------------------------------------------------------------------------
                                উচ্চতার উষ্ণতা 
--------------------------------------------------------------------------------------------------*/
/*
1. তুই জানস, 1760 গজে একমাইল। তাহলে একটা ফাংশন লিখে ফেল, যাতে বের করতে পারিস, 13 মাইলে কত গজ। */
function mileToYard(mile) {
  const yard = 1760 * mile;
  return yard;
}
const yard = mileToYard(13);
console.log(yard);

/*
2. শুনতে কঠিন, কিন্তু চিন্তা করলে সহজ একটা বিষয় হচ্ছে, 1 কিলোওয়াট ঘণ্টা মানে 860 কিলো ক্যালরি। তাহলে একটা ফাংশন লিখে বের কর। যেটাতে যেকোনো কিলোওয়াট ঘণ্টা দিলে সে সেটাকে কিলো ক্যালরিতে কনভার্ট করে দিবে। */
function kwPerHourToCalorie(kwPerHour) {
  const calorie = kwPerHour * 860;
  return calorie;
}
console.log(kwPerHourToCalorie(3));
console.log(kwPerHourToCalorie(5.6));

/*
3. ঘণ্টাকে সেকেন্ডে কনভার্ট করতে একটি ফাংশন বানা। এক ঘণ্টাতে কত মিনিট বা এক মিনিটে কত সেকেন্ড। সেটা আমি বলে দিচ্ছি না। তুই চিন্তা করে বের কর এবং আমাকে একটা ফাংশন লিখে দে, যেটা ঘণ্টা দিলে আমাকে সেকেন্ডে কনভার্ট করে দিবে। */
function hourToSecond(hour) {
  const second = hour * 60 * 60;
  return second;
}
console.log(hourToSecond(7));
console.log(hourToSecond(24));

/*
4. সেন্টিমিটারকে মিটারে কনভার্ট করার জন্য একটি ফাংশন তৈরি কর। তারপর বিভিন্ন মান দিয়ে সেই ফাংশনকে টেষ্টা কর। আর তুই তো জানস, 1 মিটার = 100 সেন্টিমিটার। */
function cmToMetre(cm) {
  const metre = cm / 100;
  return metre;
}
console.log(cmToMetre(165));
console.log(cmToMetre(200));

/*
5. ইঞ্চিকে সেন্টিমিটারে রূপান্তর করার ফাংশন লিখ। 1 ইঞ্চি = 2.54 সেন্টিমিটার। */
function inchToCm(inch) {
  const centiMetre = inch * 2.54;
  return centiMetre;
}
console.log(inchToCm(165));

/*
6. যদি 1 পাউন্ড = 0.453 কিলোগ্রাম হলে পাউন্ড থেকে কিলোগ্রামে কনভার্ট করার একটা ফাংশন লিখে ফেল। */
function poundToKG(pound) {
  const kg = pound * 0.453;
  return kg;
}
console.log(poundToKG(100));

/*
7. গজকে মিটারে কনভার্ট করার জন্য একটি ফাংশন তৈরি কর। 1 গজ = 0.91 মিটার */
function yardToMeter(yard) {
  const meter = yard * 0.91;
  return meter;
}
console.log(yardToMeter(30));

/*---------------------------------------------------------------------------------------------------
                                লিপি আপার লিপ ইয়ার
--------------------------------------------------------------------------------------------------*/

/*
1. একটা function লিখ, যেটা একটা income amount প্যারামিটার হিসেবে নিবে এবং কোনো tax bracket- এ পড়ে সেটা রিটার্ন করবে। ইনকাম যদি ≤ 50,000-এর নিচে হয়, তাহলে 10 রিটার্ন করবে। ইনকাম 50,001- 100,000-এর মধ্যে হলে 20 ট্যাক্স হবে। আবার 100,001-200,000-এর মধ্যে হলে 30, আর $200,000 ওপরে হলে 40 পার্সেন্ট ট্যাক্স হবে। ফাংশন থেকে শুধু সংখ্যা রিটার্ন করবি। কোনো পার্সেন্টেজ চিহ্ন রিটার্ন করবি
না । */
function taxAmount(income) {
  return income <= 50000
    ? 10
    : income <= 100000
    ? 20
    : income <= 200000
    ? 30
    : 40;
}
console.log(taxAmount(78000));
console.log(taxAmount(185000));
console.log(taxAmount(50000));
console.log(taxAmount(300000));

/*
2. একটা প্যাকেজ ডেলিভারির খরচ হিসাব কর। যেখানে 10kg - এর কম হলে 100 টাকা। আর 20kg - এর কম হলে 300 টাকা। 50 kg - এর কম হলে 1000 টাকা। আর তার বেশি হলে কেজিপ্রতি 100 টাকা করে খরচ দিতে হবে। */
function deliveryCharge(weight) {
  return weight < 10
    ? 100
    : weight < 20
    ? 300
    : weight < 50
    ? 1000
    : 1000 + (weight - 50) * 100;
}
console.log(deliveryCharge(10));
console.log(deliveryCharge(9));
console.log(deliveryCharge(55));
console.log(deliveryCharge(45));

/*
3. একটা function বানা, যেটা marks input নিবে এবং তারপর ৪০ বা তার ওপরে হলে A, 70 থেকে 79 হলে B, 60 থেকে 69 - এর মধ্যে হলে C, 50 থেকে 59 - এর মধ্যে হলে D, আর 50 - এর নিচে হলে F গ্রেড return করবে। */
function marksInput(mark) {
  return mark < 50
    ? 'F'
    : mark < 60
    ? 'D'
    : mark < 70
    ? 'C'
    : mark < 80
    ? 'B'
    : 'A';
}
console.log(marksInput(95));
console.log(marksInput(75));
console.log(marksInput(57));
console.log(marksInput(62));
console.log(marksInput(49));

/*
4. একটি ফাংশন লিখ যেটা ইনপুট হিসেবে একটা অ্যারে নিবে যে অ্যারের মধ্যে অনেকগুলা বছর থাকবে। তারপর সেই অ্যারের মধ্যে যতগুলো লিপ ইয়ার আছে সেটা কাউন্ট করবে। ফাইনালি মোট কয়টা লিপইয়ারওয়ালা বছর পাইছে সেই সংখ্যাটা রিটার্ন করবে। */
function leapYear(year) {
  let count = 0;
  for (const elem of year) {
    if ((elem % 4 === 0 && elem % 100 !== 0) || elem % 400 === 0) {
      count++;
    }
  }
  return count;
}
console.log(leapYear([2000, 2001, 2004, 2008, 2011, 2016, 2020, 2025, 2028]));

/*---------------------------------------------------------------------------------------------------
                                বিজোড় সংখ্যার আজিব গড়
--------------------------------------------------------------------------------------------------*/

/*
1. একটি অ্যারের জোড়সংখ্যাগুলোর গড় বা এভারেজ বের করার একটা ফাংশন লিখ এবং বিভিন্ন মান দিয়ে সেই ফাংশনকে চেক করবি, ঠিক রেজাল্ট দিচ্ছে কি না। */
function avgOfEvenNum(array) {
  const evenNum = [];
  for (const num of array) {
    if (num % 2 === 0) {
      evenNum.push(num);
    }
  }
  if (evenNum.length === 0) {
    return 0;
  }
  let sum = 0;

  for (const num of evenNum) {
    sum = sum + num;
  }
  const count = evenNum.length;
  const avg = sum / count;
  return avg;
}
const numbersArray = [3, 6, 9, 12, 15, 18, 21];
console.log(avgOfEvenNum(numbersArray));
const numbersArray2 = [1, 11, 111];
console.log(avgOfEvenNum(numbersArray2));
const numbersArray3 = [43, 65, 87, 98, 56, 34];
console.log(avgOfEvenNum(numbersArray3));

/*
2. একটা অ্যারের বিজোড় সংখ্যাগুলাকে 2 দিয়ে গুণ করে একটি নতুন অ্যারে বানিয়ে নতুন অ্যারে রিটার্ন কর।*/
function multiplyOddNum(arrays) {
  const oddEvenArray = [];
  for (const array of arrays) {
    if (array % 2 !== 0) {
      oddEvenArray.push(array * 2);
    }
  }
  return oddEvenArray;
}

const Result = multiplyOddNum([3, 6, 9, 12, 15, 18, 21]);
console.log(Result);

/*
3. একটি অ্যারেতে যদি বিজোড়সংখ্যা না থাকে, তবে "No odd numbers found" দেখানোর ব্যবস্থা কর। আর
যদি বিজোড়সংখ্যা থাকে, তাহলে "Odd numbers found" রিটার্ন কর। */
function oddNumChecker(oddNum) {
  for (const num of oddNum) {
    if ((num % 2 !== 0) == false) {
      return 'No odd numbers found';
    } else {
      return 'Odd numbers found';
    }
  }
}
console.log(oddNumChecker([3, 6, 9, 12, 15, 18, 21]));
console.log(oddNumChecker([46, 68, 80, 24]));

/*
4. একটি অ্যারেতে বিজোড়সংখ্যাগুলোর গড় বের করে দশমিকের পরে দুই ঘর পর্যন্ত মান রিটার্ন কর। */
function avgOfOddNum(num) {
  const oddNumbers = [];
  for (const element of num) {
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }

  let sum = 0;
  for (const element of oddNumbers) {
    sum = sum + element;
  }
  const avg = sum / oddNumbers.length;
  return avg;
}
const newArray50 = avgOfOddNum([2, 4, 6, 8, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(newArray50.toFixed(2));

/*
5. অ্যারেতে প্রতিটি বিজোড় সংখ্যা থেকে 1 বিয়োগ করে একটি নতুন অ্যারে বানিয়ে ফেল। */
function anotherArray(array) {
  const myArray = [];
  for (const element of array) {
    if (element % 2 !== 0) {
      myArray.push(element - 1);
    }
  }
  return myArray;
}
const thisArray = [1, 3, 5, 7, 6, 4, 2, 51, 33, 44, 22];
console.log(anotherArray(thisArray));

/*---------------------------------------------------------------------------------------------------
                                যমজ বিরিয়ানি
--------------------------------------------------------------------------------------------------*/
/*
1. ডুপ্লিকেট রিমুভ করার পুরা কোড নিজে বুঝে বুঝে লিখে এই অ্যারে [1, 5, 61, 5, 87, 7, 5, 81, 61]; দিয়ে চেক করবি। */
const NUMBERS = [1, 5, 61, 5, 87, 7, 5, 81, 61];
function noDuplicate(array) {
  const unique = [];
  for (const element of array) {
    if (unique.includes(element) === false) {
      unique.push(element);
    }
  }
  return unique;
}
console.log(noDuplicate(NUMBERS));

/*---------------------------------------------------------------------------------------------------
                                অদলবদল ভোম্বল
--------------------------------------------------------------------------------------------------*/
let a = 10;
let b = 4;
console.log('a=' + a + ', b=' + b);
const temp = a;
a = b;
b = temp;
console.log('a=' + a + ', b=' + b);
