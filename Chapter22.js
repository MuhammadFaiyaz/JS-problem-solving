/*---------------------------------------------------------------------------------------------------
                              মোস্ট কনফিউজিং this
--------------------------------------------------------------------------------------------------*/
/*
1. ব্রাউজারে window অবজেক্ট জিনিসটা কী? */
//? window অবজেক্টকে ক্ষেত্রবিশেষে window, this, global this এইসব নামে ডাকে। গ্লোবাল অবজেক্ট হলো এমন একটা অবজেক্ট, যেটা সব গ্লোবাল ভেরিয়েবল, ফাংশন এবং প্রোপার্টিগুলোকে ধরে রাখে। ওভারঅল জাভাস্ক্রিপ্ট কীভাবে চলবে, সেটা ঠিক করে এবং যেখানেই জাভাস্ক্রিপ্ট চলুক না কেন, সেখানেই একটা গ্লোবাল অবজেক্ট থাকবেই।

/*
2. ব্রাউজারে console log(this); রান করলে this - এর ভ্যালু কী হবে ? */
console.log(this); //! Window {window: Window, self: Window, document: document, name: '', location: Location, …}

/*
3. অবজেক্টের মেথড নরমাল ফাংশন আর arrow ফাংশন দিয়ে ডিক্লেয়ার করলে this - এর কোনো কিছু কি ডিফারেন্ট হবে ? */
//~ In normal function 'this' is window or main object and in arrow function 'this' refers to window or global this.

/*---------------------------------------------------------------------------------------------------
                              সহজ সরল সিম্পল this
--------------------------------------------------------------------------------------------------*/
/*
1. ল্যাপটপ নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। সেটার মধ্যে ব্র্যান্ড নামে একটা প্রোপার্টি থাকবে, যার মান হবেdell এবং getBrand নামে একটা মেথড থাকবে, যেটা ল্যাপটপের brand-কে কনসোল লগ করবে। এখন মোবাইল নামে একটা অবজেক্ট ডিক্লেয়ার কর। মোবাইলের মধ্যে ব্র্যান্ড থাকবে। তারপর ল্যাপটপ অবজেক্টের getBrand মেথডটি মোবাইলে এনে ইউজ কর।  */
const laptop = {
  brand: 'Dell',
  getBrand: function () {
    console.log(this.brand);
  },
};

const mobile = {
  brand: 'samsung',
};
mobile.getBrand = laptop.getBrand;
mobile.getBrand();

/*
2. this কীভাবে নির্ধারিত হয়? কী কী context-এ এটা পরিবর্তন হয়?  */
//? এইটা থেকে বুঝা যায়। this বলতে কোথায় কীভাবে কল করা হচ্ছে, সেটার ওপরে নির্ভর করে। যদি কোনো অবজেক্টের ওপরে কল করা হয়, তাহলে সে অবজেক্টকে বুঝাবে। আর যদি কোনো কিছুর ওপরে কল করা না হয়, তাহলে সে গ্লোবাল অবজেক্ট বা window অবজেক্টকে বুঝাবে।

/*
3. manager নামে একটি অবজেক্ট তৈরি কর যার মধ্যে assignWork নামে মেথড থাকবে। সেই assignWork মেথড এর ভিতরের manager এর tasks নামক প্রপার্টি (একটা অ্যারে) সেটাতে নতুন টাস্ক এর নাম যোগকরবে। এই কোড লিখে আউটপুট চেক কর। আর এই মেথড এর ভিতরে this বলতে কাকে বুঝায় সেটা মেথডের উপরে কমেন্ট করে লিখ। */
const manager = {
  tasks: [],
  assignWork: function (newTask) {
    // & here this refers to manager object.
    this.tasks.push(newTask);
  },
};

manager.assignWork('Make a presentation');
manager.assignWork('Take part in meeting');
console.log(manager.tasks);

