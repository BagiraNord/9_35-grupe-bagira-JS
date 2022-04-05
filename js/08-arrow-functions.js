const pirmas = 7;
const antras = 5;

// iprasta funkcija
function suma(a,b) {
    return a + b;
}
const r1 = suma(88, 22);
console.log(r1);

// kintamajam priskirta anonimine funkciaj
const atimtis = function (a, b) {
    return a - b;
}
const r2 = atimtis (pirmas, antras);
console.log(r2);

// arrow (rodykline) funkcija
const dalyba = (a, b) => {
    return a / b;
}
// arrow (rodykline) funkcija
// jei logikos bloke {} yra tik 1 procedūra
const daugyba = (a, b) => {
    return a * b;
}

