/*
ARRAY
- pozicijos
- pozicijos tik sveikieji skaiciai
- ilgis / irasukiekis -> .length
*/

const pazymiai = [10, 2, 8, 6];
console.log('Pazymiai:', pazymiai);

// pazymiu vidurkis
// pazymiu kiekis
// koks maziausias
// koks didziausias
// mediana

console.log('Pirmas:', pazymiai[0]);
console.log('Antras:', pazymiai[1]);
console.log('Trecias:', pazymiai[2]);
console.log('Trecias:', pazymiai[1,5]);

const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis - 1;
console.log('Paskutinis:', pazymiai[paskutinioPozicija]); 
console.log('Paskutinis:', pazymiai[pazymiai.length - 1]);
// masyvas -> ilgis -> paskutinio skaiciaus pozicija
// [1] -> 1 -> 0
// [1, 2] -> 2 -> 1
// [1, 2, -6] -> 3 -> 2

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(studentai);

let index = 0;
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);
console.log(`Cia yra: ${studentai[index++]}.`);