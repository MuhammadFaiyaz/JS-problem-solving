function mileToYard(mile) {
  const yard = 1760 * mile;
  return yard;
}
const yard = mileToYard(13);
console.log(yard);

function kwPerHourToCalorie(kwPerHour) {
  const calorie = kwPerHour * 860;
  return calorie;
}
console.log(kwPerHourToCalorie(3));
console.log(kwPerHourToCalorie(5.6));

function hourToSecond(hour) {
  const second = hour * 60 * 60;
  return second;
}
console.log(hourToSecond(7));
console.log(hourToSecond(24));

function cmToMetre(cm) {
  const metre = cm / 100;
  return metre;
}
console.log(cmToMetre(165));
console.log(cmToMetre(200));

function inchToCm(inch) {
  const centiMetre = inch * 2.54;
  return centiMetre;
}
console.log(inchToCm(165));

function poundToKG(pound) {
  const kg = pound * 0.453;
  return kg;
}
console.log(poundToKG(100));

function yardToMeter(yard) {
  const meter = yard * 0.91;
  return meter;
}
console.log(yardToMeter(30));

//লিপি আপার লিপ ইয়ার

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

// বিজোড় সংখ্যার আজিব গড়

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

// যমজ বিরিয়ানি

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

// অদলবদল ভোম্বল

let a = 10;
let b = 4;
console.log('a=' + a + ', b=' + b);
const temp = a;
a = b;
b = temp;
console.log('a=' + a + ', b=' + b);
