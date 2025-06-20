/*---------------------------------------------------------------------------------------------------
                                তিন লেয়ারের JSON শাসন
--------------------------------------------------------------------------------------------------*/
/*
1. জাভাস্ক্রিপ্ট অবজেক্ট ও JSON স্ট্রিংয়ের মধ্যে কী কী পার্থক্য? */
/*
জাভাস্ক্রিপ্ট অবজেক্ট: key গুলো without quotes লিখা যায়। value হতে পারে string, number, boolean, function, array, object — সব কিছু। key এবং string value single quotes (" ") দিয়েও থাকতে পারে। জাভাস্ক্রিপ্টে সরাসরি ব্যবহারযোগ্য। ডেটা সংরক্ষণ, প্রসেসিং, ফাংশনে পাস করতে সুবিধা হয়।

JSON স্ট্রিং : এটি হলো একটি স্ট্রিং। দেখতে অবজেক্টের মতো, কিন্তু আসলে string। function, undefined, symbol, ইত্যাদি JSON-এ রাখা যায় না। key এবং string value double quotes (" ") দিয়ে থাকতে হবে। মূলত ডেটা ট্রান্সফার বা স্টোর করার জন্য ব্যবহার হয় (যেমন: API থেকে ডেটা পাঠানো বা পাওয়া)। JSON string ব্যবহার করতে হলে, সেটিকে প্রথমে object-এ রূপান্তর (parse) করতে হয়। */

/*
2. একটা অবজেক্ট বানাও, যেখানে একটা user থাকবে। user-এর মধ্যে name, email, address, এবং একটা order history থাকবে। সেই order history-ও ভেতরে ডিটেল অবজেক্ট থাকবে। JSON.stringify দিয়ে পুরো অবজেক্টটাকে JSON স্ট্রিং কনভার্ট করো। */
const User = {
  name: 'Faiyaz Khan',
  email: 'faiyaz@example.com',
  address: {
    street: '123 Main Road',
    city: 'Dhaka',
    postalCode: '1207',
    country: 'Bangladesh',
  },
  orderHistory: [
    {
      orderId: 'ORD001',
      date: '2025-06-10',
      items: [
        { name: 'Jubba', quantity: 1, price: 1200 },
        { name: 'Tupi', quantity: 2, price: 150 },
      ],
      total: 1500,
    },
    {
      orderId: 'ORD002',
      date: '2025-06-15',
      items: { name: 'Perfume', quantity: 1, price: 950 },
      total: 950,
    },
  ],
};
const userJSON = JSON.stringify(User);
console.log(userJSON);

/*
3. shopping cart অবজেক্ট বানাও, যার মধ্যে products (array of products), total price (সবগুলো প্রোডাক্টের টোটাল প্রাইস) এবং user details (name, id, contact) থাকবে। এরপর এটাকে JSON স্ট্রিংয়ে কনভার্ট করো। */
const shoppingCart = {
  products: [
    {
      id: 'P001',
      name: 'Jubba',
      quantity: 2,
      pricePerUnit: 1200,
    },
    {
      id: 'P002',
      name: 'Tupi',
      quantity: 1,
      pricePerUnit: 250,
    },
    {
      id: 'P003',
      name: 'Attar',
      quantity: 3,
      pricePerUnit: 300,
    },
  ],
  totalPrice: 0,
  userDtails: {
    id: 'U789',
    name: 'Faiyaz khan',
    contact: '01700000000',
  },
};

shoppingCart.totalPrice = shoppingCart.products.reduce((total, product) => {
  return total + product.quantity * product.pricePerUnit;
}, 0);

console.log(shoppingCart);
const shoppingJSON = JSON.stringify(shoppingCart);
console.log(shoppingJSON);

