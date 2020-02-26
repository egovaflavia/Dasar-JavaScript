const name = 'Egova';
const age = 23;
const job = 'Web Developer';
const city = 'Padang';

let html;

// Without template string (es5)

html = '<ul><li>Nama : ' + name + '</li><li>Umur : ' + age + '</li><li>Pekerjaan : ' + job + '</li><li>Alamat : ' + city + '</li></ul>';

html = '<ul>' +
    '<li>Nama : ' + name + '</li>' +
    '<li>Umur : ' + age + '</li>' +
    '<li>Pekerjaan : ' + job + '</li>' +
    '<li>Alamat : ' + city + '</li>' +
    '<ul>';

function hello() {
    return 'Hello, From JavaScript';
}
// With template string es6
html = `
<ul>
<li>Nama : ${name}</li>
<li>Umur : ${age}</li>
<li>Pekerjaan : ${job}</li>
<li>Alamat : ${city}</li>
<li>${5+2}</li>
<li>${hello()}</li>
<li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
</ul>
`;
document.body.innerHTML = html;