console.log(greet('Adela', 'Irona'));


function greet(firstName = 'Egova', lastName = 'Flavia') {
    return `Hello ${firstName} ${lastName}`;
}

const square = function (x = 8) {
    return x * x;
}

console.log(square());

// IFFEs
(function (name) {
    console.log(`Hello, ${name}`);
}('Egova'))