/*---------------------------------------------------------------------------------------------------
                              this কে bind দিয়া call করো
--------------------------------------------------------------------------------------------------*/
/*
1. টিম নামে একটা অবজেক্ট বানা, যার মধ্যে name এবং players থাকবে। players - এর মধ্যে খেলোয়াড়ের সংখ্যা থাকবে। এ ছাড়া টিমের মধ্যে একটা মেথড থাকবে play নামে, যেখানে this name এবং this.players দিয়ে একটা স্ট্রিং বানিয়ে কনসোল লগ করবি। প্রথমে team থেকে play মেথডকে কল করে আউটপুট দেখ। তারপর আরেকটা অবজেক্ট বানা tournament নামে। সেটার মধ্যেও name এবং players থাকবে। টুর্নামেন্টে কতজন খেলোয়াড় খেলতেছে, সেই সংখ্যা থাকবে। এখন.bind() ইউজ করে team অবজেক্টের play মেথড ইউজ করবি, তবে সেটার this হিসেবে টুর্নামেন্টকে ইউজ করবি। */
const team = {
  name: 'My tiger',
  players: 11,
  play: function () {
    console.log(`${this.name} is playing with ${this.players}`);
  },
};
team.play();

const tournament = {
  name: 'World Cup',
  players: 352,
};
const tournamentInfo = team.play.bind(tournament);
tournamentInfo();

/*
2. একটা car অবজেক্ট বানা, যার মধ্যে speed এবং price থাকবে। এরপর একটি মেথড drive বানা, যেখানে this.speed এবং this.price দিয়ে গাড়ির তথ্য কনসোল লগ করবে। এখন car অবজেক্টের drive ইউজ করবি.call() ব্যবহার করে। তবে this - এর মান হিসেবে একবার bike নামের একটা অবজেক্ট দিয়ে দিবি। আবার truck নামের আরেকটা অবজেক্ট দিয়ে দিবি। আর bike এবং truck এই দুই অবজেক্টই speed আর price প্রোপার্টি থাকবে। */
const car1 = {
  speed: 120,
  price: 20000,
  drive: function () {
    console.log(
      `The speed of the car is ${this.speed} and its price is ${this.price}`
    );
  },
};
car1.drive();
const bike = {
  speed: 60,
  price: 500,
};
car1.drive.call(bike);
const truck = {
  speed: 80,
  price: 20000,
};
car1.drive.call(truck);

/*
3. একটা অবজেক্ট বানা "employee" নামে, যার মধ্যে name এবং role থাকবে। employee-এর মধ্যে একটা মেথড থাকবে "details" নামে, যেখানে this name এবং this role দিয়ে কনসোল লগ করবে। প্রথমে employee থেকে details মেথড কল করে আউটপুট দেখ। এরপর আরেকটা অবজেক্ট বানা "manager" নামে, যার মধ্যে name এবং role থাকবে। এখন .apply() ব্যবহার করে employee-এর details মেথড manager ইউজ কর। */
const employee = {
  name: 'Alice',
  role: 'Software Engineer',
  details() {
    console.log(`Name: ${this.name} and his role: ${this.role}`);
  },
};

employee.details();
const Manager = {
  name: 'Robert',
  role: 'Manager',
};

employee.details.apply(Manager);

/*
4. একটা অবজেক্ট বানা "classroom" নামে, যার মধ্যে name এবং students থাকবে। students - এর মধ্যে অনেকগুলা student - এর নাম থাকবে। classroom - এর মধ্যে একটা মেথড থাকবে "attendance" নামে, যেখানে this.name এবং this students - এর নামগুলো কমা দিয়ে join করে স্ট্রিং বানিয়ে কনসোল লগ করবে। প্রথমে classroom থেকে attendance মেথড কল করে আউটপুট দেখ। এরপর অন্য একটা অবজেক্ট বানা "lab" নামে, যার মধ্যে name এবং students থাকবে। এবার.bind() ব্যবহার করে classroom - এর attendance মেথড lab - এর সাথে বেঁধে দে। */
const classroom = {
  name: 'Class 101',
  students: ['Alice', 'Bob', 'Charlie', 'David'],
  attendance() {
    console.log(
      `${this.name} has ${
        this.students.length
      } students. They are ${this.students.join(', ')}`
    );
  },
};
classroom.attendance();

const lab = {
  name: 'Chemistry Lab',
  students: ['Mohammed', 'Ahmed', 'Ali', 'Hassan'],
};
const labInfo = classroom.attendance.bind(lab);
labInfo();

/*---------------------------------------------------------------------------------------------------
                              ক্লোজ আপ এর closure
--------------------------------------------------------------------------------------------------*/
/*
1. closure কী জিনিস ? */
//& Closure হল একটি শক্তিশালী প্রোগ্রামিং ধারণা, যেখানে একটি ফাংশন তার lexical environment (পরিবেশ) "স্মরণ" করে রাখে এমনকি সেই ফাংশনের বাইরে কল করা হলেও। উদাহরণস্বরূপ, যখন কোনও inner function তার parent (বাইরের) ফাংশনের ভেরিয়েবলগুলো ব্যবহার করে, তখন সেই inner function তার lexical scope কে রেখেই চলে, এটাই হলো closure।