/*
4. একটি weather অবজেক্ট বানাও, যার মধ্যে city, temperature, humidity এবং forecast (array) থাকবে। forecast array-তে পরপর ৭ দিনের সহজত ডেটাসমূহ থাকবে। এটাকে জেসনএ কনভার্ট করো। */
const weather = {
  city: 'Chattogram',
  temperature: 32, // বর্তমান তাপমাত্রা সেলসিয়াসে
  humidity: 78, // শতাংশে আর্দ্রতা
  forecast: [
    { day: 'Monday', condition: 'Sunny', high: 34, low: 26 },
    { day: 'Tuesday', condition: 'Partly Cloudy', high: 33, low: 27 },
    { day: 'Wednesday', condition: 'Rainy', high: 30, low: 25 },
    { day: 'Thursday', condition: 'Thunderstorms', high: 29, low: 24 },
    { day: 'Friday', condition: 'Cloudy', high: 31, low: 26 },
    { day: 'Saturday', condition: 'Sunny', high: 35, low: 27 },
    { day: 'Sunday', condition: 'Light Rain', high: 32, low: 25 },
  ],
};
console.log(JSON.stringify(weather));

/*
5. সিনেমার জন্য movie-র অবজেক্ট থাকবে যেমন title, release year, actors এবং ratings। actors একটি array হবে (যেখানে actor দের নাম থাকবে) এবং ratings একটি number। তারপর JSON.stringify দিয়ে কনভার্ট করো। কনভার্ট করার পর সেটাকে আবার জাভাস্ক্রিপ্ট অবজেক্টে কনভার্ট করো। */
const movie = {
  title: "Baby's day out",
  releaseYear: 2023,
  actors: ['Actor 1', 'Actor 2', 'Actor 3'],
  ratings: 8.5, // Rating out of 10
};
const movieJSON = JSON.stringify(movie);
console.log(movieJSON);
const movieObj = JSON.parse(movieJSON);
console.log(movieObj);

/*
6. এবার project management system বানাও। যেখানে অনেকগুলো প্রজেক্ট থাকবে একটা অ্যারের মধ্যে। প্রত্যেকটা প্রজেক্টের মধ্যে প্রজেক্টের নাম, project description, team members (array), deadlines এবং tasks। প্রতিটি task-এ title, assignee এবং status থাকবে। JSON.stringify দিয়ে কনভার্ট করো। */
const projectManagementSystem = [
  {
    projectName: 'Website Redesign',
    description: 'Improve UI/UX and responsiveness for the company website.',
    teamMembers: ['Faiyaz', 'Amina', 'Rahim'],
    deadline: '2025-07-15',
    tasks: [
      { title: 'Create wireframes', assignee: 'Faiyaz', status: 'In Progress' },
      { title: 'Update CSS styles', assignee: 'Amina', status: 'Pending' },
      { title: 'Responsive testing', assignee: 'Rahim', status: 'Not Started' },
    ],
  },
  {
    projectName: 'E-commerce Backend Setup',
    description: 'Develop and integrate backend API for the online store.',
    teamMembers: ['Karim', 'Faiyaz', 'Nadia'],
    deadline: '2025-08-01',
    tasks: [
      {
        title: 'Set up database schema',
        assignee: 'Karim',
        status: 'Completed',
      },
      {
        title: 'Develop login system',
        assignee: 'Faiyaz',
        status: 'In Progress',
      },
      { title: 'Add product APIs', assignee: 'Nadia', status: 'Pending' },
    ],
  },
];
console.log(JSON.stringify(projectManagementSystem));

/*
7. লার্নিং প্ল্যাটফর্মের জন্য courses-এর কিছু ডাটা বানাও। সেখানে মিনিমাম ৩টা কোর্স থাকবে। প্রত্যেকটা কোর্সে course title, instructor name, duration এবং lessons (array)। lessons array-তে lesson name, duration এবং difficulty level থাকবে। ডিফিকাল্টি লেভেল হতে হবে beginner, intermediate, advanced যেকোনো একটা হতে পারে। JSON.stringify দিয়ে কনভার্ট করো। */
const courses = [
  {
    courseTitle: 'Web Development Basics',
    instructorName: 'Asif Iqbal',
    duration: '10 hours',
    lessons: [
      {
        lessonName: 'Introduction to HTML',
        duration: '2 hours',
        difficultyLevel: 'beginner',
      },
      {
        lessonName: 'Styling with CSS',
        duration: '3 hours',
        difficultyLevel: 'beginner',
      },
      {
        lessonName: 'JavaScript Fundamentals',
        duration: '5 hours',
        difficultyLevel: 'intermediate',
      },
    ],
  },
  {
    courseTitle: 'Python for Data Science',
    instructorName: 'Fahmida Akter',
    duration: '15 hours',
    lessons: [
      {
        lessonName: 'Python Basics',
        duration: '4 hours',
        difficultyLevel: 'beginner',
      },
      {
        lessonName: 'Pandas and NumPy',
        duration: '6 hours',
        difficultyLevel: 'intermediate',
      },
      {
        lessonName: 'Data Visualization',
        duration: '5 hours',
        difficultyLevel: 'advanced',
      },
    ],
  },
  {
    courseTitle: 'Graphic Design Masterclass',
    instructorName: 'Mahmud Hasan',
    duration: '12 hours',
    lessons: [
      {
        lessonName: 'Design Principles',
        duration: '3 hours',
        difficultyLevel: 'beginner',
      },
      {
        lessonName: 'Adobe Photoshop Tutorial',
        duration: '5 hours',
        difficultyLevel: 'intermediate',
      },
      {
        lessonName: 'Illustrator and Typography',
        duration: '4 hours',
        difficultyLevel: 'advanced',
      },
    ],
  },
];

