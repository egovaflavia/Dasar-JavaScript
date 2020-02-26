const firstName = 'Egova';
const lastName = 'Riva';
const age = 32;
const phar = 'Hello, My name is ' + firstName + 'and Im ' + age;

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
val = 'Hello, My name is ' + firstName + 'and Im ' + age;

// Append 
val = 'Adela ';
val += 'Fitra';

// Escaping
val = 'That\'s awesome, I can\'t wait it';

// Doubel quote
val = "That's awesome, I can't wait it";

// Length
val = (firstName + ' ' + lastName).length;

// Concat (Property)
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Memanggil array suatu string
val = firstName[0];
val = firstName[2];
val = firstName[3];

// IndexOf mencari urutan array suatu string
val = firstName.indexOf('E');

// CharAt memanggil berdasarkan urutan array
val = firstName.charAt('2');

// Memanggil Huruf terakhi dengan cerdas
val = firstName.charAt(firstName.length - 1);

// Substring memoting index array
val = firstName.substring(0, 2);

// Slice sama dengan substring tp bisa pakai minus
val = firstName.slice(0, 2);
val = firstName.slice(-1); // Angka terakhir

// Split
val = phar.split(' ');

// Replace
val = phar.replace('Hello', 'Hi');

// Includes , Boolean
// Mencari dalam string, ada atau tidak
val = phar.includes('Hello');



console.log(val);