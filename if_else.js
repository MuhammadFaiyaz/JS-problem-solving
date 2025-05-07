// Condition: নো কনফিউশন;   মানলে আছি, না মানলেও আছি

const currentHour = 17; // 24-hour format
if (currentHour < 18) {
  console.log('Mom will feed me snacks');
} else {
  console.log('Mom will hit me with a broom.');
}

const appLogin = true;
if (appLogin == true) {
  console.log('Welcome');
} else {
  console.log('Get Lost');
}

const joggingDistance = 5; // in km
if (joggingDistance == 5) {
  console.log('I will give you chocolate');
} else {
  console.log("You're going to get fat!");
}

const myAnnualExamScore = 85; // out of 100
if (myAnnualExamScore >= 80) {
  console.log('I will buy you a bike.');
} else {
  console.log("You won't get a bike.");
}

const movieShowTime = 22; // 10 pm
if (movieShowTime < 21) {
  console.log('I will go to the movie.');
} else {
  console.log('No need to go to the movie.');
}

const temperature = 23; // in Celsius
if (temperature >= 30) {
  console.log('On the AC');
} else {
  console.log('I can use blanket');
}

// ছাত্র যখন পাত্র
let AGE = 18;
let HEIGHT = 61; // in inch
if (AGE > 18 && HEIGHT > 60) {
  console.log('He will push the car');
} else {
  console.log("He won't push the car");
} // output: He won't push the car

let mathScore = 90;
let englishScore = 85;
if (mathScore > 80 || englishScore > 85) {
  console.log('You are eligible for the addmission.');
} else {
  console.log('Toke biye dewa hobe.');
} // output: You are eligible for the addmission.

let GPA = 4.43;
let familyIncome = 5000; // in BDT
if (GPA == 5 && familyIncome < 10000) {
  console.log('You are eligible for the scholarship.');
} else {
  console.log(
    'You are not eligible for the scholarship. You have to study with paying money.'
  );
} // output: You are not eligible for the scholarship. You have to study with paying money.

let ageOfCandidate = 25;
let experience = 3; // in years
if (ageOfCandidate < 30 && experience > 2) {
  console.log('You are eligible for the written test.');
} else {
  console.log('You are not eligible for the written test.');
} // output: You are eligible for the written test.

let numberOfEggs = 11;
let haveChickens = false;
if (numberOfEggs > 12 || haveChickens == false) {
  console.log('I will eat Korma of egg.');
} else {
  console.log('I will eat bread and banana.');
} // output: I will eat Korma of egg.

let Temperature = 103; // in Fahrenheit
let haveCough = true;
if (Temperature > 100 || haveCough == true) {
  console.log('I will go to the doctor.');
} else {
  console.log('I will sleep wrapped in a blanket.');
} // output: I will go to the doctor.

let attendance = 75; // in percentage
let homeworkCompleted = true;
if (attendance > 80 && homeworkCompleted == true) {
  console.log('You are eligible for the exam.');
} else {
  console.log('You are auto fail.');
} //output: You are auto fail.

let haveElectricity = true;
let chargeofMobile = 0;
if (haveElectricity == true && chargeofMobile < 10) {
  console.log('I will go for study.');
} else {
  console.log('I will play video games.');
} // output: I will go for study.

let shirtPrice = 790; // in BDT
let cuponCode = 'DISCOUNT20';
if (shirtPrice > 1000 && cuponCode == 'DISCOUNT20') {
  console.log('You will get 20% discount.');
}

// ডিস্কাউন্টখেকো else-if

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

let age = 25;
if (age < 12) {
  console.log('Child wiil get full discount.');
} else if (age > 60) {
  console.log('Senior citizen will get 50% discount.');
} else {
  console.log('No discount available. You have to pay the full bill.');
}

let accountBalance = 11687;
if (accountBalance < 1000) {
  console.log('Make a deposit.');
} else if (accountBalance >= 1000 && accountBalance <= 5000) {
  console.log('Bindas life, Enjoy your life.');
} else {
  console.log('You are rich. Marry me.');
}

let examScore = 75;
if (examScore > 80) {
  console.log('Congratulations! You got A+.');
} else if (examScore < 50) {
  console.log('You are failed.');
} else {
  console.log('You passed.');
}

let totalPage = 796;
if (totalPage < 100) {
  console.log('Small book.');
} else if (totalPage > 500) {
  console.log('Heart-attack size book.');
} else {
  console.log('Mid-size book.');
}

let temperatureInCelsius = -5;
if (temperatureInCelsius < 0) {
  console.log('Ice');
} else if (temperatureInCelsius > 20) {
  console.log('Hot hot');
} else {
  console.log('Cool cool');
}

let playerLevel = 55;
if (playerLevel < 10) {
  console.log('Novice');
} else if (playerLevel > 50) {
  console.log('Pro gamer');
} else {
  console.log('Expert');
}

// স্যারের বাঁশ বাসায় ঠাস ঠাস

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

let userAccountIsActive = true;
let premiumSubscription = true;
if (userAccountIsActive == true) {
  if (premiumSubscription == true) {
    console.log('You have access to premium content.');
  } else {
    console.log('Use the free version.');
  }
}

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

const guestInParty = 106;
let willBringGift = false;
if (guestInParty > 100) {
  if (willBringGift == true) {
    console.log("Let's Party all night");
  } else {
    console.log("I'll party with myself.");
  }
}

// লজিকাল নট (!) ফিজিক্যাল হট

let purchse = 3600; // in BDT
let cashback; // in BDT
purchse > 3000 ? (cashback = 500) : (cashback = 0);
console.log(`${cashback} cashback available.`);

let myAGE = 25;
myAGE > 15 ? console.log('Teenager') : console.log('Child'); // output: Teenager

let isLoggedIn = false;
isLoggedIn == true
  ? console.log('Welcome back!')
  : console.log('Please log in.');

let isFuelTankFull = true;
isFuelTankFull == true
  ? console.log('Ready for a long drive.')
  : console.log('fuel the tank.');

let passInExam = true;
passInExam == true
  ? console.log('Party time')
  : console.log('Next semester e serious study korbo.');

let sunny = false;
sunny == false ? console.log('Stay home.') : console.log();

let Expensive = false;
Expensive == false ? console.log('I will buy this item.') : console.log();
