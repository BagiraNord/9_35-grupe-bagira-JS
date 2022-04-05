function reverseString2(text) {
    const a = text.length - 1;
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        reverse = letter + reverse;
    }
    return reverse;
}

console.log(reverseString2('xyz'), '-->', 'zyx');

function liekana(nuo, iki, daliklis) {
    let count = 0;

    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            count++;
        }
    }
    return "Skaičių intervale tarp ${nuo} ir ${iki}, besidalijanciu is liekanos is ${daliklis} yra ${count} vienetai. ;
}

