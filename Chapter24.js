/*---------------------------------------------------------------------------------------------------
                            Web API, ব্রাউজার API
--------------------------------------------------------------------------------------------------*/

// 1. লোকাল স্টোরেজ আর সেশন স্টোরেজ এর মধ্যে ডিফারেন্স কি?
// ! In localstorage data are saved for a long time and don't removed from the browser if it is off while in the session storage data are saved for a short time.
// If I close the browser tab it removes from the storage

// 2. Local Storage ব্যবহার করে ইউজারের ডার্ক মোড প্রেফারেন্স (on/off) সেভ কর। একটা key সেট কর। কোটার নাম হবে mode এবং সেটার ভ্যালু dark সেট কর। তারপরের আবার এই mode এর মান light সেট কর।
localStorage.setItem('mode', 'dark');
console.log(localStorage.getItem('mode'));
localStorage.setItem('mode', 'light');
console.log(localStorage.getItem('mode'));

// 3. Session Storage ব্যবহার করে ইউজারের লগইন টোকেন সেট কর। টোকেনের নাম দে userToken এবং ভ্যালু দে abcd1234। পরে সেটা বের করে কনসোলে লগ করে দেখাও।
sessionStorage.setItem('userToken', 'abcd1234');
console.log(sessionStorage.getItem('userToken'));

// 4. Local Storage-এ ইউজারের নাম সেট কর যার নাম userName এবং ভ্যালু দে Alex। পরে সেই নামকে Local Storage থেকে রিমুভ কর।
localStorage.setItem('userName', 'Alex');
let setData = localStorage.getItem('userName');
console.log(setData);
let dltData = localStorage.removeItem('userName');
console.log(dltData);

// 5. History API দিয়ে ব্রাউজারের দুই পেইজ ব্যাক কর।
history.go(-2);