console.log(JSON.stringify(courses));

/*
8. একটি ই-কমার্স সাইটে product review-র ডাটা বানাও যেখানে প্রত্যেকটা রিভিউ অবজেক্টে product name, reviewer details (name, email), rating, and review text থাকবে। এরপর সেই অবজেক্টগুলোকে JSON.stringify দিয়ে কনভার্ট করো। সেই json-কে আবার জাভাস্ক্রিপ্ট অবজেক্টে কনভার্ট করো। */
const productReviews = [
  {
    productName: 'Smartwatch Pro X',
    reviewerDetails: {
      name: 'Ahmed Kabir',
      email: 'ahmed.kabir@example.com',
    },
    rating: 5, // Rating out of 5
    reviewText:
      'An amazing smartwatch! The battery life is excellent and the features are incredibly useful.',
  },
  {
    productName: 'Bluetooth Headphones Ultra',
    reviewerDetails: {
      name: 'Nasrin Sultana',
      email: 'nasrin.sultana@example.com',
    },
    rating: 4,
    reviewText:
      'The sound quality is superb, but they feel a bit uncomfortable after wearing them for a long time.',
  },
  {
    productName: 'Gaming Laptop GZ-500',
    reviewerDetails: {
      name: 'Rakib Hasan',
      email: 'rakib.hasan@example.com',
    },
    rating: 4,
    reviewText:
      'Great gaming performance, but the laptop tends to run a bit hot.',
  },
  {
    productName: 'Basic Kitchen Blender',
    reviewerDetails: {
      name: 'Fariha Akter',
      email: 'fariha.akter@example.com',
    },
    rating: 3,
    reviewText:
      "It's fine for basic use, but struggles a bit with tougher blending tasks.",
  },
];

console.log();
console.log(JSON.parse(JSON.stringify(productReviews)));

/*---------------------------------------------------------------------------------------------------
                                Promise রক্ষাকারী প্রেমিক
--------------------------------------------------------------------------------------------------*/
/*
1. একটা প্রমিজ লিখে ফেল। এই প্রমিজ যখন resolve করবে, তখন রিটার্ন হিসেবে একটা অ্যারে পাবে, সেখানে অনেকগুলো ইউজারের নাম থাকবে। আর যদি reject করে, তখন রিটার্ন করে, কোনো ইউজারের ডাটা নাই। */
const getUsers = new Promise((resolve, reject) => {
  const usersAvailable = true;
  const users = ['Jabir', 'Abdullah', 'Bara', 'Suhayle'];
  if (usersAvailable) {
    resolve(users);
  } else {
    reject('No users data available');
  }
});
getUsers
  .then(userId => {
    console.log(userId);
  })
  .catch(error => {
    console.log(error);
  });

/*
2. তুই একটা পেমেন্ট প্রসেস করার প্রমিজ লিখ। সেখানে amount নামে একটা ভেরিয়েবল থাকবে। এই ভেরিয়েবলের মান পজিটিভ হলে (0 এর বেশি হলে) প্রমিজ সফলভাবে প্রসেস হবে। আর যদি এমাউন্টের মান 0 বা তার কম হলে প্রমিজ reject হবে। */
const promiseProcess = new Promise((reject, resolve) => {
  const amount = -6;
  if (amount > 0) {
    resolve(amount);
  } else {
    reject('404 not ound');
  }
});
promiseProcess
  .then(Amount => {
    console.log(Amount);
  })
  .catch(error => {
    console.log(error);
  });

