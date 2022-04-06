/*
STRING

kabutes:
- viengubos (')
- dvigubos (")
- backtickas (`)

TEKSTO SIMBOLIU KIEKIS
./length
*/


const name = 'Petras';
console.log(name);

const lastname = "Petraitis";
console.log(lastname);

const viengubaKabute = "viengubos(')";
console.log(viengubaKabute);

const dvigubaKabute = 'dvigubos(")';
console.log(dvigubaKabute);

const dvigubaKabute12 = 'Cia yra vienguba (\') ir dviguba (\") kabutės.'; 
console.log(dvigubaKabute12);

const clientName = 'Maryte';
const clientAge = 87;
// Client Maryte is 87 years old.
const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old. ';
console.log(clientSentence);

const backtickClient = `Client ${clientName} is ${clientAge} years old.`;

const n1 = 7;
const n2 = 5;
// 7 + 5 = 12
const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);

const abc = 'abcdef';
const abcDydis = abc.length;
console.log(`Abeceles "${abc}" dydis yra ${abcDydis} simboliu."`);
