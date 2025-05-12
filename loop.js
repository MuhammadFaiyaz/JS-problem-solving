// Loop- এর লুটপাট

let favouriteSubjects = ['Aqidah', 'Quran Hifj', 'Hadis', 'Tafsir', 'Tarikh'];
for (const favouriteSubject of favouriteSubjects) {
  console.log(favouriteSubject);
}

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

let dateOfBirth = [' 2000', ' 2001', ' 2002', ' 2003', ' 2004', ' 2005'];
for (const date of dateOfBirth) {
  console.log(date);
}

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

let examDates = ['1 January', '2 February', '3 March', '4 April', '5 May'];
for (const examDate of examDates) {
  console.log(examDate);
}

// While পাতলা ডাইল

let programming = 0;
while (programming < 10) {
  console.log('I will practice programming 3 hours daily');
  programming++;
}

let initial = 1;
while (initial < 21) {
  console.log(initial);
  initial++;
}

let initialValue = 50;
while (initialValue <= 100) {
  console.log(initialValue);
  initialValue++;
}

let initialVALUE = 1;
while (initialVALUE <= 10) {
  console.log(initialVALUE * 3);
  initialVALUE++;
}

let initialValue1 = 111;
while (initialValue1 >= 110) {
  console.log(initialValue1 / 2);
  initialValue1--;
}

// লুপ দিয়ে যোগফল

let startingNumber = 50;
while (startingNumber <= 100) {
  console.log(startingNumber);
  startingNumber++;
}

let startingNumber1 = 5;
let sum = 0;
while (startingNumber1 <= 15) {
  sum = sum + startingNumber1;
  startingNumber1++;
}
console.log('Sum:', sum);

let studentRoll = 1;
let sumOfRoll = 0;
while (studentRoll <= 50) {
  sumOfRoll = sumOfRoll + studentRoll;
  studentRoll++;
}
console.log('Sum of Roll:', sumOfRoll);

let numbers = 21;
let sumOfNumbers = 0;
while (numbers <= 50) {
  sumOfNumbers = sumOfNumbers + numbers;
  console.log(sumOfNumbers);
  numbers++;
}
console.log('Sum of Numbers:', sumOfNumbers);

let NUM = 20;
let sumOfNUM = 0;
while (NUM <= 40) {
  sumOfNUM = sumOfNUM + NUM;
  NUM++;
}
console.log('Sum:', sumOfNUM);

//For লুপের খিচুড়ি

for (let i = 150; i <= 170; i++) {
  console.log(i);
}

let summationOfRoll = 0;
for (let index = 31; index <= 58; index++) {
  console.log(index);
  summationOfRoll = summationOfRoll + index;
}
console.log('Sum of Roll:', summationOfRoll);

let add = 0;
for (let index = 25; index <= 75; index++) {
  add = add + index;
}
console.log('Sum of num: ', add);

// জোড় বিজোড় লুপের শর্ত
for (let index = 20; index <= 50; index += 1) {
  if (index % 7 == 0) {
    console.log(index);
  }
}

for (let index = 40; index <= 80; index++) {
  if (index % 7 == 0 && index % 5 == 0) {
    console.log(index);
  }
}

let newSum = 0;
for (let index = 1; index <= 40; index++) {
  if (index % 13 == 0) {
    newSum = newSum + index;
  }
}
console.log('Total :', newSum);

for (let index = 1; index <= 50; index += 4) {
  console.log(index);
}

for (let index = 0; index <= 100; index++) {
  if (index % 9 == 0 && index % 6 == 0) {
    console.log(index);
  }
}

let NEWsum = 0;
for (let index = 1; index <= 50; index++) {
  if (index % 3 == 0 && index % 4 == 0) {
    console.log(index);
    NEWsum = NEWsum + index;
  }
}
console.log('Total:', NEWsum);

// লুপের Break-আপ

for (let index = 1; index <= 30; index++) {
  console.log(index);
  if (index >= 15) {
    break;
  }
}

for (let index = 1; index <= 40; index++) {
  if (index % 7 == 0) {
    continue;
  }
  console.log(index);
}

for (let index = 1; index <= 15; index++) {
  if (index == 9) {
    continue;
  }
  console.log(index);
}

for (let index = 1; index <= 20; index++) {
  if (index == 12) {
    continue;
  }
  console.log(index);
}

for (let index = 1; index <= 25; index++) {
  if (index % 3 == 0) {
    continue;
  }
  console.log(index);
}

for (let index = 91; index <= 120; index++) {
  if (index % 10 == 0) {
    continue;
  }
  console.log(index);
}