/*
3. এবার sendEmail নামে একটা ফাংশন বানিয়ে ফেল। সেই ফাংশনের ভিতরে একটা প্রমিজ বানিয়ে ফেলবি এবং সেই প্রমিজটা রিটার্ন করবি। এই ফাংশন দুইটা প্যারামিটার নিবে। প্রথমটা হিসেবে একটা ই-মেইল এবং দ্বিতীয়টা হিসেবে একটা মেসেজ। ফাংশনটা চেক করবে validEmail-এর মধ্যে ওই ই-মেইলটা আছে কিনা। যদি validEmail-এর মধ্যে ওই ই-মেইলটা থাকে, তাহলে প্রমিজ resolve করে মেসেজ দিবে, Email from Nigerian prince। আর যদি ইমেইলটা একজিস্ট validEmail-এর মধ্যে না পায়, তাহলে বলে দিবে, Lets Dance in the spam folder। */
const validEmail = 'abc@example.com';
function sendMail(eMail, message) {
  return new Promise((reject, resolve) => {
    if (validEmail.includes(eMail)) {
      resolve(`Email from Nigerian prince: ${message}`);
    } else {
      reject(`Lets Dance in the spam folder`);
    }
  });
}
sendMail(validEmail, 'Hi! Faiyaz')
  .then(Validmail => {
    console.log(Validmail);
  })
  .catch(error => {
    console.log(error);
  });

/*---------------------------------------------------------------------------------------------------
                              Fetch  এর প্যাচ
--------------------------------------------------------------------------------------------------*/
/*
1. fetch ফাংশন থেকে রিটার্ন করা প্রমিজের মাধ্যমে response.json() কল করে, ডাটা কনভার্ট কেন করা হয়। */
/*fetch ফাংশন থেকে রিটার্ন করা প্রমিজের মাধ্যমে response.json() কল করে, ডাটাকে জাভাস্ক্রিপ্ট অবজেক্টে কনভার্ট করা হয় যাতে করে সেই ডাটাগুলোকে আমরা সহজে জাভাস্ক্রিপ্ট দিয়ে অ্যাক্সেস করতে পারি। */

/*
2. fetch কেন ইউজ করা হয়। */
/* সার্ভার থেকে কোন কিছু নিএ আসা বা সার্ভারে কিছু পাঠানোর জন্য বা  HTTP request এর জন্য। */

/*
3. fetch আর প্রমিজের মধ্যে ডিফারেন্স কী। */
/*  প্রমিজ হচ্ছে জেনারেলভাবে asynchronous কাজের জন্য। আর fetch হচ্ছে স্পেসিফিকভাবে সার্ভার থেকে কোনো কিছু নিয়ে আসার বা সার্ভারে কিছু পাঠানোর জন্য। ছোটকে কঠিনভাবে বললে বল HTTP রিকোয়েস্টের জন্য। fetch নিজেই প্রমিজ রিটার্ন করে । */

/*
4. একটা API কল লিখে ফেল। যেটা 'https://jsonplaceholder.typicode.com/users' থেকে ইউজার লিস্ট লোড করবে। */
const API = 'https://jsonplaceholder.typicode.com/users';
fetch(API)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
/*
5. fetch প্র্যাকটিস করে ফেল 'https://jsonplaceholder.typicode.com/users/1' এই ইউআরএল থেকে ডাটা লোড করার জন্য। */
const url = 'https://jsonplaceholder.typicode.com/users/1';
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

/*---------------------------------------------------------------------------------------------------
                              ক্রাশ খাইছে  CRUD
--------------------------------------------------------------------------------------------------*/
/*
1. প্রোফাইল single নাকি মেরিড, এই টাইপের ডাটা চেঞ্জ করতে চাইলে PUT না PATCH হবে? */
// PATCH

/*
2. ডাটাবেজে নতুন ইনফরমেশন যোগ করার জন্য কোন HTTP মেথড ব্যবহার হয়? */
// POST

