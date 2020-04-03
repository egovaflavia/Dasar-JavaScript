// for
const cars = [
    'Honda',
    'Daihatsu',
    'Ford',
    'Lambo'
]
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

cars.forEach(function (car, i, array) {
    console.log(`${i} : ${car}`);
    console.log(array);

})