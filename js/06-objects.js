console.clear();
/*
OBJECT - objektas; galima pritempti: setas, žodynas

{key: value}

*/

const emptyObject = {};
console.log(emptyObject);

const user = {
    'name': 'Petras',
    'age': 99,
    'isMarried': true,
    'mano pazymiai': [10, 9, 8], //patartina vengti raktų iš kelių žodžių
};
console.log(user);

//Sveiki, as esu [vardas] ir man yra [kazkiek] metu.

const name = user['name']; //key pateikiamas kabutėse
const age = user['age']

const sayHi = `Sveiki, as esu ${name} ir man yra ${age} metu.`;
console.log(sayHi);

// Galima parašyti viską vienoje eilutėje, kintamuosius įrašant iš karto (standartinis metodas)
const sayHi2 = `Sveiki, as esu ${user['name']} ir man yra ${user['age']} metu.`;
console.log(sayHi2);

//Galiam supaprastinti [' '] į . (neveikia, jei key yra tarpų, tuomet reikia [''] )
const sayHi3 = `Sveiki, as esu ${user.name} ir man yra ${user.age} metu.`;
console.log(sayHi3);

console.log(user['mano pazymiai'])

console.log ('-----------------')

const blynai = {}; //sukuriamas objektas
console.log('Blynas:', blynai);
console.log(blynai.dydis);

blynai.dydis = 10; // vėliau jį galima pildyti
console.log('Blynas:', blynai);
console.log(blynai.dydis);

console.log ('-----------------')

const marks = [10, 2, 8, 4, 6]; //konstanta yra pats maryvas ir ji nekeiciama, bet galima keisti jos kintamuosiu
console.log('Pazymiai:', marks);
console.log('Antras:', marks[1]);

marks[1] = 5;
console.log('Pazymiai:', marks);
console.log('Antras:', marks[1]);

console.clear();

const person = {
    non: 'grata',
    age: Infinity,
    name: 'nesakysiu',
    luckyNumbers: [2, 6, 13, 666, 74],
}

console.log(person);
console.log('Laimingu skaicius kiekis:', person.luckyNumbers.length); //length skirta masyvo elementu skaiciui nusakyti

console.log('Vardo ilgis:', person.name.length) //length gali buti naudojama simboliu skaiciui nusakyti