/*
3. একটা ওয়েবসাইটে যখন ভিডিও দেখতে যাই, তখন কী ধরনের অপারেশন হয়? */
// GET. GET মেথড দিয়ে ভিডিও ফাইলের রিকোয়েস্ট পাঠানো হয় এবং ব্রাউজার স্ট্রিম আকারে ভিডিও লোড করে ও চালায়

/*
4. CRUD কী জিনিস?  */
/* 
C = create. Create new datas.
R = read. Get data and load it.
U = update. Modify thte data.
D = delete. Removes data.
*/

/*
5. HTTP-র মেথড বা verb কী কী আছে? কোনটা কী কাজ করে? */
/*
GET – ডাটা রিড (আনা) করার জন্য,
POST – নতুন ডাটা তৈরি (জমা) করার জন্য,
PUT – পুরো ডাটা আপডেট করার জন্য,
PATCH – partially ডাটা আপডেট করার জন্য,
DELETE – ডাটা মুছে ফেলার জন্য
*/

/*---------------------------------------------------------------------------------------------------
                              Try  করে Catch কর
--------------------------------------------------------------------------------------------------*/
/*
1. একটা কোড লিখ, যেখানে JSON.parse ব্যবহার করে ডাটা পার্স করার চেষ্টা করবি। ধর, JSON ডাটা হলো {product: 'Date', price: 450}। তবে সার্ভার কোনো সময় ভুল ডাটা পাঠাতে পারে, যেমন “Data corrupted” লিখে স্ট্রিং ডাটা পাঠিয়ে দিল। যদি এরর হয়, সেটা catch ব্লকে হ্যান্ডেল করবি এবং কনসোলে ম্যাসেজ দিবি "Invalid JSON format"। */
const dataFromServer = JSON.stringify({ product: 'Date', price: 450 });
const dataFromServer2 = 'Invalid JSON format';
try {
  const parsedData = JSON.parse(dataFromServer);
  console.log(parsedData);
} catch (error) {
  console.log('Invalid JSON format');
}

/*
2. validateInput নামে একটা ফাংশন বানা, যেটা ইউজারের ইনপুট চেক করবে। ইনপুটে হতে হবে email address (যেমন test@example.com)। ইনপুট ই-মেইলে যদি @ চিহ্ন না থাকে, তাহলে custom error দেখাবে "Invalid email format"। */
function validateInput(email) {
  try {
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
    console.log(email);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log(`Finished process`);
  }
}
validateInput('test@example.com');
validateInput('testexample.com');
/*
3. JSON.parse ব্যবহার করে এমন একটা কোড ব্লক লিখে ফেল, যেখানে try ব্লকে ধর {role: 'CEO', weeklyHours: 1000} ডাটা আসছে। যদি ডাটা পার্স করতে পারিস এবং এরর যায়। যেইটা হোক না কেন, কনসোলে দেখাবি "Week is over"। */
const data = { role: 'CEO', weeklyHours: 1000 };
try {
  if (typeof data !== 'string') {
    throw new Error('Week is over');
  }
  const parsedData = JSON.parse(data);
  console.log(parsedData);
} catch (error) {
  console.error(error.message);
}

/*
4. stringOnlyParser ফাংশনে চেক কর। ইনপুট null বা empty string বা undefined হলে বলবি "Input must be a String."। */
const obj = {};
const string = '';
const string2 = 'HI FAIYAZ!';
function stringOnlyParser(input) {
  try {
    if (typeof input !== 'string') {
      throw new Error('Input must be a String.');
    }
    console.log(input);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('finished');
  }
}
stringOnlyParser(obj);
stringOnlyParser(string);
stringOnlyParser(string2);

/*
5. try-catch-finally ব্যবহার করে এমন একটা কোড বানা, যেখানে ইউজারের একাউন্ট ডিলিট করার সিমুলেশন হবে। try ব্লকে বলবি "Deleting account", catch ব্লকে বলবি "Failed to delete account", আর finally ব্লকে বলবি "Account deletion process finished"। */
try {
  console.log('Deleting account');
  throw new Error('got error');
} catch (error) {
  console.log('Failed to delete account');
} finally {
  console.log('Account deletion process finished');
}

