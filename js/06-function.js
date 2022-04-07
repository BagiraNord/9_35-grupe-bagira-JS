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
