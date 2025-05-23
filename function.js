// ফাংশন, নো টেনশন

function juiceKhao() {
  console.log('Ai nao Lemon juice');
}
juiceKhao();

function myRoutine() {
  console.log('At first take wadu');
  console.log('Complete my Fazr Salat');
  console.log('read Al Quranul Karim');
  console.log('Seat for study');
}
myRoutine();

function myFamily() {
  console.log('Abir (father)');
  console.log('Meghla (mother)');
  console.log('Bristy (sister)');
}
myFamily();

function taskDone() {
  console.log('Performing All Salat');
  console.log('Reading the Quran');
  console.log('Reading book');
  console.log('Preparing notes');
  console.log('helping the communities');
}
taskDone();

function greetMe() {
  console.log('Good Mornig! Have a great day!');
}
greetMe();

function getFavFriends() {
  console.log('Saad');
  console.log('Hamza');
  console.log('Talha');
}
getFavFriends();

function introduceMyself() {
  console.log('Mohammad Faiyaz Khan');
  console.log('21');
  console.log('HamanKardi, Chandpur Sadar');
  console.log('01**********99');
  console.log('5 feet 8 inch');
  console.log('beef & biriani');
}
introduceMyself();

// এক লিটার প্যারামিটার

function sum_OfAge(fatherAge, sonAge) {
  sum = fatherAge + sonAge;
  console.log(sum);
}
sum_OfAge(41, 23);

function multiplication(firstNum, secondNum) {
  multiplication = firstNum * secondNum;
  console.log(multiplication);
}
multiplication(20, 15);

function additionOfMarks(sub1, sub2, sub3) {
  addition = sub1 + sub2 + sub3;
  console.log(addition);
}
additionOfMarks(95, 98, 96);

function my_age(params) {
  my_age = 2025 - params;
  console.log(my_age);
}
my_age(2004);

function guard(params) {
  guard = params / 35;
  console.log(Math.floor(guard));
}
guard(247);

function average(int1, int2, int3, int4) {
  avg = (int1 + int2 + int3 + int4) / 4;
  console.log(avg);
}
average(23, 86, 567, 89);

function profit(buyingPrice) {
  sellingPrice = buyingPrice + 250;
  console.log(sellingPrice);
}
profit(250);

function birthYear(birthYear) {
  centuryYear = birthYear + 100;
  console.log(centuryYear);
}
birthYear(2004);

function useMobilePhone(dailyUse) {
  monthlyUse = dailyUse * 30;
  console.log(monthlyUse);
}
useMobilePhone(5); // in hours

// return করোঃ ফাংশনের প্রেম

function isMoreThan10(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(isMoreThan10(45));

function userNumber(userNumber) {
  if (userNumber % 13 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(userNumber(165));

function bill(rice, curry, drinks) {
  return rice + curry + drinks;
}
console.log(bill(30, 30, 20));

function userAge(age) {
  if (age > 18) {
    return console.log('Eligible for voting');
  } else {
    return console.log('Not Eligible ');
  }
}
userAge(21);

function lengthOfString(string) {
  return console.log(string.length);
}
const myCountry = 'Bangladesh';
lengthOfString(myCountry);

function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log(average(34, 40, 49));

function negativeChecker(num) {
  if (num < 0) {
    return num * -1;
  } else {
    return console.log('not a negative number');
  }
}
console.log(negativeChecker(-56));

//ফাংশনের দংশন

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

function firstLetter(Name) {
  return Name.charAt(0);
}
console.log(firstLetter('Faiyaz'));

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

function newArray(array) {
  const addition = array[0] + array[1];
  return addition;
}
const totalMarks = [44, 48, 41, 43];
console.log(newArray(totalMarks));

function makeDoubleOrTriple(num) {
  if (num > 0) {
    return num * 2;
  } else {
    return num * 3;
  }
}
console.log(makeDoubleOrTriple(44));
console.log(makeDoubleOrTriple(-22));

function nameComparison(firstName, secondName) {
  if (firstName.length > secondName.length) {
    return true;
  } else {
    return false;
  }
}
console.log(nameComparison('Faiyaz', 'Nayem'));
console.log(nameComparison('Faiyaz', 'Nayeem'));

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

// ধাপে ধাপে ফাংশনের জংশন

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

function myAge(age) {
  return age < 18 ? 18 : age > 45 ? 45 : age;
}

console.log(myAge(56));
console.log(myAge(17));
console.log(myAge(34));

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

function number20(numbers) {
  if (numbers > 20) {
    return numbers / 20;
  } else {
    return numbers * 2;
  }
}
console.log(number20(45));
console.log(number20(-13));

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
