// বিদায় var

// default ফ্রেন্ডজোন

function sumOf3Numbers(num1 = 0, num2 = 0, num3 = 0) {
  const sum = num1 + num2 + num3;
  return sum;
}
const theNumbers = sumOf3Numbers(45, 21, 34);
console.log(theNumbers);

function payment(money = 50) {
  return money;
}
console.log(payment());
console.log(payment(70));

function userInformation(name = 'Anonymomus', salary = 0) {
  return {
    name: name,
    salary: salary,
  };
}
console.log(userInformation('Faiyaz', 20000));
console.log(userInformation());

function squareReturn(value = 1) {
  return value * value;
}
console.log(squareReturn(33));
console.log(squareReturn());

function productDetails(name = 'Unknown product', price = 1) {
  return {
    name: name,
    price: price,
  };
}
console.log(productDetails('Book Shelf', 5500));
console.log(productDetails());

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

function product({ price = 10, quantity = 1 } = {}) {
  return price;
}
console.log(product({ price: 300, quantity: 20 }));
console.log(product());

/* pari na
function arrayMaster(array = [5, 10, 15]) {
  const newArray = [];
  if (array !== 0 && array !== null && array !== undefined) {
    for (const element of array) {
      newArray.push(element * 2);
    }
    return newArray;
  } else {
    return array;
  }
}
console.log(arrayMaster([2, 4, 6, 8]));
console.log(arrayMaster()); */

function simpleInterest({ principal = 1000, rate = 5 }) {
  const result = (principal * rate) / 100;
  return result;
}
console.log(simpleInterest({}));
console.log(simpleInterest({ principal: 3000, rate: 120 }));

function taxChecker({ salary = 50000, tax = 10 }) {
  const taxAmount = (salary * tax) / 100;
  const result = salary - taxAmount;
  return result;
}
console.log(taxChecker({ salary: 250000, tax: 20 }));
console.log(taxChecker({}));

// Template String ডিসটিং ডিসটিং

const firstNumber = 100;
const secondNumber = 20;
console.log(
  `The difference between ${firstNumber} and ${secondNumber} is ${
    firstNumber - secondNumber
  }`
);

const employee = {
  name: 'Faiyaz',
  age: 25,
  salary: 50000,
};
console.log(
  `Emplyoee name is ${employee.name}, age is ${employee.age} and his salary is ${employee.salary} Tk.`
);

const fruits = ['Apple', 'Banana', 'Orange'];
console.log(`My favourite fruit is ${fruits[2]}.`);

const a = 50;
const b = 10;
console.log(`The division of a and b is ${a / b}.`);

const person = {
  firstName: 'Amit',
  lastName: 'Kumar',
};
console.log(`Full name: ${person.firstName} ${person.lastName}.`);

const animals = ['Cat', 'Dog', 'Elephant'];
console.log(`My favourite animals are ${animals.join(', ')}`);

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

// তির ধনুকের arrow function

const getFirstIndex = array => array[0];
const first = getFirstIndex([10, 20, 30, 40]);
console.log(first);

const multiplyThreeNumbers = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiplyThreeNumbers(2, 3, 4));

const noParam = () => 'unknown';
console.log(noParam());

const garmentWorker = {
  name: 'Rafat',
  money: 2000,
};
const divideMoney = () => garmentWorker.money / 5;
console.log(divideMoney());

const myNumber = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const sum = array => array[0] + array[array.length - 1];
console.log(sum(myNumber));

const sum2 = (number1 = 10, number2 = 5) => number1 + number2;
console.log(sum2(20, 30));
console.log(sum2());
