const person = {
    firstName: 'Steve',
    lastName: 'Job',
    age: 20,
    email: 'steve@job.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Arizona',
        zipcode: '91231'
    },
    getBirtYear: function () {
        return d.getFullYear() - this.age;
    },
}
var d = new Date();

let val

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirtYear();
// val = d.getFullYear();
console.log(val);