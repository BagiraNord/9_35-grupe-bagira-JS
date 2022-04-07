function daugyba(a, b) {
    // jei a nera skaicius -> ERROR
    if (typeof a === 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (typeof b !== 'number') {
        return 'ERROR: antras paramentras turi buti skaicius';
    }
    return a * b;
}