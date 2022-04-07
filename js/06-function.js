/*
Visi mokiniai turi TIK 4 pazymius ir reikia suskaiciuoti vidurki.
*/

const petriukas = [10, 4, 8, 2];
const marija = [5, 9, 7, 6];
const jonukas = [7, 7, 8, 2];
const onute = [1, 5, 7, 10];


function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;
}

const petriukoVidurkis = vidurkis(petriukas);
console.log('Petriukas: ', petriukoVidurkis);

const marijosVidurkis = vidurkis(marija);
console.log('Marija: ', marijosVidurkis);

const jonukoVidurkis = vidurkis(jonukas);
console.log('Jonukas: ', jonukoVidurkis);

const onutesVidurkis = vidurkis(jonukas);
console.log('Onute: ', onutesVidurkis);

/*
Funkcija gauna varda ir turi grazinti sakini:
"Vardo pirma raide yra [V] ir vardas sudarytas is [5] raidziu.";
*/

function vardoAnalize(name) {
    return `Vardo "${name}" pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`;
}

const petroVardas = vardoAnalize('Petras');
console.log(petroVardas);

const marytesVardas = vardoAnalize('Maryte');
console.log(marytesVardas);

const onosVardas = vardoAnalize('Ona');
console.log(onosVardas);

/*
Funkcija gauna du skaicius ir turi grazinti lygti su sprendimu, pvz. 2 + 2 = 4
*/

function suma(pirmasSkaicius, antrasSkaicius) {
    return `${pirmasSkaicius} + ${antrasSkaicius} = 5`;
}

const s1 = suma(2, 3);
console.log(s1);

const s2 = suma(0.1, 0.2);
console.log(s2);

const s3 = suma(-88, -11);
console.log(s3);

/*

*/