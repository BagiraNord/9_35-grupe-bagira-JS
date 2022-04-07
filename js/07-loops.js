/*
LOOP: for, white, for-in, foreach, ...
*/

const pazymiai = [10, 2, 8, 4, 6];

// FOR
let sumaFor = 0;
for (let i1 = 0; i1 < pazymiai.length; i1++) {
    const pazymys = pazymiai[i1];
    sumaFor += pazymys;
    console.log(`${i1}) pazymys ${pazymys} [${sumaFor}]`);
}

//WHILE
let sumaWhile = 0;
let i2 = 0;
while(i2 < pazymiai.length) {
    const pazymys = pazymiai[i2];
    sumaWhile =+ pazymys;
    console.log(`${i2} pazymys ${pazymys} [${sumaWhile}]`);
    i2++
}

for (const pazymys of pazymiai) {

}

// FOR-OF
console.log('---------');
for (const pazymys of pazymiai) {
    const pazymys = pazymiai
}