let people = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "birthday": '2016-03-18T00:00:00',
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "birthday": '1991-02-11T00:00:00',
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "birthday": '1984-04-17T00:00:00',
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "birthday": '1994-04-17T00:00:00',
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }

]

/*============"(  00  )"=============*/

function returnsNumbers(string) {
    let array = [];
    let numbers = "0123456789";
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (string[i] === numbers[j]) {
                array.push(1 * string[i]);
            }
        }
    }
    return array;
}

returnsNumbers("n1um3ber95");


/*============"(  01  )"=============*/

function returnsTypes() {
    let types = {};
    for (let i = 0; i < arguments.length; i++) {
        let typeOfElement = typeof arguments[i];
        if (types[typeOfElement] === undefined) {
            types[typeOfElement] = 1;
            } else {
                types[typeOfElement] += 1;
            }
    }
    return types
}
returnsTypes(5, "ejfhvbej", null, alert, false, undefined, "ejfhvbej");


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


//*============"(  06  )"=============*/

function canConvertToDate(date) {
    return new Date(date).getTime() > 0;
}
canConvertToDate('2016-13-18T00:00:00');


//*============"(  07  )"=============*/

const millisecInSec = 1000;
const secInMin = 60;
const minInHour = 60;
const hourInDay = 24;

function daysBetween(from, to) {
    return Math.round((new Date(to).getTime() - new Date(from).getTime()) /
                      (millisecInSec * secInMin * minInHour * hourInDay));
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))


//*============"(  08  )"=============*/

function getAmountOfAdultPeople(data) {
    let amountOfAdultPeople = filterArray( data, function(x) {
        return daysBetween(x.birthday, new Date()) > 18 * 365;
    } );
    return amountOfAdultPeople.length;
}
getAmountOfAdultPeople(people);


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
