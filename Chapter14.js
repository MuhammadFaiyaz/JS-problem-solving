/*---------------------------------------------------------------------------------------------------
                               মিঊট থাক immutable স্ট্রিং
--------------------------------------------------------------------------------------------------*/
/*
1. একটা স্ট্রিং বানা city, যার মান হবে Chattogram। এবার indexOf দিয়ে বের কর, g কোন ইনডেক্সে আছে। */
const city = 'Chattogram';
console.log(city.indexOf('g'));

/*
2. একটা স্ট্রিং বানা division, যার মান হবে Sylhet । includes দিয়ে দেখ, এই স্ট্রিংয়ের মধ্যে y আছে কি না। */
const division = 'Sylhet';
console.log(division.includes('y'));

/*
3. const name = 'Rifat'; স্ট্রিংয়ের শেষ ক্যারেক্টার বের কর। */
const name = 'Rifat';
console.log(name[4]);

/*
4. একটা স্ট্রিং বানা language, যার মান হবে javascript। এবার indexOf দিয়ে চেক কর, rip কোন ইনডেক্সে
শুরু হয়েছে। */
const language = 'javascript';
console.log(language.indexOf('rip'));

/*
5. const text = 'Immutable'; স্ট্রিংয়ের দৈর্ঘ্য বের কর এবং চেক কর এটি mutable কি না। */
const text = 'Immutable';
console.log(text.length);

text[2] = 'Fa';
console.log(text); // not mutable

/*---------------------------------------------------------------------------------------------------
                               Lower-Upper সমান সমান
--------------------------------------------------------------------------------------------------*/
/*
1. একটা ই-মেইল আছে const email = 'User@Example.Com'; এই ই-মেইলকে ছোট হাতের অক্ষরে কনভার্ট
কর। */
const email = 'User@Example.Com';
console.log(email.toLowerCase());

/*
2. const greeting = 'hELlo WoRLd'; এই স্ট্রিং পুরোটা বড় হাতের অক্ষরে এবং ছোট হাতের অক্ষরে কনভার্ট
করে দেখ। */
const greeting = 'hELlo WoRLd';
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());

/*
3. কেইস ইগনোর করে চেক কর const language = 'JavaScript'; এর মধ্যে script আছে কি না। */
const Language = 'JavaScript';
console.log(Language.toLowerCase().includes('script'));

/*
4. const text = 'Nodejs'; এই স্ট্রিংয়ের প্রথম ক্যারেক্টার বড় হাতের কি না, তা চেক কর। */
const text1 = 'Nodejs';
const compare = text1.charAt(0) === text1.charAt(0).toUpperCase();
console.log(compare);

/*---------------------------------------------------------------------------------------------------
                                 কোপা  split শামসু
--------------------------------------------------------------------------------------------------*/
/*
1. তোর একগাদা বন্ধুর নাম তোকে একটা স্ট্রিং আকারে দিছে "Raju,Rana,Hasan,Kabir,Mahi"। এদের নামগুলো আলাদা বের করে একটা অ্যারে বানিয়ে ফেল। */
const myFriends = 'Raju,Rana,Hasan,Kabir,Mahi';
const makeArray = myFriends.split(',');
console.log(makeArray);

/*
2. তুই একটা অ্যারের মধ্যে তোর বন্ধুদের নাম লিখেছিস। এবার নামগুলো একটা স্ট্রিং আকারে বের করবি, আর
প্রতিটা নামের মাঝে কমা(“,”) থাকবে। */
const buddies = ['Ali', 'Hassan', 'Zara'];
console.log(buddies.join(','));

/*
3. "function if else while" এই স্ট্রিংটাকে স্পেস দিয়ে ভাগ করে প্রতিটা কি-ওয়ার্ড আলাদা করে অ্যারেতে রাখ। */
const keyWord = 'function if else while';
console.log(keyWord.split(' '));

/*
4. একটি অ্যারে আছে languages=["JavaScript", "Python", "Java"]। এই অ্যারের প্রতিটা ভাষার নামকে একটি স্ট্রিং বানিয়ে প্রতিটার মাঝে সেমিকোলন যোগ কর। */
const languages = ['JavaScript', 'Python', 'Java'];
console.log(languages.join(';'));

/*
5. একটি স্ট্রিং দেওয়া আছে "for,while,for-in,for-of,do-while"। এই স্ট্রিং থেকে লুপগুলোর নাম আলাদা করার জন্য split ব্যবহার কর। */
const loop = 'for,while,for-in,for-of,do-while';
console.log(loop.split(','));

/*
6. একটা স্ট্রিং দেওয়া আছে " console log debug "। এই স্ট্রিং থেকে শুরুর এবং শেষের ফাঁকা জায়গা রিমুভ
করে ফেল। */
const string30 = ' console log debug ';
console.log(string30.trim());

/*
7. const str1 = "push"; const str2= "pop"; const str3 = "shift"; const str4 = "unshift" এই এই স্ট্রিংগুলাকে জোড়া দিয়ে একটা স্ট্রিং বানিয়ে ফেল। concat ইউজ করে। */
const str1 = 'push';
const str2 = 'pop';
const str3 = 'shift';
const str4 = 'unshift';
const concat = str1.concat(' ', str2, ' ', str3, ' ', str4);
console.log(concat);
/*
8. "Hello JavaScript Developers" এই স্ট্রিং থেকে "JavaScript" অংশটা বের কর। */
const string40 = 'Hello JavaScript Developers';
console.log(string40.substring(6, 16));

/*
9. একটা স্ট্রিং আছে "Code more learn more"। স্ট্রিং থেকে 'learn' অংশটা substring দিয়ে বের কর।
*/
const string50 = 'Code more learn more';
console.log(string50.substring(10, 15));

/*---------------------------------------------------------------------------------------------------
                                বারে বারে repeat করে যাই
--------------------------------------------------------------------------------------------------*/
/*
1. একটি string তৈরি কর, যার ভ্যালু হবে "Hi"। সেটি repeat দিয়ে 10 বার রিপিট করে কনসোল লগ কর। */
const dialouge = 'Hi';
console.log(dialouge.repeat(' ', 10));

/*
2. একটি স্ট্রিং বানা "I am learning JavaScript. JavaScript is amazing!"। replace ব্যবহার করে প্রথম "JavaScript"-কে "JS" দিয়ে রিপ্লেস কর। */
const js = 'I am learning JavaScript. JavaScript is amazing!';
console.log(js.replace('JavaScript', 'JS'));

/*
3. একটি স্ট্রিং বানা "I love apples and apples are tasty!". সব "apples"-কে "mangoes" দিয়ে রিপ্লেস
কর। */
const apples = 'I love apples and apples are tasty!';
console.log(apples.replaceAll('apples', 'mangoes'));
