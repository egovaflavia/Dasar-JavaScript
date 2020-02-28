let val;

const today = new Date();
let birthday = new Date('8-16-1996 23:20:20');
birthday = new Date('Augustus 16 1996 23:20:20');
birthday = new Date('8/16/2020 23:20:20');
// Konversi tanggal ke string
val = birthday.toString();
// Memanipulasi tanggal
val = birthday.getFullYear();
val = birthday.getMonth();
val = birthday.getDate();
val = birthday.getHours();
val = birthday.getMinutes();
val = birthday.getSeconds();
val = birthday.getMilliseconds();

// Mednapatkan waktu acak
val = birthday.getTime();

// set tanggal
birthday.setDate(20)
birthday.setMonth(1)
birthday.setFullYear(2020)
birthday.setHours(12)
birthday.setMinutes(20)
birthday.setSeconds(220)

console.log(birthday);