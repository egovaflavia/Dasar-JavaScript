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

console.log(val);
console.log(typeof val);
// menghitung panjang data string dg pro Length
console.log(val.length);