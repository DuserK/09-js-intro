
// Kintamųjų iniciavimas

console.clear();

//1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//      a. Po kiekvieno jų inicijavimo, išvesti į console

const numeris = 6;
console.log(numeris);

const velnioSkaicius = 777;
console.log(velnioSkaicius);

const skaicius = 23;
console.log('Skaicius: ', skaicius);

//2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//     a. Po kiekvieno jų inicijavimo, išvesti į console
console.log('---------------------------');

const vardas = 'Darius';
console.log('Vardas: ',vardas);

const pavarde = 'Kaminskas';
console.log('Pavarde: ',pavarde);

const username = 'DuserK';
console.log('Username: ', username);

//3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//      a. Po kiekvieno jų inicijavimo, išvesti į console
console.log('---------------------------');

const numeracija = [1, 2, 3, 4, 5];
console.log(numeracija);

const numeracija2 = [1, -2, 3, -4, 5];
console.log(numeracija2);

const numeracija3 = [100, 22, -30, 4.559, 545];
console.log(numeracija3);

//4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//      a. Po kiekvieno jų inicijavimo, išvesti į console
console.log('---------------------------');

const vardai = ['Marius', 'Jonas', 'Antanas', 'Kristijonas', 'Leonas'];
console.log('Vardai: ', vardai);

const gyvunai = ['kate', 'šuo', 'karvė', 'palėda', 'meška'];
console.log('Gyvūnai: ', gyvunai);

const items = ['pen', 'mouse', 'headphones', 'letter', 'wallet'];
console.log('Items: ', items);
 
// Veiksmai su kintamaisiais

console.clear();

//1. Susumuoti visus skaičiaus tipo kintamuosius
//      a. Rezultatą išvesti į console
console.log('---------------------------');

const sumNumbers =(numeris + velnioSkaicius + skaicius);

console.log('Sum:', sumNumbers);

console.log('Suma', numeris + velnioSkaicius + skaicius);

//2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//      a. Rezultatą išvesti į console
console.log('---------------------------');

const sumWords = (vardas + ' ' + pavarde + ' ' + username);
const sumWords1 = vardas + ' ' + pavarde + ' ' + username;

console.log('Sentence: ', sumWords)
console.log('Sentence: ', sumWords1)

console.log('Sentence: ',`${vardas} ${pavarde} ${username}`)

//3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//      a. 1-2+3-4+5
console.log('---------------------------');

//const numeracija = [1, 2, 3, 4, 5];
console.log (numeracija[0] - numeracija[1] + numeracija[2] - numeracija[3] + numeracija[4]);

//const numeracija2 = [1, -2, 3, -4, 5];
console.log(numeracija2[0] - numeracija2[1] + numeracija2[2] - numeracija2[3] + numeracija2[4]);

const arraySum = numeracija2[0] - numeracija2[1] + numeracija2[2] - numeracija2[3] + numeracija2[4];
console.log(arraySum);

//const numeracija3 = [100, 22, -30, 4.559, 545];

