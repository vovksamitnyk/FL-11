

/*============"(  02  )"=============*/

function executeforEach(a, b) {
    for (let i = 0; i < a.length; i++) {
        b(a[i]);
    }
}
executeforEach([3, 4, 56], function(el) {
    console.log(el)
})


/*============"(  03  )"=============*/

function mapArray(a3, b3) {
    let array = [];
    executeforEach(a3, function(x) {
        let resultOfTheFunction = b3(x);
        array.push(resultOfTheFunction);
    });
    return array
}
mapArray([3, 4, 56], function(el) {
    return el + 3
});


/*============"(  04  )"=============*/

function filterArray(a4, b4) {
    let array = [];
    executeforEach(a4, function(x) {
        let resultOfTheInsertedFunction = b4(x);
        if (resultOfTheInsertedFunction) {
            array.push(x)
        }
    });
    return array
}
filterArray( [3, 4, 0, 0, 55, 56], function(el) {
    return el > 3
});


//*============"(  05  )"=============*/

function showFormattedDate(notFormattedDate) {
    let shortMonth = notFormattedDate.toLocaleString('en-us', { month: 'short' });
    return "Date: " + shortMonth + " " + notFormattedDate.getDate() + " " + notFormattedDate.getFullYear();
}
showFormattedDate(new Date('2019-01-27T23:10:00'));



//*============"(  09  )"=============*/

function keys (a9) {
    let arrayKeys = [];
    for (let key in a9) {
        if (a9.hasOwnProperty(key)) {
            arrayKeys.push(key);
        }
    }
    return arrayKeys
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});



/*============"(  10  )"=============*/

function values(a10) {
    let arrayKeys = keys(a10);
    return mapArray(arrayKeys, function(x) {
        return a10[x]
    })
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});
