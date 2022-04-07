/*
IF

Sablonai:
- if () {}
- if () {} else {}
- if () {} else {} else {}

Palyginimo operatoriai:
- visi: >,<
- naudotini: >, <, >=, <=, ===, !==;
- NEnaudotini: ==. !=
*/


console.log('----------');
const akiuSpalva = 'raudona';

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai!');
} else {
    if (akiuSpalva === 'melyna') {
        console.log('Melynakiai megsta melynes.');
    } else {
        if (akiuSpalva === 'ruda') {
            console.log('Rudaakiai yra melagiai.');
        } else {
            if (akiuSpalva === 'raudona') {
                console.log('Raudonakis? ... Tu turbut programuotojas...');
            } else {
                console.log('O tu turi akis?...');
            }

        }
    }
}

console.log('-----------------');

const temperatura = 50;
const nuoKadaLaikomeKadSilta = 15;
const arYraKrituliu = false;

if (arYraKrituliu) {
    if (temperatura >= nuoKadaLaikomeKadSilta) {
        console.log('Varyk su maike.');
    } else {
        console.log('Tau reikes kailiniu');
    }
} else {
    if (temperatura >= nuoKadaLaikomeKadSilta) {
        console.log('Gali eiti nuogas');
    } else {
        console.log('Be striukes neapsieisi');
    }
}

console.log('---------');