/*
2. তুই একটা fridgeTracker() ফাংশন বানা এবং তোর মেসের সবার জন্য আলাদা আলাদা ক্লোজার বানা। যাতে যে যতবার ফ্রিজ ওপেন করবে, তার কাউন্টার তত বাড়বে। */
function fridgeTracker() {
  let count = 0;
  return function () {
    count++;
    console.log(`Fridge opened ${count} times.`);
  };
}

let shafiFridge = fridgeTracker();
let MalikFridge = fridgeTracker();
let imranFridge = fridgeTracker();
let nahidFridge = fridgeTracker();

MalikFridge();
nahidFridge();
MalikFridge();
imranFridge();
MalikFridge();
shafiFridge();
imranFridge();
shafiFridge();
MalikFridge();
nahidFridge();
MalikFridge();
shafiFridge();
nahidFridge();
imranFridge();
nahidFridge();

/*
3. তুই একটা taskTracker() ফাংশন বানা, যেখানে প্রতিবার একটা কাজ ফিনিশ হওয়ার পর কাউন্ট এক এক করে বাড়বে। তোর বা তোর ফ্রেন্ড সবার কাজের স্কোপ আলাদা আলাদা থাকবে। */
function taskTracker() {
  let count = 0;
  return function () {
    count++;
    console.log(`Finished ${count} tasks.`);
  };
}
let myTask = taskTracker();
let myFriendTask = taskTracker();
let myBestFriendTask = taskTracker();

myTask();
myTask();
myTask();
myBestFriendTask();
myBestFriendTask();
myFriendTask();
myFriendTask();
myFriendTask();
myFriendTask();

/*---------------------------------------------------------------------------------------------------
hoisting- এর মরণ কামড়
--------------------------------------------------------------------------------------------------*/
/*
1. একটা ভেরিয়েবল ডিক্লেয়ার কর, যেটার মধ্যে কমেন্টের সংখ্যা থাকবে। এখন এই ভেরিয়েবলটাকে ডিক্লেয়ার করার আগের লাইনে এইটার মান এক বাড়ানোর চেষ্টা কর। দেখ কী হয়। */
commentNumber += 1;
var commentNumber = 15;
console.log(commentNumber); //! avaScript-এ let এবং const দিয়ে ডিক্লেয়ার করা ভেরিয়েবলগুলো hoisting হয় বটে, কিন্তু temporal dead zone (TDZ) নামক একটা জায়গায় থাকে যতক্ষণ না সে লাইনে পৌঁছে যেটায় তাকে initialize করা হয়েছে।
//& var ব্যবহার করাতে, এখানে commentCount উপরের লাইনে undefined হিসেবে hoist হয়, তারপর undefined++ করলে NaN (Not a Number) হয়ে যায়।

/*
2. const দিয়ে views নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। আর ডিক্লেয়ার করার আগের লাইনে এইভেরিয়েবলকে 2 দিয়ে ভাগ কর। তাহলে ভাগফল কত পাবি ? */
// views / 2;
// console.log(views); // ReferenceError: Cannot access 'views' before initialization
const views = 15555;

/*
3. Temporal Dead Zone(TDZ) কাকে বলে এবং এটি কেন গুরুত্বপূর্ণ ? */
//^ Temporal Dead Zone (TDZ) হলো JavaScript-এ এমন একটি সময়সীমা, যেখানে কোনো ভেরিয়েবলকে let, const দিয়ে ডিক্লেয়ার করার আগে তাকে এক্সেস (access) করা যায় না। এই সময়কালকে TDZ বলে। TDZ শুরু হয় যখন ভ্যারিয়েবল স্কোপে প্রবেশ করে, এবং শেষ হয় যখন ভ্যারিয়েবলটি আসলে ইন্ডেক্স বা ইনিশিয়ালাইজ হয়।

/*
4. function expression দিয়ে লেখা ফাংশনকে hoisting করলে কেন initialization - এর আগে কল করা যায় না ? */
//^ Function expression-এ শুধু ভেরিয়েবলটাকে hoist করা হয়, কিন্তু initialization বা assignment হয় না। এই সময়ের মধ্যে (ডিক্লেয়ারেশনের আগে) ওই ভেরিয়েবলটি TDZ (Temporal Dead Zone) এ থাকে। তাই কল করলে ReferenceError বা TypeError হয়।

