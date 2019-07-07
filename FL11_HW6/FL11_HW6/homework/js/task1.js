let a1, a2, b1, b2, c1, c2, correctInputData;
const two = 2;

correctInputData = true;

a1 = parseFloat(prompt('Enter the number \'a1\', please.'));
if (!isNaN(a1)) {
    a2 = parseFloat(prompt('Enter the number \'a2\', please.'));
} else {
    correctInputData = false;
}
if (!isNaN(a2) && correctInputData) {
    b1 = parseFloat(prompt('Enter the number \'b1\', please.'));
} else {
    correctInputData = false;
}
if (!isNaN(b1) && correctInputData) {
    b2 = parseFloat(prompt('Enter the number \'b2\', please.'));
} else {
    correctInputData = false;
}
if (!isNaN(b2) && correctInputData) {
    c1 = parseFloat(prompt('Enter the number \'c1\', please.'));
} else {
    correctInputData = false;
}
if (!isNaN(c1) && correctInputData) {
    c2 = parseFloat(prompt('Enter the number \'c2\', please.'));
} else {
    correctInputData = false;
}
if (!isNaN(c2) && correctInputData) {
    let xCenter = (a1 + b1) / two === c1;
    let yCenter = (a2 + b2) / two === c2;
    console.log(xCenter && yCenter);
} else {
    alert('Invalid input data\nReload the page and try again if you wish.');
}
