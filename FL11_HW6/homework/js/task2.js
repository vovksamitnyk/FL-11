let a, b, c, correctInputData;
correctInputData = true;
let valuesOfTringleSides = [];


a = parseFloat(prompt('Enter the first value, please.', '0'));
if (!isNaN(a) && a > 0) {
    valuesOfTringleSides.push(a);
    b = parseFloat(prompt('Enter the second value, please.', '0'));
} else {
    correctInputData = false;
}
if (!isNaN(b) && correctInputData && b > 0) {
    valuesOfTringleSides.push(b);
    c = parseFloat(prompt('Enter the third value, please.', '0'));
} else {
    correctInputData = false;
}
if (!isNaN(c) && correctInputData && c > 0) {
    valuesOfTringleSides.push(c);
    let maximum = 0;
    for (let i = 0; i < valuesOfTringleSides.length; i++) {
        if (valuesOfTringleSides[i] > maximum) {
            maximum = valuesOfTringleSides[i];
        }
    }
    if (maximum + maximum - a - b - c >= 0) {
        console.log('Triangle doesn’t exist');
    } else if (a === b && b === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle')
    }

} else {
    console.log('Invalid input data\nReload the page and try again if you wish.');
}
