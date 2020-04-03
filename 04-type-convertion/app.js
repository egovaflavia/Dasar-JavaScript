let val;

// Number to String
// Menggunakan fungsi js String
val = String(123);
val = String(5 + 5);

// Boolean to string
val = String(false);

// Date to string
val = String(new Date());

// Array to string
val = String([1, 2, 3]);

// toString
val = (45).toString();

// String to Number
val = Number('10.123');

// Bool to Number
val = Number(true);
val = Number(false);

val = Number('Hello World'); //NaN Not a Number
val = Number([1, 2, 3]); //NaN Not a Number

// convert to decimal
val = parseInt(100.31); //parseInt conv to decimal
val = parseFloat(100.31); //parseInt conv to pecahan



// console.log(val);
// console.log(typeof val);
// // menghitung panjang data string dg pro Length
// // console.log(val.length);
// console.log(val.toFixed()); // toFixed menampilkan pembulatan

// Aritmatika