/*
5. var দিয়ে ডিক্লেয়ার করা ভেরিয়েবলের hoisting behavior কেমন?উদাহরণসহ ব্যাখ্যা কর। */
//^ var দিয়ে ডিক্লেয়ার করা ভেরিয়েবল hoist হয়।

//^ তবে শুধু ডিক্লারেশন উপরে ওঠে, initialization বা মান অ্যাসাইনমেন্ট হয় না।

//^ তাই var দিয়ে বানানো ভেরিয়েবলকে ডিক্লেয়ারের আগে এক্সেস করলে undefined পাওয়া যায় — error না।

/*
6. let এবং var-এর hoisting behavior একই ? */
//^ no.

/*
7. দুইটা সংখ্যার মধ্যে বড় সংখ্যা কোনটা, সেটা বের করার একটা ফাংশন লিখে ফেল। তারপর এই ফাংশন ডিক্লেয়ারকরার আগেই সেই ফাংশনকে কল করে ফেল 87 আর 12 দিয়ে। তারপর রিটার্ন যেটা পাবি, সেটাকে কনসোল লগ করে ফেল। যেখানে কনসোল লগ করছস, সেখানে কমেন্ট করে লিখে ফেল, কীভাবে ফাংশন ডিক্লেয়ার করার আগেই সেই ফাংশনকে ইউজ করতে পারলি। */
console.log(numberComparison(87, 12)); //^ এই ধরণের ফাংশন পুরোপুরি hoist হয়। অর্থাৎ, জাভাস্ক্রিপ্ট স্কোপের শুরুতে ফাংশনটাকে নিয়ে নেয়, এমনকি কল করার আগেই।
function numberComparison(a, b) {
  if (a < b) {
    return b;
  } else {
    return a;
  }
}

/*---------------------------------------------------------------------------------------------------
                            execution context এর গোমড় ফাঁস
--------------------------------------------------------------------------------------------------*/
/*
1. Execution Context কী জিনিস? এটা কীভাবে কাজ করে? */
//^ যখনই কোনো কোড রান হয় (যেমন: ফাংশন কল, স্ক্রিপ্ট শুরু ইত্যাদি), তখন জাভাস্ক্রিপ্ট ইঞ্জিন সেই কোড চালানোর জন্য একটা আলাদা পরিবেশ তৈরি করে — এটাকেই বলা হয় Execution Context। স্ক্রিপ্ট চালু হবার সময় প্রথমেই তৈরি হয়। এখানে this মানে হয় window (browser environment-এ).
//^ Function Execution Context (FEC) যখনই কোনো ফাংশন কল হয়, নতুন Execution Context তৈরি হয়।

// Execution Context তৈরি হয় দুইটি ধাপে:

// 1. Creation Phase (তৈরি করার ধাপ):
// একটি variable environment তৈরি হয়

// scope chain গঠন হয়

// this কী হবে, সেটি নির্ধারিত হয়

// Hoisting হয়: সকল ফাংশন ও ভ্যারিয়েবল ডিক্লেয়ারেশন মেমোরিতে উঠে যায়

// 2. Execution Phase (নির্বাহ করার ধাপ):
// এখন আসল কোড লাইন বাই লাইন এক্সিকিউট হতে থাকে

// ভ্যারিয়েবল গুলো মান পায়

// ফাংশন গুলো চালানো হয়

/*
2. গ্লোবাল কনটেক্সটের এর কাজ কী? এটা কেন দরকার পড়ে? */
// Global Execution Context (GEC) হচ্ছে সেই প্রথম ও প্রধান পরিবেশ (context) যেটা জাভাস্ক্রিপ্ট ইঞ্জিন কোড চালানোর সময় সবার আগে তৈরি করে। যখন তোমার স্ক্রিপ্ট বা প্রোগ্রাম শুরু হয়, তখন প্রথমেই একটা গ্লোবাল কনটেক্সট তৈরি হয়।

// গ্লোবাল অবজেক্ট তৈরি করে
// this কী হবে তা নির্ধারণ করে
// Variable & Function Hoisting করে
// Memory Allocate করে সব ভেরিয়েবলের জন্য
// শুরুতেই undefined দিয়ে ভ্যারিয়েবল তৈরি করে নেয়
// প্রোগ্রামের Execution শুরু করে