/*---------------------------------------------------------------------------------------------------
                              Async আর Await এর ভাজা মাছ
--------------------------------------------------------------------------------------------------*/
/*
1. async-await কেন ব্যবহার করা হয়? */
/* Asynchronous কাজকে synchronous মতো লেখা যায়। এতে কোড অনেক সহজে পড়া যায়। 
উদাহরণ: ডাটা ফেচ করা, ফাইল পড়া, টাইম delay ইত্যাদি।
 Promise handling অনেক সহজ হয়।.then().catch() না লিখে সরাসরি try...catch ব্যবহার করা যায়। Error handling আরও পরিষ্কার হয়। Debug করা সহজ হয়
*/

/*
2. একটি async ফাংশন লিখে ফেল, আর এইটার নাম দিবি fetchUser। এই ফাংশনের ভিতরে এই url লিংক 'https://jsonplaceholder.typicode.com/users/2' থেকে ডাটা লোড করে ডাটাকে console লগ করবি। এ ছাড়া অবশ্যই try-catch ইউজ করবি। */
async function fetchUser() {
  try {
    const FetchUrl = await fetch(
      'https://jsonplaceholder.typicode.com/users/2'
    );
    const response = await FetchUrl.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
fetchUser();

/*
3. Callback hell বা Pyramid of Doom কী জিনিস? এইটা কখন হয়, আর এর সমাধান কী? */
/*যখন অনেকগুলো asynchronous কাজ (যেমন API call, file read, delay ইত্যাদি) একটার পর একটা করতে হয়, এবং প্রত্যেকটার শেষে একটা করে callback function বসানো হয় Callback Hell ঘটে তখনই। 
এইভাবে nesting করতে করতে কোড দেখতে হয় pyramid এর মতো হয় এবং কোড পড়তে কষ্ট হয়। Maintain করা কঠিন হয়।

আর এর সমাধান async-await ব্যবহার করা যেটা সবচেয়ে ক্লিন ও human-friendly উপায়। */

/*
4. 'https://jsonplaceholder.typicode.com/posts?userId=1' থেকে তার সব পোস্ট লোড কর। দুইভাবে কর। প্রথমবার callback স্টাইলে আর পরেরবার async-await দিয়ে। */
function loadPost(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`err`);
      }
      return response.json();
    })
    .then(posts => {
      callback(null, posts);
    })
    .catch(error => {
      callback(error, null);
    });
}
loadPost(1, (error, posts) => {
  if (error) {
    console.error('Callback স্টাইলে পোস্ট লোড করার সময় ত্রুটি:', error);
  } else {
    console.log('post in callBack style', posts);
  }
});

async function loadPostAsyncAwait() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=1`
    );
    if (!response.ok) {
      throw new Error(`HTTP Status: ${response.status}`);
    }
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Async-Await স্টাইলে পোস্ট লোড করার সময় ত্রুটি:', error);
    throw error;
  }
}
async () => {
  try {
    console.log(await loadPostAsyncAwait());
  } catch (error) {}
};
/*
5. async-await দিয়ে একটা ফাংশন লিখ, যা 'https://jsonplaceholder.typicode.com/comments' থেকে কমেন্ট লোড করবে। অবশ্যই try-catch-finally ইউজ করবি এবং finally-তে একটা console.log দে, 'Request completed!' । */
async function loadComment() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const comment = await response.json();
    console.log(comment);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Request completed!');
  }
}
loadComment();
/*
6. Async-await দিয়ে এমন একটা ফাংশন লিখ, যেটা ইউজার ID প্যারামিটার হিসেবে নিবে। তারপর 'https://jsonplaceholder.typicode.com/users/ID' থেকে সেই ইউজারের ডাটা লোড করবে। ইউআরএলের মধ্যে লাস্টে টেমপ্লেট স্ট্রিং দিয়ে প্যারামিটার হিসেবে যেই ID দিবি, সেটা ডায়নামিকভাবে বসিয়ে দিবি। কোনো এরর হলে সেটাকে try-catch দিয়ে হ্যান্ডেল করবি। */
async function loadUserId(userID) {
  try {
    const userId = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    const loadingID = await userId.json();
    console.log(loadingID);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Request completed!');
  }
}
loadUserId(1);
