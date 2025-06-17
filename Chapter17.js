/*---------------------------------------------------------------------------------------------------
                                করলে ইউজ Map set থাকবে না রিগ্রেট
--------------------------------------------------------------------------------------------------*/
/*
1. একটা ফাংশন বানা, যা নামের প্রথম অক্ষর রিটার্ন করবে। ইনপুট যদি string না হয়, তখন validation ম্যাসেজ দিবে। */
function name(params) {
  if (typeof params !== 'string') {
    return 'plz provide a string';
  }
  const firstChar = params.charAt(0);
  return firstChar;
}
console.log(name('Roni'));

/*
2. একটা ফাংশন লিখ array-এর শেষ উপাদান দিবে। ইনপুট array না হলে ওয়ার্নিং ম্যাসেজ দিবে। */
function printArray(params) {
  if (Array.isArray(params) !== true) {
    return 'plz provide an array';
  }
  return params[params.length - 1];
}
console.log(printArray(67));

/*
3. rectangle-এর area বের করার getArea ফাংশন বানা, যেখানে length আর width নাম্বার না হলে
validation ম্যাসেজ দিবে। এরিয়া বের করার জন্য length আর width গুণ করে দিলেই হবে। */
function getArea(length, width) {
  if (typeof length !== 'number' || typeof width !== 'number') {
    return 'plz provide a number';
  }
  const area = length * width;
  return area;
}
console.log(getArea(34, 56));
console.log(getArea(34, '56'));

/*---------------------------------------------------------------------------------------------------
                                করলে ইউজ Map set থাকবে না রিগ্রেট
--------------------------------------------------------------------------------------------------*/
/*
1. যদি কোন লাইন শেষে সেমিকোলন না দিস তাহলে কি এরর দিবে ? */
// Syntax Error.

/*
2. Reference Error কখন দিবে ? */
// when I will not declare a variable but try to use it. It will give me Reference Error.

/*
3. Syntax Error আর Type Error এর ডিফারেন্স কি ? */
/* Syntax Error is given for writting incorrect syntax in the code or forget to give syntax. But 
Type Error is given for using wrong opearation by a wrong data type. */
